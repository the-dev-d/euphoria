import { redirect, type Actions } from "@sveltejs/kit";
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

        const {user} = locals;

        const registeredDetails = await connection.findSoloEvents(user.participant_id);
        const registeredEvents = registeredDetails?.map(e => e.event_code);
        
        let amount = 0;
        if(codingPG) {
            if(registeredEvents?.includes("CPG"))
                return {
                    success: false,
                    message: "PG Coding already registered."
                }
            if(registeredEvents?.includes("CUG"))
                return {
                    success: false,
                    message: "UG Coding already registered."
                }
            amount+=PRICE.codingPG;
            events.push({
                event_code: "CPG"
            })
        }
        else if(codingUG) {

            if(registeredEvents?.includes("CUG"))
                return {
                    success: false,
                    message: "UG Coding already registered."
                }
            if(registeredEvents?.includes("CPG"))
                return {
                    success: false,
                    message: "PG Coding already registered."
                }
            amount+=PRICE.codingUG;
            events.push({
                event_code: "CUG"
            })
        }
        if(webDesigning) {
            if(registeredEvents?.includes("WEB"))
                return {
                    success: false,
                    message: "Web designing already registered."
                }
            events.push({
                event_code: "WEB"
            })
            amount+=PRICE.webDesigning;
        }

        console.log("Unique")
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
            const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;
            writeFileSync(fileName, Buffer.from(await paymentScreenshot.arrayBuffer()));
            const res = await connection.addPayment({amount, uuid, upi_transaction_id: transactionId, screenshot: fileName });
            const eventParticipation = events.map(event => ({...event, participant_id: user.participant_id, payment_id: res.payment_id, verified: false}));
            const res2 = await connection.addParticipation(eventParticipation);

        } catch (error) {

            console.log(error)
            return {
                success: false,
                message: "Error"
            }
        }
        throw redirect(302, "/dashboard")

    }
} satisfies Actions