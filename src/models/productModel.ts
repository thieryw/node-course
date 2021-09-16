import products from "../data/products.json";
import type {DataType} from "../data/dataType";
import {writeDataToFile} from "../utils";
import {join} from "path";


export function findAll(){
	return new Promise<typeof products>(resolve => resolve(products));
};

export function findById(params: {id: number | string}){
	const { id } = params;
	return new Promise<DataType[number] | undefined>(resolve => {

		const product = products.find(product => id === product.id);
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
		"file": join(__dirname, "../../src/data/products.json"),
		"data": JSON.stringify(productsObj)
	});

	return new Promise<DataType>(resolve => {

		resolve(data);
	});
}

export function updateProduct(params: {
	updatedData: DataType[number];
	id: string | number;
}){
	const {id, updatedData} = params;

	return new Promise<DataType[number] | undefined>(resolve => {
		const index = products.findIndex(product => product.id === id);


		products[index] = updatedData;

		writeDataToFile({
			"file": join(__dirname, "../../src/data/products.json"),
			"data": JSON.stringify(products)
		});

		resolve(products[index])

		
	})

};

export function deleteById(params: {
	id: string | number;
}){

	const {id} = params;

	return new Promise<DataType[number] | undefined>(resolve => {
		const index = products.findIndex(product => product.id === id);
		const deletedProduct = index === -1 ? undefined : {
			...products[index]
		};
		const updatedProducts = products.filter(product => product.id !== id);
		console.log(updatedProducts)
		writeDataToFile({
			"file": join(__dirname, "../../src/data/products.json"),
			"data": JSON.stringify(updatedProducts)
		});

		resolve(deletedProduct);
	})

}
