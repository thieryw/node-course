"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeImports = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
function writeImports(mediaPath, dirArborescence) {
    var currentIndex = 0;
    function writeImportsRec(mediaPath, dirArborescence) {
        dirArborescence.files.forEach(function (file) {
            var relativePath = (0, path_1.relative)((0, path_1.join)(__dirname, "../src/mediaImports"), (0, path_1.join)(mediaPath.toString(), file));
            (0, fs_1.appendFileSync)((0, path_1.join)(__dirname, "../src/mediaImports/media.ts"), "import _" + currentIndex + " from \"" + relativePath + "\"; \n");
            currentIndex++;
        });
        Object.keys(dirArborescence.directories).forEach(function (dir) {
            writeImportsRec((0, path_1.join)(mediaPath.toString(), dir), dirArborescence.directories[dir]);
        });
    }
    writeImportsRec(mediaPath, dirArborescence);
}
exports.writeImports = writeImports;
