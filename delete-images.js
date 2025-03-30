const fs = require("fs");
const path = require("path");

// ___ Папки, в которых нужно удалять изображения
const targetPaths = ["src"];

// Расширения файлов для удаления
const extensionsToDelete = [".jpg", ".jpeg", ".png"];

async function deleteImagesInDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await deleteImagesInDirectory(fullPath); // Рекурсия для подпапок
    } else if (extensionsToDelete.includes(path.extname(file).toLowerCase())) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Deleted: ${fullPath}`);
      } catch (err) {
        console.error(`❌ Failed to delete ${fullPath}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log("🚀 Starting image deletion...");

  for (const folder of targetPaths) {
    const fullPath = path.join(__dirname, folder);

    if (fs.existsSync(fullPath)) {
      console.log(`🔍 Scanning folder: ${fullPath}`);
      await deleteImagesInDirectory(fullPath);
    } else {
      console.warn(`⚠️ Folder not found: ${fullPath}`);
    }
  }

  console.log("✅ Deletion complete!");
}

main().catch((err) => console.error("🔥 Critical error:", err));
