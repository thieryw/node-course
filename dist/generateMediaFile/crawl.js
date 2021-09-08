"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crawl = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
function crawlRec(mediaPath) {
    var files = [];
    var directories = {};
    (0, fs_1.readdirSync)(mediaPath).forEach(function (fileOrDir) {
        var completePath = (0, path_1.join)(mediaPath.toString(), fileOrDir);
        if ((0, fs_1.statSync)(completePath).isDirectory()) {
            directories[fileOrDir] = crawlRec(completePath);
            return;
        }
        files.push(fileOrDir);
    });
    return {
        files: files,
        directories: directories
    };
}
;
function crawl(params) {
    var mediaPath = params.mediaPath;
    return crawlRec(mediaPath);
}
exports.crawl = crawl;
