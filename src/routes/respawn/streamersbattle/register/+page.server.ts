import { client } from "$lib/prisma/connection";
import { ViewerSchema } from "$lib/zod/types";
import { redirect, type Actions } from "@sveltejs/kit";

export const load = ({locals}) => {
    if(locals.viewer) {
        throw redirect(302, "/respawn/streamersbattle/dashboard")
    }
}

export const actions = {
    default: async ({request}) => {

        const data = await request.formData();
        const name = (data.get('name') as string).trim();
        const email = (data.get('email') as string).trim();
        const phone = (data.get('phone') as string).trim();
        const password = (data.get('password') as string).trim();



        const parsed = ViewerSchema.safeParse({
            name, email, password, phone
        });


        if(parsed.success)  {
            
            try {
                const existing = await client.viewers.findFirst({
                    where: {
                        email
                    }
                });
                if(existing) {
                    return {
                        success: false,
                        message: "User already exist"
                    }
                }
                const created = await client.viewers.create({data: {
                    name, email, password, phone
                }});

                console.log(created);
            
            } catch (e) {
                console.log(e);
                
                return {
                    success: false,
                    error: "Failed to create viewer"
                }
            }
            throw redirect(302, "/respawn/streamersbattle/login")
        }
        return {
            success: false,
            error: parsed.error.format(),
            data: {
                name, email, password, phone
            }
        };
    },
} satisfies Actions;