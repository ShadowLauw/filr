"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  return (
    <>
      {isAuthenticated && (
        <button
          className="text-dark dark:text-light hover:text-violet-200"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      )}
    </>
  );
}

export function SignInButton() {
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();

  return (
    <>
      {!isAuthenticated && (
        <button
          className="text-dark dark:text-light hover:text-violet-200"
          onClick={() => router.push("/login")}
        >
          Sign in
        </button>
      )}
    </>
  );
}

export function GetStartedButton() {
  const router = useRouter();

  return (
    <>
      <button
        className="block mx-auto text-dark dark:text-light hover:bg-violet-300 bg-violet-400 w-3xs h-10 rounded-full m-4"
        onClick={() => router.push("/login")}
      >
        Get started!
      </button>
    </>
  );
}
