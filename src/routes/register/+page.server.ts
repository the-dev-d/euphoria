import { connection } from "$lib/prisma/connection";
import { ContestantSchema } from "$lib/zod/types";
import { redirect, type Actions } from "@sveltejs/kit";

export const load = ({locals}) => {
    if(locals.user) {
        throw redirect(302, "/dashboard")
    }
}

export const actions = {
    default: async ({request}) => {

        const data = await request.formData();
        const name = (data.get('name') as string).trim();
        const email = (data.get('email') as string).trim();
        const phone = (data.get('phone') as string).trim();
        const password = (data.get('password') as string).trim();
        const college = (data.get('college') as string).trim();


        const parsed = ContestantSchema.safeParse({
            name, email, password, phone, college
        });


        if(parsed.success)  {
            
            try {
                const existing = await connection.findParticipantByAttribute({email});
                if(existing) {
                    return {
                        success: false,
                        message: "User already exist"
                    }
                }
                const created = await connection.createParticipant(parsed.data);
            } catch (e) {
                
                return {
                    success: false,
                    error: "Failed to create participant"
                }
            }
            throw redirect(302, "/login")
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