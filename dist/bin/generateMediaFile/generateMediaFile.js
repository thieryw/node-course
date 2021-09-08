"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMediaFile = void 0;
var writeImports_1 = require("./writeImports");
var writeExport_1 = require("./writeExport");
var fs_1 = require("fs");
var path_1 = require("path");
var generatedFileName_1 = require("./generatedFileName");
var crawl_1 = require("./crawl");
function generateMediaFile(params) {
    var generatedFilePath = params.generatedFilePath, mediaPath = params.mediaPath;
    var dirArborescence = (0, crawl_1.crawl)({ mediaPath: mediaPath });
    if ((0, fs_1.readdirSync)(generatedFilePath).length > 0) {
        (0, fs_1.rmSync)((0, path_1.join)(generatedFilePath.toString(), generatedFileName_1.generatedFileName + ".ts"));
    }
    ;
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
