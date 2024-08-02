import { connection } from "$lib/prisma/connection";
import type { RequestHandler } from "@sveltejs/kit";
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({request}) => {

    try {
        const {teamName, eventCode} = await request.json();

        if(typeof teamName !== "string")
            return {success: false,  message: "Team name must be a string"};

        const available = await connection.checkTeamNameAvailable(teamName.toUpperCase(), eventCode);
        if(available)
        return new Response(
            JSON.stringify(
                {
                    success: true,
                    available
                }
            )
        )

        return new Response(
            JSON.stringify(
                {
                    success: true,
                    available
                }
            )
        )
    } catch (e) {
        throw error(400, "Invalid inputs");
    }
}