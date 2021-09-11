"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.files = void 0;
var _1_bird_jpg_1 = __importDefault(require("./../../media/1_bird.jpg"));
var _2_flower_jpg_1 = __importDefault(require("./../../media/2_flower.jpg"));
var _3_dear_jpg_1 = __importDefault(require("./../../media/3_dear.jpg"));
var _4_eagle_jpg_1 = __importDefault(require("./../../media/4_eagle.jpg"));
var a_jpg_1 = __importDefault(require("./../../media/evenMorePictures/a.jpg"));
var b_jpg_1 = __importDefault(require("./../../media/evenMorePictures/b.jpg"));
var c_jpg_1 = __importDefault(require("./../../media/evenMorePictures/c.jpg"));
var d_jpg_1 = __importDefault(require("./../../media/evenMorePictures/d.jpg"));
var a_jpg_2 = __importDefault(require("./../../media/evenMorePictures/zizi/a.jpg"));
var b_jpg_2 = __importDefault(require("./../../media/evenMorePictures/zizi/b.jpg"));
var c_jpg_2 = __importDefault(require("./../../media/evenMorePictures/zizi/c.jpg"));
var d_jpg_2 = __importDefault(require("./../../media/evenMorePictures/zizi/d.jpg"));
var b_jpg_3 = __importDefault(require("./../../media/otherPictures/b.jpg"));
var c_jpg_3 = __importDefault(require("./../../media/otherPictures/c.jpg"));
var d_jpg_3 = __importDefault(require("./../../media/otherPictures/d.jpg"));
var pipi_caca_jpg_1 = __importDefault(require("./../../media/otherPictures/pipi caca.jpg"));
var a_jpg_3 = __importDefault(require("./../../media/somePictures/a.jpg"));
var b_jpg_4 = __importDefault(require("./../../media/somePictures/b.jpg"));
var c_jpg_4 = __importDefault(require("./../../media/somePictures/c.jpg"));
var d_jpg_4 = __importDefault(require("./../../media/somePictures/d.jpg"));
exports.files = {
    "files": [
        {
            "url": _1_bird_jpg_1.default,
            "name": "bird"
        },
        {
            "url": _2_flower_jpg_1.default,
            "name": "flower"
        },
        {
            "url": _3_dear_jpg_1.default,
            "name": "dear"
        },
        {
            "url": _4_eagle_jpg_1.default,
            "name": "eagle"
        },
    ],
    "directories": {
        "evenMorePictures": {
            "files": [
                {
                    "url": a_jpg_1.default,
                    "name": "a"
                },
                {
                    "url": b_jpg_1.default,
                    "name": "b"
                },
                {
                    "url": c_jpg_1.default,
                    "name": "c"
                },
                {
                    "url": d_jpg_1.default,
                    "name": "d"
                },
            ],
            "directories": {
                "zizi": {
                    "files": [
                        {
                            "url": a_jpg_2.default,
                            "name": "a"
                        },
                        {
                            "url": b_jpg_2.default,
                            "name": "b"
                        },
                        {
                            "url": c_jpg_2.default,
                            "name": "c"
                        },
                        {
                            "url": d_jpg_2.default,
                            "name": "d"
                        },
                    ],
                },
            },
        },
        "otherPictures": {
            "files": [
                {
                    "url": b_jpg_3.default,
                    "name": "b"
                },
                {
                    "url": c_jpg_3.default,
                    "name": "c"
                },
                {
                    "url": d_jpg_3.default,
                    "name": "d"
                },
                {
                    "url": pipi_caca_jpg_1.default,
                    "name": "pipi caca"
                },
            ],
        },
        "somePictures": {
            "files": [
                {
                    "url": a_jpg_3.default,
                    "name": "a"
                },
                {
                    "url": b_jpg_4.default,
                    "name": "b"
                },
                {
                    "url": c_jpg_4.default,
                    "name": "c"
                },
                {
                    "url": d_jpg_4.default,
                    "name": "d"
                },
            ],
        },
    },
};
