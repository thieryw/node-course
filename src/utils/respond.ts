import type {ServerResponse} from "http";
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