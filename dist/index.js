"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var productController_1 = require("./controllers/productController");
var server = (0, http_1.createServer)(function (req, res) {
    var _a, _b, _c;
    if (req.url === "/products" && req.method === "GET") {
        (0, productController_1.getProducts)({ res: res });
        return;
    }
    if (((_a = req.url) === null || _a === void 0 ? void 0 : _a.match(/\/products\/\d+/)) && req.method === "GET") {
        var id = parseInt(req.url.split("/")[2]);
        (0, productController_1.getProducts)({ res: res, id: id });
        return;
    }
    if (req.url === "/products" && req.method === "POST") {
        (0, productController_1.postProduct)({ res: res, req: req });
        return;
    }
    if (((_b = req.url) === null || _b === void 0 ? void 0 : _b.match(/\/products\/\d+/)) && req.method === "PUT") {
        (0, productController_1.putProductUpdate)({
            res: res,
            req: req,
            "id": parseInt(req.url.split("/")[2])
        });
        return;
    }
    if (((_c = req.url) === null || _c === void 0 ? void 0 : _c.match(/\/products\/\d+/)) && req.method === "DELETE") {
        (0, productController_1.deleteProduct)({
            res: res,
            "id": parseInt(req.url.split("/")[2])
        });
        return;
    }
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 page not found !!!</h1>");
});
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () { return console.log("listening on port 3000"); });
