import { c as connection } from './connection-B7tAGNEl.js';
import { e as error } from './index-DzcLzHBX.js';
import '@prisma/client';

const POST = async ({ request }) => {
  try {
    const { teamName, eventCode } = await request.json();
    if (typeof teamName !== "string")
      return { success: false, message: "Team name must be a string" };
    const available = await connection.checkTeamNameAvailable(teamName.toUpperCase(), eventCode);
    if (available)
      return new Response(
        JSON.stringify(
          {
            success: true,
            available
          }
        )
      );
    return new Response(
      JSON.stringify(
        {
          success: true,
          available
        }
      )
    );
  } catch (e) {
    throw error(400, "Invalid inputs");
  }
};

export { POST };
//# sourceMappingURL=_server.ts-B0lCgyK0.js.map
