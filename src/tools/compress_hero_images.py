from __future__ import annotations

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public" / "images"
TARGET_BYTES = 1_000_000
HERO_IMAGES = [
    "form-builder-cats-hero.png",
    "form-builder-hero.png",
    "hero-amy-bullyan.png",
    "plpd-hero.png",
    "release-lane-hero.png",
]


def save_jpeg_under_target(source: Path) -> Path:
    image = Image.open(source).convert("RGB")
    output = source.with_suffix(".jpg")

    for quality in (88, 84, 80, 76, 72, 68, 64, 60):
        image.save(output, "JPEG", quality=quality, optimize=True, progressive=True)
        if output.stat().st_size <= TARGET_BYTES:
            return output

    image.save(output, "JPEG", quality=56, optimize=True, progressive=True)
    return output


def main() -> None:
    for image_name in HERO_IMAGES:
        source = IMAGE_DIR / image_name
        output = save_jpeg_under_target(source)
        print(f"{source.name}: {source.stat().st_size:,} -> {output.name}: {output.stat().st_size:,}")


if __name__ == "__main__":
    main()
