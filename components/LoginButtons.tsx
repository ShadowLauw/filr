"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  const router = useRouter();

  return (
    <>
      {isAuthenticated && (
        <button
          className="text-dark dark:text-light hover:cursor-pointer"
          onClick={() => signOut().then(() => router.push("/"))}
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
          className="text-dark dark:text-light hover:cursor-pointer"
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
        className="block mx-auto text-dark dark:text-light hover:cursor-pointer hover:bg-violet-500 bg-violet-400 w-3xs h-10 rounded-full m-4"
        onClick={() => router.push("/login")}
      >
        Get started!
      </button>
    </>
  );
}
