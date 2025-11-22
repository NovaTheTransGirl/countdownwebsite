import json

def handler(request, response):
    # Discord embed format
    embed = {
        "embeds": [
            {
                "title": "Test Text",
                "description": "This is a test message",
                "image": {
                    "url": "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                }
            }
        ]
    }

    response.status_code = 200
    response.headers["Content-Type"] = "application/json"
    response.send(json.dumps(embed))
