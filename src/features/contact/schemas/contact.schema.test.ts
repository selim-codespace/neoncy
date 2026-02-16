import { describe, expect, it } from "vitest";
import { contactSchema } from "@/features/contact/schemas/contact.schema";

describe("contactSchema", () => {
  it("accepts valid payloads", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I need a scalable starter architecture.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid payloads", () => {
    const result = contactSchema.safeParse({
      name: "J",
      email: "not-an-email",
      message: "short",
    });

    expect(result.success).toBe(false);
  });
});
