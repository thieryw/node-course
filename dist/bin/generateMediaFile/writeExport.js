"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeExport = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var generatedFileName_1 = require("./generatedFileName");
function writeExport(params) {
    var generatedFilePath = params.generatedFilePath, dirArborescence = params.dirArborescence, acceptedFileExtensions = params.acceptedFileExtensions;
    var path = (0, path_1.join)(generatedFilePath.toString(), generatedFileName_1.generatedFileName + ".ts");
    var index = 0;
    (0, fs_1.appendFileSync)(path, "\n\nexport const files = {\n");
    function generateStringRec(dirArborescence) {
        var str = "\"files\": [\n";
        dirArborescence.files.forEach(function (file) {
            if (!acceptedFileExtensions.includes((0, path_1.extname)(file))) {
                return;
            }
            str = str + "{\n\t\t\t\t\"url\": _" + index++ + ",\n\t\t\t\t\"name\": \"" + file.replace(/^\d+_/g, "").replace(/\.\w+$/g, "") + "\"\n\t\t\t},\n";
        });
        str = str + "\n],\n";
        if (Object.keys(dirArborescence.directories).length === 0) {
            return str;
        }
        var directories = dirArborescence.directories;
        str = str + "\n \"directories\": {\n";
        Object.keys(directories).forEach(function (key) {
            str = str + "\n\n\t\t\t\t\"" + key + "\": {\n\t\t\t\t" + generateStringRec(directories[key]) + "\n\t\t\t\t},\n\n\t\t\t";
        });
        str = str + "},";
        return str;
    }
    ;
    (0, fs_1.appendFileSync)(path, generateStringRec(dirArborescence) + "}");
}
exports.writeExport = writeExport;
