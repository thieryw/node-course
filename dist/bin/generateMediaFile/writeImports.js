"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeImports = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
var generatedFileName_1 = require("./generatedFileName");
function writeImports(params) {
    var mediaPath = params.mediaPath, dirArborescence = params.dirArborescence, generatedFilePath = params.generatedFilePath, acceptedFileExtensions = params.acceptedFileExtensions;
    var relativeGeneratedFilePath = (0, path_1.relative)(__dirname, generatedFilePath.toString());
    var index = 0;
    function generateStringRec(mediaPath, dirArborescence) {
        var str = "" + dirArborescence.files.map(function (file) {
            var relativePath = (0, path_1.relative)((0, path_1.join)(__dirname, relativeGeneratedFilePath), (0, path_1.join)(mediaPath.toString(), file));
            if (!acceptedFileExtensions.includes((0, path_1.extname)(file))) {
                return "";
            }
            return "import _" + index++ + " from \"./" + relativePath + "\";\n";
        });
        var directories = dirArborescence.directories;
        Object.keys(directories).forEach(function (key) {
            str = str + generateStringRec((0, path_1.join)(mediaPath.toString(), key), directories[key]);
        });
        return str.replace(/,/g, "");
    }
    (0, fs_1.appendFileSync)((0, path_1.join)(generatedFilePath.toString(), generatedFileName_1.generatedFileName + ".ts"), generateStringRec(mediaPath, dirArborescence));
}
exports.writeImports = writeImports;
