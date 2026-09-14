import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  body?: string;
}

interface CourseApi {
  course: {
    code: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the SLOPxxxx code's last three digits as provisioned", () => {
    expect(api.course.code.slice(-3)).toBe("282");
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = byType("sessions");
    const weeks = sessions.map((node) => Number(node.meta?.week));
    expect(new Set(weeks).size, "session weeks must be distinct").toBe(sessions.length);
    expect(sessions.length, "expected one session per teaching week").toBe(12);
    for (const week of weeks) {
      expect(week, `session week ${week} out of range`).toBeGreaterThanOrEqual(1);
      expect(week).toBeLessThanOrEqual(12);
    }
  });

  it("has at least one lecture linking a real, non-placeholder deck", () => {
    const lectures = byType("lectures");
    const withDeck = lectures.filter((node) => typeof node.meta?.slides === "string");
    expect(withDeck.length, "no lecture links a deck").toBeGreaterThan(0);
  });

  it("has assessment weights that add up to 100%", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total, `assessment weights sum to ${total}, not 100`).toBe(100);
  });
});
