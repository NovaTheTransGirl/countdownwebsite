export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Breakthrough Test</title>

    <!-- Open Graph meta tags for Discord embed -->
    <meta property="og:title" content="Breakthrough Test">
    <meta property="og:description" content="This is just a test page.">
    <meta property="og:image" content="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">
    <meta property="og:image:alt" content="Test GIF">
    <meta property="og:image:width" content="480">
    <meta property="og:image:height" content="480">
    <meta property="og:url" content="https://countdownwebsite-lssu.vercel.app/breakthrough">
    <meta name="theme-color" content="#FF00FF">

    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background: #111;
        font-family: sans-serif;
        color: white;
      }
      .embed-card {
        position: relative;
        width: 400px;
        height: 400px;
        background: #222;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 2rem;
        text-shadow: 0 0 10px black;
      }
      .embed-card img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .embed-card .text {
        position: relative;
        z-index: 1;
      }
    </style>
  </head>
  <body>
    <div class="embed-card">
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Test GIF">
      <div class="text">Test</div>
    </div>
  </body>
  </html>
  `;

  res.status(200).send(html);
}
