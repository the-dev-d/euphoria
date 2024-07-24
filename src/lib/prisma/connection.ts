import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();



export const connection = {
    client
}

async function createParticipant(participantData: any) {
  try {
    const newParticipant = await client.participants.create({
      data: participantData,
    });
    return newParticipant;
  } catch (error) {
    console.error("Error creating participant:", error);
    throw error;
  } 
}

async function findParticipantByAttribute(attribute: any, value: any) {
    try {
      const participant = await client.participants.findFirst({
        where: {
          [attribute]: value,
        },
      });
      return participant;
    } catch (error) {
      console.error("Error finding participant:", error);
      throw error;
 
    }
  }

  async function findAllParticipants() {
    try {
      const participants = await client.participants.findMany();
      return participants;
    } catch (error) {
      console.error("Error finding participants:", error);
      throw error;
    }
  }