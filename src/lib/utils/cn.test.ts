import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils/cn";

describe("cn", () => {
  it("merges classes and resolves tailwind conflicts", () => {
    expect(cn("px-2", "text-slate-700", "px-4")).toBe("text-slate-700 px-4");
  });
});
