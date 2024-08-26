import { z } from 'zod';

const ContestantSchema = z.object({
  name: z.string().regex(/^[A-z. ]+$/, { message: "Only alphabets, spaces and . are allowed" }),
  email: z.string().email(),
  college: z.string(),
  phone: z.string().regex(/^[0-9]+$/, { message: "Phone number should only have numbers" }).length(10),
  password: z.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, {
    message: "Password must include at least one uppercase letter, lowercase letters, digit and special character"
  })
});
const ViewerSchema = z.object({
  name: z.string().regex(/^[A-z. ]+$/, { message: "Only alphabets, spaces and . are allowed" }),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]+$/, { message: "Phone number should only have numbers" }).length(10),
  password: z.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, {
    message: "Password must include at least one uppercase letter, lowercase letters, digit and special character"
  })
});
const HuntMemberSchema = z.object({
  name: z.string().regex(/^[A-z. ]+$/, { message: "Only alphabets, spaces and . are allowed" }),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]+$/, { message: "Phone number should only have numbers" }).length(10)
});
const RiotIdSchema = z.string().regex(/^[a-zA-Z0-9-]{2,16}#[a-zA-Z0-9-]{2,5}$/, "Invalid Riot Games ID format");
const DiscordIdSchema = z.string().regex(/^\d{17,19}$/, "Invalid Discord ID format");
const CollegeNameSchema = z.string().min(1);
const GamerSchema = z.object({
  name: z.string().regex(/^[A-z. ]+$/, { message: "Only alphabets, spaces and . are allowed" }),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]+$/, { message: "Phone number should only have numbers" }).length(10),
  riotId: RiotIdSchema,
  discordId: DiscordIdSchema,
  substitute: z.boolean(),
  college: CollegeNameSchema.nullable()
});
const TeamNameSchema = z.string().regex(/^[A-z0-9_ ]+$/, { message: "Team name should only have letters, numbers, space, underscores and period" });
z.instanceof(File);
const TransactionSchema = z.string().min(12);
z.object({
  codingUG: z.boolean(),
  codingPG: z.boolean(),
  webDesigning: z.boolean(),
  transactionId: TransactionSchema,
  paymentScreenshot: z.instanceof(File, { message: "Please upload a payment screenshot" })
});

export { ContestantSchema as C, DiscordIdSchema as D, GamerSchema as G, HuntMemberSchema as H, RiotIdSchema as R, TeamNameSchema as T, ViewerSchema as V, TransactionSchema as a, CollegeNameSchema as b };
//# sourceMappingURL=types-nSWFzZyp.js.map
