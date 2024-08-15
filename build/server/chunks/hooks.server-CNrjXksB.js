import './index-DzcLzHBX.js';
import { c as createAuthToken } from './Authentication-D6-zTrtl.js';
import { c as connection, a as client } from './connection-B7tAGNEl.js';
import 'crypto';
import '@prisma/client';

const handle = async ({ event, resolve }) => {
  const { cookies } = event;
  const token = cookies.get("session");
  if (token) {
    const [b64, hash] = token.split(".");
    const email = atob(b64);
    try {
      const participant = await connection.findParticipantByAttribute({ email });
      if (!participant) {
        return resolve(event);
      }
      delete participant.password;
      const generatedHash = createAuthToken(participant.participant_id, participant.email);
      if (generatedHash === hash) {
        event.locals.user = participant;
      }
    } catch (error) {
      console.log(error);
    }
  }
  const admin = cookies.get("admin");
  if (admin) {
    const [b64, hash] = admin.split(".");
    const username = atob(b64);
    try {
      const adminUser = await client.admins.findFirst({ where: { username } });
      if (!adminUser) {
        return resolve(event);
      }
      const generatedHash = createAuthToken(adminUser.admin_id, adminUser.username);
      if (generatedHash === hash) {
        event.locals.admin = adminUser;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return resolve(event);
};

export { handle };
//# sourceMappingURL=hooks.server-CNrjXksB.js.map
