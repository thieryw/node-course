"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var path_1 = require("path");
var fs_1 = require("fs");
var server = (0, http_1.createServer)(function (req, res) {
    if (req.url === undefined) {
        return;
    }
    var filePath = (0, path_1.join)(__dirname, "..", "public", req.url === "/" ? "index.html" : req.url);
    var fileExtension = (0, path_1.extname)(filePath);
    var contentType = "text/html";
    switch (fileExtension) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }
    (0, fs_1.readFile)(filePath, function (err, content) {
        if (err) {
            if (err.code === "ENOENT") {
                (0, fs_1.readFile)((0, path_1.join)(__dirname, "..", "public", "404.html"), function (err, content) {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(content, "utf8");
                });
                return;
            }
            res.writeHead(500);
            res.end("Server Error: " + err.code);
            return;
        }
        res.writeHead(200, { "Content-type": contentType });
        res.end(content, "utf8");
    });
});
var PORT = process.env.PORT || 5000;
server.listen(PORT, function () { return console.log("Server running on port " + PORT); });
