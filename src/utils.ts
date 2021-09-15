import type {ServerResponse, IncomingMessage} from "http";
import {writeFileSync} from "fs";

export function respond(params: {
	res: ServerResponse;
	contentType: string;
	value: string;
	statusCode: number;
}){

	const {contentType, res, value, statusCode} = params;

	try {
		res.writeHead(statusCode, {"content-type": contentType});
		res.end(value);
		
	} catch (err){
		console.log(err);
	};

}


export function writeDataToFile(params: {
	data: string;
	file: string;
}){
	const {data, file} = params;
	console.log("caca");

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

	/*try{
		let body = "";

		req.on("data", chunk => {
			body += chunk.toString();
		})

		req.on("end", ()=> {


		})


	}catch (err){

		console.log("ok");

	}*/

}