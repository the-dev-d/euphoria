import { client } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";

export const load: PageServerLoad = async ({params}) => {

    const {uuid} = params;

    const participation = await client.tickets.findFirst({
        include: {
            viewer: true
        },
        where: {
            uuid
        }
    })

    return {
        uuid,
        viewer: participation?.viewer,
        ticket: participation
    }
}

export const actions = {

    complete: async ({request}) => {
        const data = await request.formData();

        const uuid = String(data.get('uuid'));

        if(!uuid) {
            throw redirect(301, "/");
        }

        const res = await client.tickets.update({
            data: {
                used: true,
            },
            where: {
                uuid
            }
        })

        return res;

    }

} satisfies Actions