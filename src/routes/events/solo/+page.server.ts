import type { Actions } from "@sveltejs/kit";


export const actions = {
    default: async ({request}) => {

        const data = await request.formData();
        const coding = data.get('coding');
        const webDesigning = data.get('web-designing');
        const treasureHunt = data.get('treasureHunt');

        console.log(webDesigning)
        return {
            coding,
            webDesigning,
            treasureHunt
        }
    }
} satisfies Actions