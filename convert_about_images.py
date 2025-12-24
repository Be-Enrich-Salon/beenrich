
from PIL import Image
import os

images = [
    r"c:\Users\vanib\OneDrive\Desktop\berich\public\images\about\aboutmain.png",
    r"c:\Users\vanib\OneDrive\Desktop\berich\public\images\about\aboutsec.png"
]

for img_path in images:
    try:
        if os.path.exists(img_path):
            print(f"Converting {img_path}...")
            img = Image.open(img_path)
            webp_path = img_path.rsplit('.', 1)[0] + ".webp"
            img.save(webp_path, "WEBP")
            print(f"Saved to {webp_path}")
        else:
            print(f"File not found: {img_path}")
    except Exception as e:
        print(f"Error converting {img_path}: {e}")
