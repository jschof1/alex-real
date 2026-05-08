#!/usr/bin/env python3
"""
Generate abstract site imagery via Gemini (Nano Banana Pro).
Follows Project Delivery: no people, no priests, abstract moods only.
Requires: pip install google-genai pillow
Env: GEMINI_API_KEY
"""
from __future__ import annotations

import os
import time
from pathlib import Path

from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "generated"
MODEL = "gemini-3-pro-image-preview"

SAFE = (
    "Absolutely no people, no faces, no human silhouettes, no hands, no crowds. "
    "No priests, clergy, churches, crosses, or religious iconography. "
    "No readable text or logos. "
    "Unlicensed original abstract artwork suitable for a professional website."
)

JOBS: list[tuple[str, str, str, str]] = [
    (
        "hero-backdrop",
        "16:9",
        "2K",
        "Ultra-wide abstract atmospheric background, deep navy and ink blue with restrained burgundy wine glow "
        "and soft antique gold highlights, slow painterly gradients, subtle film grain, calm premium feel, empty space for typography. "
        + SAFE,
    ),
    (
        "hero-panel",
        "3:4",
        "1K",
        "Tall abstract panel, same palette as a luxury celebrant brand: midnight blue, burgundy mist, warm gold accents, "
        "soft bokeh light orbs, gentle vignette, editorial magazine quality. "
        + SAFE,
    ),
    (
        "home-services",
        "16:9",
        "1K",
        "Abstract broken-grid friendly background: overlapping translucent rectangles in parchment, soft grey-blue, "
        "and muted burgundy washes, paper texture, subtle sparkle, celebratory but restrained. "
        + SAFE,
    ),
    (
        "home-about",
        "16:9",
        "1K",
        "Warm abstract landscape suggestion without literal geography: rolling soft hills implied by colour bands only, "
        "cream fog, distant blue layers, South of England garden light feeling, very soft and minimal. "
        + SAFE,
    ),
    (
        "home-process",
        "4:3",
        "1K",
        "Abstract path or journey motif: curved flowing ribbons in navy and gold on pale grey, "
        "suggesting steps forward without icons or numbers. "
        + SAFE,
    ),
    (
        "svc-wedding",
        "4:3",
        "1K",
        "Abstract romantic light: rose and ivory mist, soft lens flare, delicate confetti-like specks as pure bokeh only, "
        "no objects, no rings, no figures. "
        + SAFE,
    ),
    (
        "svc-vow",
        "4:3",
        "1K",
        "Abstract sunrise over calm water interpreted as colour fields only: apricot, blush, and steel blue horizontal bands, "
        "glass-smooth gradients. "
        + SAFE,
    ),
    (
        "svc-funeral",
        "4:3",
        "1K",
        "Quiet respectful abstract: misty forest floor colours without trees or figures, charcoal, sage, and fog white, "
        "very soft texture. "
        + SAFE,
    ),
    (
        "svc-naming",
        "4:3",
        "1K",
        "Joyful abstract celebration: soft pastel balloons implied only as blurred colour orbs, sky blue and butter yellow, "
        "no literal balloons or animals. "
        + SAFE,
    ),
    (
        "svc-dj",
        "4:3",
        "1K",
        "Abstract music energy: concentric ripples of neon gold and deep blue light on black, long exposure light trails, "
        "no equipment, no stage, no people. "
        + SAFE,
    ),
    (
        "inner-header",
        "21:9",
        "1K",
        "Cinematic ultra-wide abstract header strip, navy to burgundy gradient with fine noise and gold edge light, "
        "perfect for behind page titles. "
        + SAFE,
    ),
    (
        "fees-ledger",
        "16:9",
        "1K",
        "Abstract ledger or linen paper feeling: very subtle horizontal rules as faint texture only, cream and cool grey, "
        "tiny gold flecks, premium stationery vibe. "
        + SAFE,
    ),
    (
        "contact-mail",
        "4:3",
        "1K",
        "Abstract correspondence mood: soft airmail gradients without stamps or writing, sky blue, cream, and burgundy edge wash. "
        + SAFE,
    ),
    (
        "faq-soft",
        "16:9",
        "1K",
        "Soft abstract FAQ backdrop: overlapping translucent circles and arcs in muted blue-grey and white, "
        "gentle depth, modern editorial. "
        + SAFE,
    ),
    (
        "links-weave",
        "16:9",
        "1K",
        "Abstract interwoven threads of light in gold and navy on deep charcoal, suggesting connection without symbols. "
        + SAFE,
    ),
    (
        "burgundy-cta",
        "16:9",
        "1K",
        "Rich burgundy and wine abstract with velvet depth, subtle gold dust particles, dramatic but elegant, no shapes that read as objects. "
        + SAFE,
    ),
]


def save_first_image(response, dest: Path) -> bool:
    for part in response.parts:
        if part.inline_data:
            img = part.as_image()
            img.save(str(dest.with_suffix(".jpg")))
            return True
    return False


def main() -> None:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise SystemExit("Set GEMINI_API_KEY")

    OUT.mkdir(parents=True, exist_ok=True)
    client = genai.Client(api_key=api_key)

    for slug, aspect, size, prompt in JOBS:
        dest = OUT / f"{slug}.jpg"
        if dest.exists():
            print(f"skip exists {dest.name}")
            continue
        print(f"generating {slug} ({aspect}, {size})…")
        response = client.models.generate_content(
            model=MODEL,
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
                image_config=types.ImageConfig(aspect_ratio=aspect, image_size=size),
            ),
        )
        if not save_first_image(response, dest):
            print(f"WARN: no image in response for {slug}")
            continue
        time.sleep(1.2)

    print("done ->", OUT)


if __name__ == "__main__":
    main()
