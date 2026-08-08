import fs from "node:fs";
import path from "node:path";

const GALLERY_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

export function getGalleryImages() {
  const dir = path.join(process.cwd(), "public", "images", "gallery");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => GALLERY_EXTENSIONS.test(file))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}
