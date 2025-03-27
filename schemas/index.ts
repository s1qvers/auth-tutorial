import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Требуется минимум 6 символов"
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Требуется адрес электронной почты"
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Требуется адрес электронной почты"
    }),
    password: z.string().min(1, {
        message: "Требуется пароль"
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Требуется адрес электронной почты"
    }),
    password: z.string().min(6, {
        message: "Требуется минимум 6 символов"
    }),
    name: z.string().min(1, {
        message: "Имя обязательно"
    }),
});
