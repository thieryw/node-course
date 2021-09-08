"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMediaFile = void 0;
var writeImports_1 = require("./writeImports");
var writeExport_1 = require("./writeExport");
var fs_1 = require("fs");
var crawl_1 = require("./crawl");
function generateMediaFile(params) {
    var generatedFilePath = params.generatedFilePath, mediaPath = params.mediaPath;
    var dirArborescence = (0, crawl_1.crawl)({ mediaPath: mediaPath });
    (0, fs_1.rmSync)(generatedFilePath, { "recursive": true, "force": true });
    (0, fs_1.mkdirSync)(generatedFilePath);
    (0, writeImports_1.writeImports)({
        mediaPath: mediaPath,
        generatedFilePath: generatedFilePath,
        dirArborescence: dirArborescence
    });
    (0, writeExport_1.writeExport)({
        dirArborescence: dirArborescence,
        generatedFilePath: generatedFilePath
    });
}
exports.generateMediaFile = generateMediaFile;
;
