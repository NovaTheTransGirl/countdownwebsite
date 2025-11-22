export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Breakthrough</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: #111;
          font-family: sans-serif;
        }
        .embed {
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
        .embed img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .embed .text {
          position: relative;
          z-index: 1;
        }
      </style>
    </head>
    <body>
      <div class="embed">
        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="GIF">
        <div class="text">Test</div>
      </div>
    </body>
    </html>
  `;

  res.status(200).send(html);
}
