"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeExport = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var generatedFileName_1 = require("./generatedFileName");
function writeExport(params) {
    var generatedFilePath = params.generatedFilePath, dirArborescence = params.dirArborescence;
    var path = (0, path_1.join)(generatedFilePath.toString(), generatedFileName_1.generatedFileName + ".ts");
    var index = -1;
    (0, fs_1.appendFileSync)(path, "\n\nexport const files = {\n");
    function generateStringRec(dirArborescence) {
        if (dirArborescence.directories === undefined) {
            console.log("ok");
            return "";
        }
        return "\n\t\t\t\"files\": [\n\t\t\t\t" + dirArborescence.files.map(function (file) {
            index++;
            return "{\n\t\t\t\t\t\t\t\t\"url\": _" + index + ",\n\t\t\t\t\t\t\t\t\"name\": \"" + file.split(".")[0] + "\"\n\t\t\t\t\t\t\t}";
        }) + "\n\t\t\t],\n\t\t\t\"directories\": {\n\t\t\t\t" + Object.keys(dirArborescence.directories).map(function (key) { return "\n\t\t\t\t\t\"" + key + "\": {" + generateStringRec(dirArborescence.directories[key]) + "}\n\t\t\t\t"; }) + "\n\t\t\t}\n\t\t";
    }
    ;
    (0, fs_1.appendFileSync)(path, generateStringRec(dirArborescence) + "}");
}
exports.writeExport = writeExport;
