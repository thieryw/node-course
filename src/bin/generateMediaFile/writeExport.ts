import type { Tree } from "./crawl";
import { appendFileSync } from "fs";
import type { PathLike } from "fs";
import { join } from "path";
import { generatedFileName } from "./generatedFileName";

export function writeExport(params: {
	dirArborescence: Tree,
	generatedFilePath: PathLike,
}) {

	const { generatedFilePath, dirArborescence } = params;
	const path = join(generatedFilePath.toString(), `${generatedFileName}.ts`);
	let index = 0;

	appendFileSync(path, "\n\nexport const files = {\n");

	function generateStringRec(dirArborescence: Tree): string {


		const files = `"files": [
				${dirArborescence.files.map(file =>
			`{
							"url": _${index++},
							"name": "${file.replace(/^\d+_/g, "").replace(/\.\w+$/g, "")}"
						}`

		)
			}]`;

		if (Object.keys(dirArborescence.directories).length === 0) {
			return files;
		};

		return `
			${files}
			,
			"directories": {
				${Object.keys(dirArborescence.directories).map(key => `
					"${key}": {${generateStringRec(dirArborescence.directories[key])
			}}
				`
		)}
			}
		`;

	};

	appendFileSync(
		path,
		`${generateStringRec(dirArborescence)}}`
	);

}