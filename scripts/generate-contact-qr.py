"""Generate a vCard QR code for Yousef AlEnazi.

Run: python3 scripts/generate-contact-qr.py
Outputs: public/contact-qr.png and public/contact-qr.svg
"""

from pathlib import Path

import qrcode
import qrcode.image.svg

VCARD = "\r\n".join(
    [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:AlEnazi;Yousef;;;",
        "FN:Yousef AlEnazi",
        "TEL;TYPE=CELL:+966554949418",
        "EMAIL:yalonazi@tawal.com.sa",
        "END:VCARD",
        "",
    ]
)

OUT_DIR = Path(__file__).resolve().parent.parent / "public"
OUT_DIR.mkdir(parents=True, exist_ok=True)

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=12,
    border=2,
)
qr.add_data(VCARD)
qr.make(fit=True)

png_path = OUT_DIR / "contact-qr.png"
qr.make_image(fill_color="black", back_color="white").save(png_path)

svg_path = OUT_DIR / "contact-qr.svg"
svg_img = qrcode.make(
    VCARD,
    image_factory=qrcode.image.svg.SvgPathImage,
    box_size=12,
    border=2,
)
svg_img.save(svg_path)

print(f"Wrote {png_path}")
print(f"Wrote {svg_path}")
