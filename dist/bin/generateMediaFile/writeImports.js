"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeImports = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
var generatedFileName_1 = require("./generatedFileName");
function writeImports(params) {
    var mediaPath = params.mediaPath, dirArborescence = params.dirArborescence, generatedFilePath = params.generatedFilePath;
    var relativeGeneratedFilePath = (0, path_1.relative)(__dirname, generatedFilePath.toString());
    var index = 0;
    function writeImportsRec(mediaPath, dirArborescence) {
        dirArborescence.files.forEach(function (file) {
            var relativePath = (0, path_1.relative)((0, path_1.join)(__dirname, relativeGeneratedFilePath), (0, path_1.join)(mediaPath.toString(), file));
            (0, fs_1.appendFileSync)((0, path_1.join)(__dirname, relativeGeneratedFilePath, generatedFileName_1.generatedFileName + ".ts"), "import _" + index + " from \"" + relativePath + "\"; \n");
            index++;
        });
        Object.keys(dirArborescence.directories).forEach(function (dir) {
            writeImportsRec((0, path_1.join)(mediaPath.toString(), dir), dirArborescence.directories[dir]);
        });
    }
    writeImportsRec(mediaPath, dirArborescence);
}
exports.writeImports = writeImports;
