import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {

        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

    },
} satisfies Actions;