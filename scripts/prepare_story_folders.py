import os
import argparse
import json
import re

parser = argparse.ArgumentParser()

parser.add_argument("--row_id", required=True)
parser.add_argument("--ideal", required=True)

args = parser.parse_args()


def safe_folder_name(name):
    name = str(name).strip()

    # loại ký tự lỗi folder windows
    name = re.sub(r'[\\/:*?"<>|]', "_", name)

    # space -> _
    name = re.sub(r"\s+", "_", name)

    return name


# format id
row_id_fmt = f"{int(args.row_id):03d}"

# job id
job_id = f"job_{row_id_fmt}"

# folder name theo Ideal
ideal_folder = safe_folder_name(args.ideal)

# =========================
# AUDIO
# =========================
audio_base_path = r"D:\NGUYENDACBAO\App_Story\Bedtime app\public\audio"

audio_ideal_path = os.path.join(
    audio_base_path,
    ideal_folder
)

# =========================
# IMAGES
# =========================
images_base_path = r"D:\NGUYENDACBAO\App_Story\Bedtime app\public\images"

images_ideal_path = os.path.join(
    images_base_path,
    ideal_folder
)

# =========================
# CREATE FOLDERS
# =========================
os.makedirs(audio_ideal_path, exist_ok=True)
os.makedirs(images_ideal_path, exist_ok=True)

# =========================
# OUTPUT
# =========================
print(json.dumps({
    "id": row_id_fmt,
    "job_id": job_id,
    "ideal": args.ideal,
    "ideal_folder": ideal_folder,

    "audio_path": audio_ideal_path,
    "images_path": images_ideal_path

}, ensure_ascii=False, indent=2))
