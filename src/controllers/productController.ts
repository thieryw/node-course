import {findAll, findById} from "../models/productModel";
import type {ServerResponse} from "http";

export async function getProducts(params: {
	res: ServerResponse;
	id?: number;
}){

	const {res, id} = params;

	try {
		const value = id === undefined ? await findAll() : await findById({id});

		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify(value));


	} catch (err) {
		console.log(err);
	}

};


