import z from "zod";
import status from "http-status";
import { TErrorSource } from "../interfaces/error.interface";

export const handleZodError = (err: z.ZodError) => {
    const statusCode = status.BAD_REQUEST;
    const message = "Zod Validation Error";
    const errorSource: TErrorSource[] = []

    err.issues.forEach((issue: { path: any[]; message: any; }) => {
        errorSource.push({
            path: issue.path.join(" => "),
            message: issue.message
        })

    })

    return {
        success: false,
        message,
        errorSource,
        statusCode,
    }
}