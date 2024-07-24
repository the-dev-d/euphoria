import type { Contestant } from "$lib/zod/types";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const connection = {
    createParticipant,
    findParticipantByAttribute,
    addPayment,
    addParticipation
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
    const saved = await client.event_payment.create({
      data: participation
    })

    return saved;
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


  async function findAllParticipants() {
    try {
      const participants = await client.participants.findMany();
      return participants;
    } catch (error) {
      console.error("Error finding participants:", error);
      throw error;
    }
  }