export default function handler(req, res) {
  const embed = {
    embeds: [
      {
        title: "Test GIF Embed",
        description: "This GIF works just like Tenor!",
        image: {
          url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        }
      }
    ]
  };

  res.status(200).json(embed);
}
