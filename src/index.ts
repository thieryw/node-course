import {createServer} from "http";
import {join, extname} from "path";
import {readFile} from "fs";
import type {IncomingMessage, ServerResponse} from "http";


const server = createServer((req, res) => {
	if(req.url === undefined){
		return;
	}
	const filePath = join(
		__dirname, "..",
		"public", 
		req.url === "/" ? "index.html" : req.url
	);

	const fileExtension = extname(filePath);
	let contentType = "text/html";

	switch(fileExtension){
		case ".js": 
			contentType = "text/javascript";
			break;
		case ".css":
			contentType = "text/css";
			break;
		case ".json":
			contentType = "application/json";
			break;
		case ".png":
			contentType = "image/png";
			break;
		case ".jpg":
			contentType = "image/jpg";
			break;
	}


	readFile(filePath, (err, content)=> {
		if(err){
			if(err.code === "ENOENT"){
				readFile(join(__dirname, "..", "public", "404.html"), (err, content)=> {
					res.writeHead(200, {"Content-Type": "text/html"});
					res.end(content, "utf8");
				})
				return;
			}

			res.writeHead(500);
			res.end(`Server Error: ${err.code}`);
			return;
		}

		res.writeHead(200, {"Content-type": contentType});
		res.end(content, "utf8");
	});
});


const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));









