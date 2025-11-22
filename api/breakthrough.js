export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta property="og:image" content="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">
    <meta property="og:image:alt" content="Test GIF">
  </head>
  <body>
  </body>
  </html>
  `;

  res.status(200).send(html);
}
