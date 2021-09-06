"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crawl_1 = require("./crawl");
var path_1 = require("path");
var mediaPath = (0, path_1.join)(__dirname, "../media");
console.log("recursive object with dir arborescence");
console.log((0, crawl_1.crawl)(mediaPath));
