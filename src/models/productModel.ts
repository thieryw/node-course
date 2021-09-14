import products from "../data/products.json";
import type {DataType} from "../data/dataType";
import {writeDataToFile} from "../utils/writeDataToFile";
import {join} from "path";

export function findAll(){
	return new Promise<typeof products>(resolve => resolve(products));
};

export function findById(params: {id: number}){
	const { id } = params;
	return new Promise<DataType | undefined>(resolve => {

		const product: DataType | undefined = (
			JSON.parse(JSON.stringify(products)) as DataType[]
		).find(
			product => id === product.id
		);

		console.log(product);

		resolve(product);
	})
};

export function newProduct(params: {
	data: DataType;
}){

	const {data} = params;
	const productsObj: DataType[] = JSON.parse(JSON.stringify(products));

	productsObj.push(data);

	writeDataToFile({
		"file": join(__dirname, "../data/products.json"),
		"data": JSON.stringify(productsObj)
	})

	return new Promise<DataType>(resolve => {

		resolve(data);
	});
}

