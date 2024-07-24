import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({locals}) => {

    if(locals.user) {
        return {
            authenticated: true,
            user: locals.user
        }
    }
}