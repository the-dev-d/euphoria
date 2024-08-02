import type { Contestant, HuntMember } from "$lib/zod/types";
import { PrismaClient, type Participants } from "@prisma/client";
import { date } from "zod";

const client = new PrismaClient();

export const connection = {
    createParticipant,
    findParticipantByAttribute,
    addPayment,
    addParticipation,
    findSoloEvents,
    checkTeamNameAvailable,
    findParticipation,
    createTeam,
    checkEventParticipation
}

async function createParticipant(contestant: Contestant) {
    const created = await client.participants.create({
      data: contestant,
    });
    return created;
}

async function findParticipantByAttribute(condition:any) {
  try {
    const participant = await client.participants.findUnique({
      where: condition,
    });
    return participant;
  } catch (error) {
    console.error("Error finding participant:", error);
    throw error;
  }
}

export async function addPayment(participation : {
  amount: number, 
  upi_transaction_id: string, 
  uuid: string,
  screenshot: string
}) {

  try {
    return client.event_payment.create({
      data: participation
    })
  } catch (error) {
    console.log("Error adding payment:", error);
    throw error
  }
}

async function addParticipation(participation: any[]) {

  try {
    const saved = await client.event_participants.createMany({
      data: participation
    })

    return saved;
  } catch (error) {
    console.log("Error adding participation:", error);
    throw error
  }
}

async function findSoloEvents(userId: number) {

  try {
    const events = await client.event_participants.findMany({
      where: {
        participant_id: userId
      }
    })

    return events;
  }catch(error) {
    console.log("Unable to fetch events ", error);
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

async function checkTeamNameAvailable(teamName: string, eventCode: "TH" | "RP") {

  const team = await client.teams.findMany({
    where: {
      team_name: teamName,
    }
  });
  return team.length == 0;
}

export type Team = { 
  teamName: string, 
  eventCode: "TH"| "RP", 
  transactionId: string, 
  filePath: string, members: HuntMember[], 
  leader: Participants
}

async function findParticipation(participant_id: number) {
  
  return await client.event_participants.findMany({
    where: {
      participant_id
    }
  })
}

async function createTeam(payment:any, participation:any, team:any) {

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
    ])
}

async function checkEventParticipation(email: string[], eventCode: string) {

  return await client.participants.findMany({
    where: {
      email: {
        in: email
      },
      event_participant: {
        some: {
          event_code: eventCode,
        }
      }
    }
  })
}