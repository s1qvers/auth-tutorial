import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { Suspense } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  preload: true,
})

// Предварительная загрузка страницы логина
const LoginButtonWithSuspense = () => (
  <Suspense fallback={<div className="h-10 w-full bg-gray-200 animate-pulse rounded-md" />}>
    <LoginButton>
      <Button 
        variant="secondary" 
        size="lg"
        className="w-full"
      >
        Войти
      </Button>
    </LoginButton>
  </Suspense>
);

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
          &#128272; Аутентификация
        </h1>
        <p className="text-white text-lg">
          Простая служба аутентификации
        </p>
        <div className="w-full max-w-[200px] mx-auto">
          <LoginButtonWithSuspense />
        </div>
      </div>
    </main>
  );
}
