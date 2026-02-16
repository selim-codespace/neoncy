import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import type { HealthResponse } from "@/types/health";

export async function GET() {
  const response: HealthResponse = {
    status: "ok",
    timestamp: new Date().toISOString(),
    siteUrl: siteConfig.url,
    version: process.env.npm_package_version ?? "0.1.0",
  };

  return NextResponse.json(response, { status: 200 });
}
