import { GetStartedButton } from "../components/login-buttons";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center m-4">
        Welcome to <span className="font-intel font-light">Filr</span>
      </h1>
      <h2 className="text-center text-xl">Let your journey start here</h2>
      <GetStartedButton />
    </>
  );
}
