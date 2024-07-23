import { ContestantSchema } from "$lib/zod/types";
import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {

        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const password = data.get('password');


        const parsed = ContestantSchema.safeParse({
            name, email, password, phone
        });

        if(parsed.success) 
            return {
                success: true
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