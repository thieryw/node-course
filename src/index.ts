import {createServer} from "http";
import {getProducts, postProduct, putProductUpdate, deleteProduct} from "./controllers/productController";

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
		postProduct({res, req});
		return;

	}

	if(req.url?.match(/\/products\/\d+/) && req.method === "PUT"){
		putProductUpdate({
			res,
			req,
			"id": parseInt(req.url.split("/")[2])
		});
		return;

	}

	if(req.url?.match(/\/products\/\d+/) && req.method === "DELETE"){
		deleteProduct({
			res,
			"id": parseInt(req.url.split("/")[2])
		});

		return;
	}


	res.writeHead(404, {"content-type": "text/html"});
	res.end("<h1>404 page not found !!!</h1>")


})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("listening on port 3000"));







