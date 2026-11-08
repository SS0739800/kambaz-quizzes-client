"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = () => {
    if (!username || !password) return;
    setCurrentUser({
      ...emptyUser,
      _id: crypto.randomUUID(),
      username,
      password,
      role: "STUDENT",
    });
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" id="wd-signin-link" className="text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
