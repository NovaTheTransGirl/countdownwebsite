from PIL import Image, ImageDraw, ImageFont
import io

def generate_gif():
    frames = []
    font = ImageFont.load_default()

    for i in range(3):
        img = Image.new("RGB", (300, 80), (0, 0, 0))
        d = ImageDraw.Draw(img)
        d.text((10, 25), f"test {i+1}", font=font, fill=(255, 255, 255))
        frames.append(img)

    buf = io.BytesIO()
    frames[0].save(
        buf,
        format="GIF",
        save_all=True,
        append_images=frames[1:],
        duration=300,
        loop=0,
    )
    buf.seek(0)
    return buf


def handler(request):
    gif_bytes = generate_gif()
    return {
        "status": 200,
        "headers": {
            "Content-Type": "image/gif",
            "Content-Disposition": "inline; filename=test.gif"
        },
        "body": gif_bytes.read(),
        "isBase64Encoded": True
    }
