import { redirect } from '@sveltejs/kit'

export const load = async ({locals}) => {

    console.log(locals);

    if(!locals.admin) {
        throw redirect(301, "/beprofessional/login")
    }
}