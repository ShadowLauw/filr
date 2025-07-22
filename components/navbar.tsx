import Link from "next/link";
import { SignInButton, SignOutButton } from "./LoginButtons";

export default function Navbar() {
  return (
    <header className="bg-violet-400">
      <nav className="flex px-3 py-1 items-center justify-between h-10 font-intel">
        <Link href="/">Filr</Link>
        <SignOutButton />
        <SignInButton />
      </nav>
    </header>
  );
}
