export default function handler(req, res) {
  const embed = {
    embeds: [
      {
        title: "Test Text",
        description: "This is a test message",
        image: {
          url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        }
      }
    ]
  };

  res.status(200).json(embed);
}
