import { Request, Response } from 'express'
import { generateAIResponse } from './ai.service'

interface Message {
    role: "user" | "assistant"
    content: string
}

const VALID_ROLES = ["user", "assistant"]

export const chatWithAI = async (req: Request, res: Response) => {
    try {
        const { messages } = req.body

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Messages array is required',
            })
        }

        const isValid = messages.every(
            (msg: Message) =>
                VALID_ROLES.includes(msg.role) &&
                typeof msg.content === 'string' &&
                msg.content.trim().length > 0
        )

        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: 'Each message must have a valid role (user or assistant) and non-empty content',
            })
        }

        const lastMessage = messages[messages.length - 1]
        if (lastMessage.role !== 'user') {
            return res.status(400).json({
                success: false,
                message: 'Last message must be from user',
            })
        }

        const reply = await generateAIResponse(messages)

        res.status(200).json({
            success: true,
            message: 'AI response generated successfully',
            data: reply,
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'AI request failed',
        })
    }
}