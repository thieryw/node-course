import type {Tree} from "./crawl";
import type {PathLike} from "fs";
import {relative, join} from "path";
import {appendFileSync} from "fs";



export function writeImports(mediaPath: PathLike, dirArborescence: Tree) {

	let currentIndex = 0;
	function writeImportsRec(mediaPath: PathLike, dirArborescence: Tree) {

		dirArborescence.files.forEach(file => {
			const relativePath = relative(
				join(__dirname, "../src/mediaImports"),
				join(mediaPath.toString(), file)
			);

			appendFileSync(
				join(__dirname, "../src/mediaImports/media.ts"),
				`import _${currentIndex} from "${relativePath}"; \n`
			);

			currentIndex++;

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