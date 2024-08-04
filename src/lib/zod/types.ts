import { z } from "zod";

export const ContestantSchema = z.object({
    name: z.string().regex(/^[A-z. ]+$/, {message: "Only alphabets, spaces and . are allowed"}),
    email: z.string().email(),
    college: z.string(),
    phone: z.string().regex(/^[0-9]+$/, {message: "Phone number should only have numbers"}).length(10),
    password: z.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, {
        message: "Password must include at least one uppercase letter, lowercase letters, digit and special character"
    })
})

export const HuntMemberSchema = z.object({
    name: z.string().regex(/^[A-z. ]+$/, {message: "Only alphabets, spaces and . are allowed"}),
    email: z.string().email(),
    phone: z.string().regex(/^[0-9]+$/, {message: "Phone number should only have numbers"}).length(10),
})

export const RiotIdSchema = z.string().regex(/^[a-zA-Z0-9-]{3,16}#[a-zA-Z]{2,5}$/, 'Invalid Riot Games ID format');
export const DiscordIdSchema = z.string().regex(/^\d{17,19}$/, 'Invalid Discord ID format').transform(val => BigInt(val))
export const CollegeNameSchema = z.string().min(1);

export const GamerSchema = z.object({
    name: z.string().regex(/^[A-z. ]+$/, {message: "Only alphabets, spaces and . are allowed"}),
    email: z.string().email(),
    phone: z.string().regex(/^[0-9]+$/, {message: "Phone number should only have numbers"}).length(10),
    riotId: RiotIdSchema,
    discordId: DiscordIdSchema,
    substitute: z.boolean(),
    college: CollegeNameSchema.nullable()
})

export const TeamNameSchema = z.string().regex(/^[A-z0-9_ ]+$/, {message: "Team name should only have letters, numbers, space, underscores and period"})
export const ImageSchema = z.instanceof(File);
export const TransactionSchema = z.string().min(12)

export type Contestant = z.infer<typeof ContestantSchema>;
export type HuntMember = z.infer<typeof HuntMemberSchema>;
export type Gamer = z.infer<typeof GamerSchema>;

export const ParticipationFormSchema = z.object({
    codingUG: z.boolean(),
    codingPG: z.boolean(),
    webDesigning: z.boolean(),
    transactionId: TransactionSchema,
    paymentScreenshot: z.instanceof(File, {message: "Please upload a payment screenshot"})
})