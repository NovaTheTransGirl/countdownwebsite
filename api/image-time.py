from PIL import Image, ImageDraw, ImageFont
from datetime import datetime
import pytz
from io import BytesIO

def handler(request, response):
    tz = pytz.timezone("Australia/Adelaide")
    current = datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")

    img = Image.new("RGB", (400, 100), "white")
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("arial.ttf", 32)
    except:
        font = ImageFont.load_default()

    draw.text((10, 30), current, fill="black", font=font)

    buffer = BytesIO()
    img.save(buffer, format="GIF")
    buffer.seek(0)

    response.set_header("Content-Type", "image/gif")
    return buffer.read()
