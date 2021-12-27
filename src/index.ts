import * as http from "http";
import { EventEmitter } from "events";
const storage: any = [];

export class LocalHostStream extends EventEmitter {
    option: any;
    contentType: any;
    constructor(option: any = { }) {
        super();
        this.contentType = option.contentType;
    }

    activeConnect(uri: any, port: number) {
        if (!uri) throw new Error("Stream URL argument is required");
        if (uri.startsWith("https")) throw new TypeError("URL must not be start with secure HTTPS.");
        http.get(uri, (res: any) => {
            res.on("data", (chunk: any) => {
                for (const store in storage){
                    storage[store].write(chunk);
                };
            })
        });

        const server = http.createServer((req, res) => {
            res.writeHead(200, {
                "Content-Type": this.contentType || "audio/mp3",
                "Transfer-Encoding": "Chunked",
            });
            this.emit("subscribed");
            storage.push(res);
        });
        
        server.listen(port || 8080);
    }
}
