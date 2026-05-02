import dotenv from 'dotenv'
import AppError from '../app/errorHelpers/AppError';
import status from 'http-status';

dotenv.config();

interface EnvConfig {
    NODE_ENV: string;
    PORT: string;
    FRONTEND_URL: string;
    DATABASE_URL: string;
    MONGODB_STORY_URI: string;
    MONGODB_CONVERSATION_URI: string;
    REDIS_URL: string;
    BETTER_AUTH_SECRET: string;
    BETTER_AUTH_URL: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    BREVO_SMTP_HOST: string;
    BREVO_SMTP_PORT: string;
    BREVO_SMTP_USER: string;
    BREVO_SMTP_PASS: string;
    EMAIL_FROM: string;
    VAPID_PUBLIC_KEY: string;
    VAPID_PRIVATE_KEY: string;
    VAPID_SUBJECT: string;
    AI_API_KEY: string;
    AI_MODEL: string;
}

const loadEnvVariables = (): EnvConfig => {
    const requiredEnvVariable = [
        'NODE_ENV',
        'PORT',
        'FRONTEND_URL',
        'DATABASE_URL',
        'MONGODB_STORY_URI',
        'MONGODB_CONVERSATION_URI',
        'REDIS_URL',
        'BETTER_AUTH_SECRET',
        'BETTER_AUTH_URL',
        'CLOUDINARY_CLOUD_NAME',
        'CLOUDINARY_API_KEY',
        'CLOUDINARY_API_SECRET',
        'BREVO_SMTP_HOST',
        'BREVO_SMTP_PORT',
        'BREVO_SMTP_USER',
        'BREVO_SMTP_PASS',
        'EMAIL_FROM',
        'VAPID_PUBLIC_KEY',
        'VAPID_PRIVATE_KEY',
        'VAPID_SUBJECT',
        'AI_API_KEY',
        'AI_MODEL',
    ]

    requiredEnvVariable.forEach((variable) => {
        if (!process.env[variable]) {
            throw new AppError(status.INTERNAL_SERVER_ERROR, `Environment variable ${variable} is required but not set in .env file.`)
        }
    })

    return {
        NODE_ENV: process.env.NODE_ENV as string,
        PORT: process.env.PORT as string,
        FRONTEND_URL: process.env.FRONTEND_URL as string,
        DATABASE_URL: process.env.DATABASE_URL as string,
        MONGODB_STORY_URI: process.env.MONGODB_STORY_URI as string,
        MONGODB_CONVERSATION_URI: process.env.MONGODB_CONVERSATION_URI as string,
        REDIS_URL: process.env.REDIS_URL as string,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
        BREVO_SMTP_HOST: process.env.BREVO_SMTP_HOST as string,
        BREVO_SMTP_PORT: process.env.BREVO_SMTP_PORT as string,
        BREVO_SMTP_USER: process.env.BREVO_SMTP_USER as string,
        BREVO_SMTP_PASS: process.env.BREVO_SMTP_PASS as string,
        EMAIL_FROM: process.env.EMAIL_FROM as string,
        VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY as string,
        VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY as string,
        VAPID_SUBJECT: process.env.VAPID_SUBJECT as string,
        AI_API_KEY: process.env.AI_API_KEY as string,
        AI_MODEL: process.env.AI_MODEL as string,
    }
}

export const envVariables = loadEnvVariables()