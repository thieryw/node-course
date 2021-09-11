import type { Tree } from "./crawl";
import type { PathLike } from "fs";
import { relative, join, extname } from "path";
import { appendFileSync } from "fs";
import { generatedFileName } from "./generatedFileName";
import {type} from "os";

export function writeImports(params: {
	mediaPath: PathLike,
	generatedFilePath: PathLike,
	dirArborescence: Tree,
	acceptedFileExtensions: string[];

}) {

	const { 
		mediaPath, 
		dirArborescence, 
		generatedFilePath, 
		acceptedFileExtensions 
	} = params;

	const relativeGeneratedFilePath = relative(
		__dirname,
		generatedFilePath.toString()
	)


	let index = 0;

	function generateStringRec(mediaPath: PathLike, dirArborescence: Tree){

		let str = `${
			dirArborescence.files.map(file => {
				const relativePath = relative(
					join(
						__dirname,
						relativeGeneratedFilePath
					),
					join(
						mediaPath.toString(),
						file
					)
				)

				if(!acceptedFileExtensions.includes(extname(file))){
					return "";
				}

				return `import _${index++} from "${type() === "Windows_NT" ? ".\\" : "./"}${relativePath}";\n`
			})
		}`

		const directories = dirArborescence.directories;

		Object.keys(directories).forEach(key => {
			str = str + generateStringRec(
				join(mediaPath.toString(), key),
				directories[key]
			)
		})

		return str.replace(/,/g, "");

	}

	
	appendFileSync(
		join(
			generatedFilePath.toString(), 
			`${generatedFileName}.ts`
		), 
		generateStringRec(
			mediaPath, 
			dirArborescence
		)
	)

}