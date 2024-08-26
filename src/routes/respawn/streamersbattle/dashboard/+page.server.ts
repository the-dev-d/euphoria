import { client } from '$lib/prisma/connection.js';
import { redirect, type Actions } from '@sveltejs/kit'
import { writeFileSync } from 'fs';
export const ssr = false;
export const load = async ({locals}) => {

    if(!locals.viewer) {
        console.log("not view")
        throw redirect(307, "/respawn/streamersbattle")
    }
    const ticket = await client.tickets.findFirst({
        where: {
            viewer_id: locals.viewer.viewer_id,
        }
    })
    return {
        viewer : locals.viewer,
        ticket
    }
}

export const actions = {

    logout: async({cookies}) => {

        cookies.delete('viewer', {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false, //TODO : to be changed,
            maxAge: 60 * 60 * 24 * 3
        });

        throw redirect(302, "/");
    },
    book: async ({request, locals}) => {

        const data = await request.formData();
        
        const paymentScreenshot = data.get('payment-screenshot') as File;
        const transactionId = data.get('upi-transaction-id') as string;
        const count =  Number(data.get('count'));

        const {viewer} = locals;

        const booking = await client.tickets.findMany({
            where: {
                viewer: {
                    viewer_id: viewer.viewer_id,
                }
            }
        })

        if(booking?.length) {

            return {
                success: false,
                message: "Ticket booking limit reached"
            }
        }
        
        if(!transactionId) {
            return {
                success: false,
                message: "Transaction id required."
            }
        }

        if(!count) {
            return {
                success: false,
                message: "Count required."
            }
        }

        if(!paymentScreenshot) {
            return {
                success: false,
                message: "Payment screenshot required."
            }
        }

        
        const uuid = crypto.randomUUID();
        const id = crypto.randomUUID();
        try {
            const fileName = `static/screenshots/viewers/${viewer.viewer_id}-${uuid}.png`;
            writeFileSync(fileName, Buffer.from(await paymentScreenshot.arrayBuffer()));
            const res = await client.tickets.create({
                data: {
                    count,
                    screenshot: fileName,
                    upi_transaction_id: transactionId,
                    viewer_id: viewer.viewer_id,
                    uuid: id
                }
            })

        } catch (error) {

            console.log(error)
            return {
                success: false,
                message: "Error"
            }
        }
        throw redirect(302, "/respawn/streamersbattle/dashboard")

    }
} satisfies Actions