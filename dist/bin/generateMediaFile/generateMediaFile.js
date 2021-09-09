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
    var generatedFilePath = params.generatedFilePath, mediaPath = params.mediaPath, acceptedFileExtensions = params.acceptedFileExtensions;
    var dirArborescence = (0, crawl_1.crawl)({ mediaPath: mediaPath });
    var generatedFileCompletePath = (0, path_1.join)(generatedFilePath.toString(), generatedFileName_1.generatedFileName + ".ts");
    if ((0, fs_1.existsSync)(generatedFileCompletePath)) {
        (0, fs_1.writeFileSync)(generatedFileCompletePath, "");
    }
    (0, writeImports_1.writeImports)({
        mediaPath: mediaPath,
        generatedFilePath: generatedFilePath,
        dirArborescence: dirArborescence,
        acceptedFileExtensions: acceptedFileExtensions
    });
    (0, writeExport_1.writeExport)({
        dirArborescence: dirArborescence,
        generatedFilePath: generatedFilePath,
        acceptedFileExtensions: acceptedFileExtensions
    });
}
exports.generateMediaFile = generateMediaFile;
;
