# import os
# from PIL import Image

# # Define the input folder
# input_folder = r"G:\shree hari nuresry\shree-hari-nursery\public\Products"

# # Loop through all files in the folder
# for filename in os.listdir(input_folder):
#     if filename.lower().endswith(".jpg"):  # Process only JPG files
#         jpg_path = os.path.join(input_folder, filename)
        
#         # Open the image
#         img = Image.open(jpg_path)

#         # Define the output file name (same name, but .webp)
#         webp_filename = filename.replace(".jpg", ".webp")
#         webp_path = os.path.join(input_folder, webp_filename)

#         # Convert and save as WEBP with compression
#         img.save(webp_path, "WEBP", quality=70)  # Adjust quality as needed

#         # Remove the original JPG file
#         os.remove(jpg_path)

#         print(f"Converted and deleted: {filename} → {webp_filename}")

# print("✅ All JPG images converted to WEBP and deleted successfully!")


# ########################################################################

from PIL import Image
import os

# Define input files
input_files = [
    r"G:\shree hari nuresry\shree-hari-nursery\public\navbarbg.png",
    r"G:\shree hari nuresry\shree-hari-nursery\public\logo.jpg"
]

# Loop through each file and convert to WEBP
for file_path in input_files:
    if os.path.exists(file_path):  # Check if file exists
        img = Image.open(file_path)

        # Define output file path (same folder, same name, but .webp extension)
        output_path = file_path.rsplit(".", 1)[0] + ".webp"

        # Convert and save as WEBP with compression
        img.save(output_path, "WEBP", quality=70)  # Adjust quality as needed

        print(f"Converted: {file_path} → {output_path}")
    else:
        print(f"File not found: {file_path}")

print("✅ Conversion completed successfully!")
