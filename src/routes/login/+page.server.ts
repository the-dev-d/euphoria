import { connection } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import { createAuthToken } from  '$lib/auth/Authentication'

export const load = ({locals}) => {
    if(locals.user) {
        throw redirect(302, "/dashboard")
    }
}

export const actions = {
    default: async ({request, cookies}) => {

        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        if(!email || !password) {
            return {
                success: false,
                message: "All fields are required."
            }
        }

        const user = await  connection.findParticipantByAttribute({email})
        if(!user){
            return {
                success: false,
                message: "User not found"
            }
        }
        if(password !== user.password) {
            return {
                success: false,
                message: "Invalid credentials"
            }
        }

        const token = createAuthToken(user.participant_id, user.email)
        const b64 = btoa(user.email);
        cookies.set('session', b64 + "." +token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false, //TODO : to be changed,
            maxAge: 60 * 60 * 24 * 3
        });

        throw redirect(302, "/dashboard")

    },
} satisfies Actions;