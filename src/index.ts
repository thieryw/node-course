import {createServer} from "http";
import {getProducts, createProduct} from "./controllers/productController";

const server = createServer((req, res)=>{

	if(req.url === "/products" && req.method === "GET"){
		getProducts({res});
		return;
	}
	if(req.url?.match(/\/products\/\d+/) && req.method === "GET"){
		const id = parseInt(req.url.split("/")[2]);
		getProducts({res, id})
		return;

	}

	if(req.url === "/products" && req.method === "POST"){
		createProduct({res, req});
		return;

	}


	res.writeHead(404, {"content-type": "text/html"});
	res.end("<h1>404 page not found !!!</h1>")


})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("listening on port 3000"));







