import { cn } from "@/lib/utils"

describe("cn", () => {
  it("merges class names and removes duplicates", () => {
    const result = cn("px-2", "px-4", "text-sm")
    expect(result).toContain("px-4")
    expect(result).toContain("text-sm")
    expect(result).not.toContain("px-2")
  })
})
