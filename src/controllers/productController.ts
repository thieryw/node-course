import {findAll, findById, newProduct} from "../models/productModel";
import type {ServerResponse, IncomingMessage} from "http";
import {respond} from "../utils";
import {getPostData} from "../utils";
//@ts-ignore
import {v4 as uuidV4} from "uuid";

export async function getProducts(params: {
	res: ServerResponse;
	id?: number;
}){

	const {res, id} = params;
	const value = id === undefined ? await findAll() : await findById({id});

	respond({
		res,
		"contentType": "application/json",
		"statusCode": 200,
		"value": JSON.stringify(value ?? "product(s) not found !!")
	})

};

export async function createProduct(params: {
	req: IncomingMessage;
	res: ServerResponse;
}){

	const {req, res} = params;

	const body = await getPostData({req});

	const product = await newProduct({
		"data": {
			"id": uuidV4(),
			...JSON.parse(body)
		}
	})

	respond({
		res,
		"contentType": "application:json",
		"statusCode": 201,
		"value": JSON.stringify(product)
	})
}
