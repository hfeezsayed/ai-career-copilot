"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { registerUser } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await registerUser(name, email, password);

      alert("Registration successful");

      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">Create Account</h1>

        <p className="mb-8 text-zinc-400">Join AI Career Copilot</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black
              px-4
              py-3
              text-white
              outline-none
            "
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black
              px-4
              py-3
              text-white
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black
              px-4
              py-3
              text-white
              outline-none
            "
          />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              py-3
              font-semibold
              text-white
              cursor-pointer
            "
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-violet-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
