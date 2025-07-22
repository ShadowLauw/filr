"use client";
import { Authenticated, Unauthenticated } from "convex/react";
import { GetStartedButton } from "../components/LoginButtons";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-16 mb-8 text-center">
        Welcome to <span className="font-intel font-light">Filr</span>
      </h1>
      <h2 className="text-center text-xl mb-16">Let your journey start here</h2>
      <div className="mt-40">
        <GetStartedButton />
      </div>
    </>
  );
}
