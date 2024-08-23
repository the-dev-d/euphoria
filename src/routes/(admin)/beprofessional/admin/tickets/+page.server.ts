import { client } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url, depends}) => {

    depends("database");
    let pageNumber = Number(url.searchParams.get('page')) || 1;

    let limit = Number(url.searchParams.get('limit') || 10);

    if(limit < 0)
        limit = 10;

    const where = {
        verified: false,
    };
    
    const count = await client.tickets.count({
        where
    });

    if(pageNumber > Math.ceil(count/limit)) {
        pageNumber = Math.ceil(count/limit);   
    }

    if(pageNumber < 1)
        pageNumber = 1;

    let tickets = await client.tickets.findMany({

        take: limit,
        include: {
            viewer: true
        },
        skip: (pageNumber-1) * limit,
        where
    })

    console.log(tickets);

    return {
        tickets,
        pageNumber,
        limit,
        count,
        filter: ""
    }
}

export const actions = {

    verify: async ({request, locals}) => {

        try {
            const data = await request.formData();
            const ticketId = Number(data.get('ticketId'));

            if(!ticketId) {
                return {
                    success: false,
                }
            }

            const res = await client.tickets.update({
                where: {
                    ticket_id: ticketId,
                },
                data: {
                    verified: true
                }
            })

            return {
                success: true,
            }

        } catch (error) {
            console.log(error)

            return {
                success: false,
            }
        }
    }
    
} satisfies Actions;