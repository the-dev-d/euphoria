import { Handle } from '@sveltejs/kit';
import { createAuthToken } from './lib/auth/Authentication';
import { client, connection } from "$lib/prisma/connection";

export const handle: Handle = async ({event, resolve}) => {

    const {cookies} = event;
    const token = cookies.get('session');


    if(token) {
        const [b64, hash] = token.split('.');
        const email = atob(b64);
        try {
            const participant = await connection.findParticipantByAttribute({email})
            if(!participant){
                //event.cookies.delete('session');
                return resolve(event);
            }
                
            delete participant.password;
            
            const generatedHash = createAuthToken(participant.participant_id, participant.email)
            if(generatedHash === hash) {
                event.locals.user = participant;
            }

        } catch (error) {
            console.log(error);
        }
    }

    const admin = cookies.get('admin');


    if(admin) {
        const [b64, hash] = admin.split('.');
        const username = atob(b64);
        try {
            const adminUser = await client.admins.findFirst({where:{username}})
            if(!adminUser){
                //event.cookies.delete('session');
                return resolve(event);
            }
                
            const generatedHash = createAuthToken(adminUser.admin_id, adminUser.username)
            if(generatedHash === hash) {
                event.locals.admin = adminUser;
            }

        } catch (error) {
            console.log(error);
        }
    }
    return resolve(event);
}