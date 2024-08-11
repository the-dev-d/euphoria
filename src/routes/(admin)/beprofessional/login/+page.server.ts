import { client } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import { createAuthToken } from  '$lib/auth/Authentication'
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({locals}) => {
    if(locals.user) {
        throw redirect(302, "/")
    }

    if(locals.admin) {
        throw redirect(302, "/beprofessional/admin")
    }
}

export const actions = {
    default: async ({request, cookies}) => {

        const data = await request.formData();
        const username = data.get('username') as string;
        const password = data.get('password') as string;

        if(!username || !password) {
            return {
                success: false,
                message: "All fields are required."
            }
        }

        const admin = await client.admins.findFirst({
            where: {
                username
            }
        })  
        if(!admin){
            return {
                success: false,
                message: "User not found"
            }
        }
        if(password !== admin.password) {
            return {
                success: false,
                message: "Invalid credentials"
            }
        }

        const token = createAuthToken(admin.admin_id, admin.username)
        const b64 = btoa(admin.username);
        cookies.set('admin', b64 + "." +token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false, //TODO : to be changed,
            maxAge: 60 * 60 * 24 * 3
        });

        throw redirect(302, "/beprofessional/admin")

    },
} satisfies Actions;