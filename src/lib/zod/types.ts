import { z } from "zod";

export const ContestantSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().length(10).regex(/[0-9]+/, {message: "Phone number should only have numbers"}),
    password: z.string().min(8).max(16).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, {
        message: "Password must include at least one uppercase letter, lowercase letters, digit and special character"
    })
})
export type Contestant = z.infer<typeof ContestantSchema>;