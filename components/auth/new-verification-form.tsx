"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams, useRouter } from "next/navigation";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper"; 
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (!token || isVerified) {
            setError("Отсутствует токен!");
            setIsLoading(false);
            return;
        }

        newVerification(token)
            .then((data) => {
                if (data.success) {
                    setSuccess(data.success);
                    setIsVerified(true);
                    setTimeout(() => {
                        router.push("/auth/login");
                    }, 2000);
                }
                if (data.error) {
                    setError(data.error);
                }
            })
            .catch(() => {
                setError("Что-то пошло не так!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [token, router, isVerified]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Подтверждение вашей проверки"
            backButtonLabel="Вернуться к входу"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                {isLoading && (
                    <BeatLoader />
                )}
                {!isLoading && success && (
                    <FormSuccess message={success} />
                )}
                {!isLoading && error && !success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper>
    );
}