import {findAll, findById, newProduct} from "../models/productModel";
import type {ServerResponse} from "http";
import type {DataType} from "../data/dataType";
import {respond} from "../utils/respond";

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
	res: ServerResponse;
	data: DataType;
}){
	const {res, data} = params;
	const product = await newProduct({data});

	respond({
		res,
		"contentType": "application/json",
		"statusCode": 201,
		"value": JSON.stringify(product)
	})
}
