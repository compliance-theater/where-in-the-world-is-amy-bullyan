from __future__ import annotations

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public" / "images"
TARGET_BYTES = 1_000_000
HERO_IMAGES = [
    "form-builder-cats-hero.jpg",
    "form-builder-hero.jpg",
    "hero-amy-bullyan.jpg",
    "plpd-hero.jpg",
    "release-lane-hero.jpg",
]


def save_jpeg_under_target(source: Path) -> int:
    image = Image.open(source).convert("RGB")
    original_size = source.stat().st_size
    output = source.with_suffix(".tmp.jpg")

    for quality in (88, 84, 80, 76, 72, 68, 64, 60):
        image.save(output, "JPEG", quality=quality, optimize=True, progressive=True)
        if output.stat().st_size <= TARGET_BYTES:
            output.replace(source)
            return original_size

    image.save(output, "JPEG", quality=56, optimize=True, progressive=True)
    output.replace(source)
    return original_size


def main() -> None:
    for image_name in HERO_IMAGES:
        source = IMAGE_DIR / image_name
        before = save_jpeg_under_target(source)
        print(f"{source.name}: {before:,} -> {source.stat().st_size:,}")


if __name__ == "__main__":
    main()
