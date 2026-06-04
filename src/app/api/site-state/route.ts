import { NextResponse } from "next/server";
import fs from "fs/promises";

const DATA_DIR = process.cwd() + "/data";
const FILE = DATA_DIR + "/site-state.json";

async function readFileState() {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    return { launched: false };
  }
}

async function writeFileState(val: boolean) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify({ launched: val }), "utf8");
}

export async function GET() {
  const state = await readFileState();
  return NextResponse.json({ ...state, source: "file" });
}

export async function POST() {
  try {
    await writeFileState(true);
    return NextResponse.json({ ok: true, source: "file" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await writeFileState(false);
    return NextResponse.json({ ok: true, source: "file" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
