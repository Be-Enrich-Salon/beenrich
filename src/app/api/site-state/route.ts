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

async function getKV() {
  // Only attempt to load @vercel/kv when the required env vars exist.
  // @vercel/kv will throw at import time if KV_REST_API_URL / KV_REST_API_TOKEN are missing.
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null;
  try {
    const mod = await import("@vercel/kv");
    return mod.kv;
  } catch (e) {
    return null;
  }
}

export async function GET() {
  const kv = await getKV();
  if (kv) {
    try {
      const v = await kv.get("site:launched");
      return NextResponse.json({ launched: !!v });
    } catch (e) {
      // fallback to file
    }
  }

  const state = await readFileState();
  return NextResponse.json(state);
}

export async function POST() {
  const kv = await getKV();
  if (kv) {
    try {
      await kv.set("site:launched", true);
      return NextResponse.json({ ok: true });
    } catch (e) {
      // fallback to file
    }
  }

  try {
    await writeFileState(true);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function DELETE() {
  const kv = await getKV();
  if (kv) {
    try {
      await kv.set("site:launched", false);
      return NextResponse.json({ ok: true });
    } catch (e) {
      // fallback to file
    }
  }

  try {
    await writeFileState(false);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
