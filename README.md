# localhost-stream
Allows you to create own localhost of audio streams without redirect to main source .

# Important
It's not that you can able to open any port to listen, default port is `8080` which is recomended, for any reason if this port failed to listen, try the port which is opened by your hosting.

Only HTTP protocol allowed.

# Example
```js
const { LocalHostStream } = require("localhost-stream");
const client = new LocalHostStream();

client.activeConnect("http://streams.ilovemusic.de/iloveradio16.mp3", 8080);
client.on("subscribed", (d) => {
    // Whenever a user request for connection the event `subscribed` shall fire up.
    console.log("New subscribed");
});
// It'll create a binding with http://localhost:8080
```

# Support
[Discord Server](https://discord.gg/UrAFxHnXN3)
