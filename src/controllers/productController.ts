import {findAll, findById, newProduct, updateProduct, deleteById} from "../models/productModel";
import type {ServerResponse, IncomingMessage} from "http";
import {respond} from "../utils";
import {getPostData} from "../utils";
//@ts-ignore
import {v4 as uuidV4} from "uuid";
import type {DataType} from "../data/dataType";

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
		"value": value
	})

};

export async function postProduct(params: {
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
		"value": product
	})
}


export async function putProductUpdate(params: {
	req: IncomingMessage,
	res: ServerResponse,
	id: number | string
}){

	const {id, req, res} = params;
	const product = await findById({id});

	if(product === undefined){
		return;
	}

	const body = await getPostData({req});

	const {name, description, price} = JSON.parse(body);

	const updatedData = {
		id,
		"name": name || product.name,
		"description": description || product.description,
		"price": price || product.price
	}

	const updatedProduct = await updateProduct({
		id,
		"updatedData": updatedData as DataType[number]
	});

	respond({
		res,
		"contentType": "application/json",
		"statusCode": 200,
		"value": updatedProduct
	});

};

export async function deleteProduct(params: {
	id: string | number;
	res: ServerResponse;
}){
	const {id, res} = params;

	const deletedProduct = await deleteById({id});

	const value = deletedProduct === undefined ? undefined : {
		"message": "this product has been deleted",
		...deletedProduct
	}

	respond({
		res,
		"contentType": "application/json",
		"statusCode": 200,
		value
	})
}

