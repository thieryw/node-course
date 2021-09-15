import type {ServerResponse, IncomingMessage} from "http";
import {writeFileSync} from "fs";

export function respond(params: {
	res: ServerResponse;
	contentType: string;
	value: unknown;
	statusCode: number;
}){

	const {contentType, res, value, statusCode} = params;

	try {
		if(value === undefined){
			res.writeHead(404, {"content-type": "text/html"});
			res.end("<h1>404 not found !!!</h1>")
			return;
		}
		res.writeHead(statusCode, {"content-type": contentType});
		res.end(JSON.stringify(value));
		
	} catch (err){
		console.log(err);
	};

}


export function writeDataToFile(params: {
	data: string;
	file: string;
}){
	const {data, file} = params;
	writeFileSync(file, data);

};

export function getPostData(params: {req: IncomingMessage}){

	const {req} = params;

	return new Promise<string>((resolve, reject)=> {

		try{
			let body = "";

			req.on("data", chunk => {
				body += chunk.toString();
			});

			req.on("end", ()=> {
				resolve(body);
			})

		}catch (err){
			reject(err);
		}

	})
}