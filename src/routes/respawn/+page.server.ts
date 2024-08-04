import { connection } from "$lib/prisma/connection";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

    try {
        const count = await connection.getGamingCount();

        return {
            count
        }
    } catch (error) {
        console.log(error);
        return "__";
    }
}