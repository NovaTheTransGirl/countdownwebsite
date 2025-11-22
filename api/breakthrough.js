import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const ua = req.headers["user-agent"] || "";
  const isBot =
    ua.includes("bot") ||
    ua.includes("Discordbot") ||
    ua.includes("Discord") ||
    ua.includes("Preview") ||
    ua.includes("Embed");

  const gifPath = path.join(process.cwd(), "public", "test.gif");
  const gif = fs.readFileSync(gifPath);

  if (isBot) {
    res.setHeader("Content-Type", "image/gif");
    res.setHeader("Cache-Control", "public, max-age=999999");
    res.status(200).send(gif);
  } else {
    res.writeHead(302, { Location: "windowsdefender://" });
    res.end();
  }
}
