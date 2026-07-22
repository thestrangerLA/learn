import { spawn } from "child_process";
import fs from "fs";
import path from "path";

console.log("Starting local Nitro server...");
const server = spawn("node", [".output/server/index.mjs"], {
  env: { ...process.env, PORT: "3000" }
});

server.stdout.on("data", (data) => {
  console.log(`[Server]: ${data.toString().trim()}`);
});

server.stderr.on("data", (data) => {
  console.error(`[Server Error]: ${data.toString().trim()}`);
});

setTimeout(async () => {
  try {
    console.log("Fetching homepage HTML from local server...");
    const res = await fetch("http://localhost:3000/learn/");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    let html = await res.text();
    
    // Make sure we have the correct HTML
    if (!html.includes("id=\"root\"") && !html.includes("id=\"app\"") && !html.includes("<!DOCTYPE html>")) {
      throw new Error("Invalid HTML fetched from server");
    }

    const outDir = path.resolve(".output/public");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // Save as index.html
    fs.writeFileSync(path.join(outDir, "index.html"), html);
    console.log("Successfully saved index.html to .output/public/index.html");
    
    // Copy as 404.html (for subroute navigation fallbacks on GitHub Pages)
    fs.writeFileSync(path.join(outDir, "404.html"), html);
    console.log("Successfully saved 404.html to .output/public/404.html");

    // Create .nojekyll to prevent GitHub Pages from ignoring folders starting with underscore
    fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
    console.log("Successfully created .nojekyll in .output/public");

  } catch (err) {
    console.error("Failed to generate static html files:", err);
    process.exit(1);
  } finally {
    console.log("Stopping local Nitro server...");
    server.kill("SIGTERM");
    process.exit(0);
  }
}, 3000);
