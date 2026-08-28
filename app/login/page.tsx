"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Keep your current login behaviour here.
    // For now, clicking Login takes the user to Home.
    router.push("/");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-[1400px] items-center justify-center">
        
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid w-full overflow-hidden rounded-[28px] border border-border bg-background shadow-[0_20px_70px_rgba(0,0,0,0.08)] lg:grid-cols-2"
        >

          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-primary p-8 text-primary-foreground sm:p-10 lg:min-h-[680px] lg:p-14">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/30" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-accent/20" />

            {/* Branding */}
            <div className="relative z-10">
              <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent">
                DBCE CODERS CLUB
              </p>

              <h1 className="mt-6 max-w-md text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Build.
                <br />
                Learn.
                <br />
                <span className="text-accent">Contribute.</span>
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-6 text-primary-foreground/65 sm:text-base">
                A community where students turn ideas into projects,
                skills into experience, and curiosity into real work.
              </p>
            </div>

            {/* Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-1 items-center justify-center py-8"
            >
              {/* Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-accent/30 sm:h-[280px] sm:w-[280px]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[175px] w-[175px] rounded-full border border-dashed border-primary-foreground/10 sm:h-[215px] sm:w-[215px]"
              />

              <motion.img
                src="/robot.png"
                alt="DBCE Coders Club robot"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-auto w-[230px] object-contain sm:w-[290px] lg:w-[330px]"
              />
            </motion.div>

            {/* Bottom label */}
            <div className="relative z-10 flex items-center justify-between border-t border-primary-foreground/10 pt-5">
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/40">
                EST. DBCE
              </span>

              <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                KEEP BUILDING →
              </span>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex min-h-[420px] flex-col justify-center bg-background p-8 sm:p-10 lg:min-h-[680px] lg:p-16 xl:p-20">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-[500px]"
            >

              {/* Header */}
              <div className="mb-10">
                <p className="label-eyebrow text-accent">
                  WELCOME BACK
                </p>

                <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Log
                  <br />
                  <span className="text-accent">in.</span>
                </h2>

                <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                  Continue building, learning and contributing with
                  the DBCE Coders Club.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleLogin} className="space-y-7">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs font-semibold tracking-[0.18em] text-foreground"
                  >
                    EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-14 w-full border-b border-border bg-transparent px-0 text-lg outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-3 block text-xs font-semibold tracking-[0.18em] text-foreground"
                  >
                    PASSWORD
                  </label>

                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-14 w-full border-b border-border bg-transparent px-0 text-lg outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                  />
                </div>

                {/* Forgot password */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login button */}
                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex h-16 w-full items-center justify-between bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <span>Login to DBCE Coders Club</span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </motion.button>

              </form>

              {/* Bottom information */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                  MEMBER ACCESS
                </span>

                <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                  DBCE / 01
                </span>
              </div>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}