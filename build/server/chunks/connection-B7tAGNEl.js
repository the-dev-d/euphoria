import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const connection = {
  createParticipant,
  findParticipantByAttribute,
  addPayment,
  addParticipation,
  findSoloEvents,
  checkTeamNameAvailable,
  findParticipation,
  createTeam,
  getGamingCount,
  checkEventParticipation
};
async function createParticipant(contestant) {
  const created = await client.participants.create({
    data: contestant
  });
  return created;
}
async function getGamingCount() {
  return await client.event_participants.count({
    where: {
      event_code: "RP"
    }
  });
}
async function findParticipantByAttribute(condition) {
  try {
    const participant = await client.participants.findUnique({
      where: condition
    });
    return participant;
  } catch (error) {
    console.error("Error finding participant:", error);
    throw error;
  }
}
async function addPayment(participation) {
  try {
    return client.event_payment.create({
      data: participation
    });
  } catch (error) {
    console.log("Error adding payment:", error);
    throw error;
  }
}
async function addParticipation(participation) {
  try {
    const saved = await client.event_participants.createMany({
      data: participation
    });
    return saved;
  } catch (error) {
    console.log("Error adding participation:", error);
    throw error;
  }
}
async function findSoloEvents(userId) {
  try {
    const events = await client.event_participants.findMany({
      where: {
        participant_id: userId
      }
    });
    return events;
  } catch (error) {
    console.log("Unable to fetch events ", error);
  }
}
async function checkTeamNameAvailable(teamName, eventCode) {
  const team = await client.teams.findMany({
    where: {
      team_name: teamName
    }
  });
  return team.length == 0;
}
async function findParticipation(participant_id) {
  return await client.event_participants.findMany({
    where: {
      participant_id
    }
  });
}
async function createTeam(payment, participation, team) {
  return client.$transaction([
    client.event_payment.create({
      data: {
        ...payment,
        participation: {
          create: [participation]
        }
      }
    }),
    client.teams.create({
      data: team
    })
  ]);
}
async function checkEventParticipation(email, eventCode) {
  return await client.participants.findMany({
    where: {
      email: {
        in: email
      },
      event_participant: {
        some: {
          event_code: eventCode
        }
      }
    }
  });
}

export { client as a, connection as c };
//# sourceMappingURL=connection-B7tAGNEl.js.map
