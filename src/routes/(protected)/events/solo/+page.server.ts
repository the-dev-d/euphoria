import { redirect, type Actions } from "@sveltejs/kit";
import { PRICE } from "../../../../lib/constants/constants";
import { connection } from "$lib/prisma/connection";
import crypto from 'crypto';
import { writeFileSync } from 'fs';

export const load = async ({locals}) => {
    const res = await connection.findParticipation(locals.user.participant_id);
    const events = res.map(e => e.event_code);
    
    if(events.includes("TH") || events.includes("CUG") || events.includes("CPG") || events.includes("WEB")) {
        throw redirect(301, "/dashboard")
    }
}

export const actions = {
    default: async ({request, locals}) => {

        const data = await request.formData();
        
        let event = data.get('event') as string;
        event  = event.toUpperCase();

        if(event !== "CUG" && event !== "CPG" && event !== "WEB") {
            return {
                success: false,
                message: "Invalid event"
            }
        }
        
        const paymentScreenshot = data.get('payment-screenshot') as File;
        const transactionId = data.get('upi-transaction-id') as string;

        const {user} = locals;

        const registeredDetails = await connection.findSoloEvents(user.participant_id);
        const registeredEvents = registeredDetails?.map(e => e.event_code);

        if(registeredEvents?.length) {

            return {
                success: false,
                message: "Event already registered"
            }
        }
        
        let amount = 150;
        // if(codingPG) {
        //     if(registeredEvents?.includes("CPG"))
        //         return {
        //             success: false,
        //             message: "PG Coding already registered."
        //         }
        //     if(registeredEvents?.includes("CUG"))
        //         return {
        //             success: false,
        //             message: "UG Coding already registered."
        //         }
        //     if(registeredEvents?.includes("WEB"))
        //         return {
        //             success: false,
        //             message: "Web designing already registered."
        //         }
        //     amount+=PRICE.codingPG;
        //     events.push({
        //         event_code: "CPG"
        //     })
        // }
        // else if(codingUG) {

        //     if(registeredEvents?.includes("CUG"))
        //         return {
        //             success: false,
        //             message: "UG Coding already registered."
        //         }
        //     if(registeredEvents?.includes("CPG"))
        //         return {
        //             success: false,
        //             message: "PG Coding already registered."
        //         }
        //     amount+=PRICE.codingUG;
        //     events.push({
        //         event_code: "CUG"
        //     })
        // }
        // if(webDesigning) {
        //     if(registeredEvents?.includes("WEB"))
        //         return {
        //             success: false,
        //             message: "Web designing already registered."
        //         }
        //     events.push({
        //         event_code: "WEB"
        //     })
        //     amount+=PRICE.webDesigning;
        // }

        // if(amount == 0) {
        //     return {
        //         success: false,
        //         message: "Select atleast one event."
        //     }
        // }

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
            const res = await connection.addPayment({amount, uuid: crypto.randomUUID(), upi_transaction_id: transactionId, screenshot: fileName });
            const eventParticipation = {
                participant_id: user.participant_id,
                payment_id: res.payment_id,
                verified: false,
                event_code: event
            }
            console.log(eventParticipation);
            const res2 = await connection.addParticipation([eventParticipation]);

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