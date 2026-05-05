import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { envVariables } from "../../config/envVariables";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailPassword: {
        enabled: true,
    },
    secret: envVariables.BETTER_AUTH_SECRET,
    baseURL: envVariables.BETTER_AUTH_URL,
});
