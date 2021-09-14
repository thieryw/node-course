import {writeFileSync} from "fs";

export function writeDataToFile(params: {
	data: string;
	file: string;
}){
	const {data, file} = params;

	writeFileSync(file, data);


}