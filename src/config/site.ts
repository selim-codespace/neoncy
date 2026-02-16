import { env } from "@/lib/validations/env";

export const siteConfig = {
  name: "Neoncy",
  description:
    "A clean, scalable Next.js starter with strict TypeScript, App Router, React Query, Zustand, Zod, and quality automation baked in.",
  url: env.NEXT_PUBLIC_SITE_URL,
  links: {
    documentation: "https://nextjs.org/docs",
    repository: "https://github.com/vercel/next.js",
  },
} as const;
