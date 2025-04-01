"use client";

import Link from "next/link";
import React from "react";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
}

export const LoginButton = React.memo(({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    if (mode === "modal") {
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }

    return (
        <Link 
            href="/auth/login"
            className="w-full inline-block"
        >
            {children}
        </Link>
    );
});

LoginButton.displayName = "LoginButton";

