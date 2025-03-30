const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// ___ Только эти папки будут обрабатываться
const allowedPaths = ["src"];

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath); // Рекурсия для подпапок
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

      if (!fs.existsSync(webpPath)) {
        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
          console.log(`✅ Converted ${fullPath} to WebP`);

          //!  Удаление оригинала (раскомментируйте если нужно)
          // fs.unlinkSync(fullPath);
          // console.log(`🗑️ Deleted original: ${fullPath}`);
        } catch (err) {
          console.error(`❌ Error processing ${fullPath}:`, err);
        }
      }
    }
  }
}

async function main() {
  try {
    // Обрабатываем каждую разрешенную папку последовательно
    for (const folder of allowedPaths) {
      const fullPath = path.join(__dirname, folder);
      if (fs.existsSync(fullPath)) {
        console.log(`🔍 Processing folder: ${fullPath}`);
        await processDirectory(fullPath);
      } else {
        console.warn(`⚠️ Folder not found: ${fullPath}`);
      }
    }
    console.log("✨ All conversions completed!");
  } catch (err) {
    console.error("🔥 Critical error:", err);
    process.exit(1);
  }
}

// Запуск
main();
