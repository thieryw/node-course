import type { Tree } from "./crawl";
import type { PathLike } from "fs";
import { relative, join } from "path";
import { appendFileSync } from "fs";
import { generatedFileName } from "./generatedFileName";



export function writeImports(params: {
	mediaPath: PathLike,
	generatedFilePath: PathLike,
	dirArborescence: Tree,

}) {

	const { mediaPath, dirArborescence, generatedFilePath } = params;

	const relativeGeneratedFilePath = relative(
		__dirname,
		generatedFilePath.toString()
	)


	let index = 0;

	function writeImportsRec(mediaPath: PathLike, dirArborescence: Tree) {

		dirArborescence.files.forEach(file => {
			const relativePath = relative(
				join(
					__dirname, 
					relativeGeneratedFilePath
				),
				join(
					mediaPath.toString(), 
					file
				)
			);


			appendFileSync(
				join(
					__dirname,
					relativeGeneratedFilePath,
					`${generatedFileName}.ts`
				),
				`import _${index} from "${relativePath}"; \n`
			);

			index++;

		});


		Object.keys(dirArborescence.directories).forEach((dir) => {
			writeImportsRec(
				join(mediaPath.toString(), dir),
				dirArborescence.directories[dir]
			);
		})

	}

	writeImportsRec(mediaPath, dirArborescence);

}