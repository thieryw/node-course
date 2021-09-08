"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var generateMediaFile_1 = require("./bin/generateMediaFile");
var mediaPath = (0, path_1.join)(__dirname, "../media");
var generatedFilePath = (0, path_1.join)(__dirname, "../src/mediaImports");
(0, generateMediaFile_1.generateMediaFile)({
    mediaPath: mediaPath,
    generatedFilePath: generatedFilePath
});
