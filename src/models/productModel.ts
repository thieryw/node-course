import products from "../data/products.json";
import type {DataType} from "../data/dataType";


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
}
