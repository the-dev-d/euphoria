import type { Actions } from "@sveltejs/kit";
import { PRICE } from "../../../../lib/constants/constants";
import { connection } from "$lib/prisma/connection";
import crypto from 'crypto';
import { writeFileSync } from 'fs';

export const actions = {
    default: async ({request, locals}) => {

        const data = await request.formData();
        const codingUG = data.get('coding-ug') as string;
        const codingPG = data.get('coding-pg') as string;
        const webDesigning = data.get('web-designing') as string;
        const paymentScreenshot = data.get('payment-screenshot') as File;
        const transactionId = data.get('upi-transaction-id') as string;
        const events = [];
        
        let amount = 0;
        if(codingPG) {
            amount+=PRICE.codingPG;
            events.push({
                event_code: "CPG"
            })
        }
        else if(codingUG) {
            amount+=PRICE.codingUG;
            events.push({
                event_code: "CUG"
            })
        }
        if(webDesigning) {
            events.push({
                event_code: "WEB"
            })
            amount+=PRICE.webDesigning;
        }

        if(amount == 0) {
            return {
                success: false,
                message: "Select atleast one event."
            }
        }

        if(!transactionId) {
            return {
                success: false,
                message: "Transaction id required."
            }
        }

        if(!paymentScreenshot) {
            return {
                success: false,
                message: "Payment screenshot required."
            }
        }
        const uuid = crypto.randomUUID();
        try {
            const {user} = locals;
            const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;
            writeFileSync(fileName, Buffer.from(await paymentScreenshot.arrayBuffer()));
            const res = await connection.addPayment({amount, uuid, upi_transaction_id: transactionId, screenshot: fileName });
            const eventParticipation = events.map(event => ({...event, participant_id: user.participant_id, payment_id: res.payment_id, verified: false}));
            const res2 = await connection.addParticipation(eventParticipation);

            return {
                success: true,
                message: "Registered successfully."
            }

        } catch (error) {

            console.log(error)
            return {
                success: false,
                message: "Error"
            }
        }

    }
} satisfies Actions