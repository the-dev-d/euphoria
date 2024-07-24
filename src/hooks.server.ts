import { Handle } from '@sveltejs/kit';
import { createAuthToken } from './lib/auth/Authentication';
import { connection } from "$lib/prisma/connection";

export const handle: Handle = async ({event, resolve}) => {

    const {cookies} = event;
    const token = cookies.get('session');

    if(token) {
        const [b64, hash] = token.split('.');
        const email = atob(b64);

        console.log(email)

        try {
            const participant = await connection.findParticipantByAttribute({email})
            if(!participant){
                //event.cookies.delete('session');
                return resolve(event);
            }
                
            const generatedHash = createAuthToken(participant.participant_id, participant.email)
            if(generatedHash === hash) {
                event.locals.user = participant;
            }

        } catch (error) {
            console.log(error);
        }
    }
    return resolve(event);
}