"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crawl = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
function crawlRec(mediaPath) {
    var out = {};
    (0, fs_1.readdirSync)(mediaPath).forEach(function (file) {
        if ((0, fs_1.statSync)((0, path_1.join)(mediaPath.toString(), file)).isDirectory()) {
            out[file] = crawlRec((0, path_1.join)(mediaPath.toString(), file));
            return;
        }
        out[file.split(".")[0]] = file;
    });
    return out;
}
function crawl(mediaPath) {
    return crawlRec(mediaPath);
}
exports.crawl = crawl;
;
