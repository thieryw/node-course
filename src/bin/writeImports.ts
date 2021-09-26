import type { Tree } from "./tools/crawl";
import type { PathLike } from "fs";
import { relative, join, extname } from "path";
import * as fs from "fs";
import { generatedFileName } from "./generatedFileName";
import { type } from "os";

export function writeImports(params: {
	mediaDirPath: string;
	generatedFilePath: string;
	tree: Tree;
	acceptedFileExtensions: string[];
}) {

	const {
		mediaDirPath,
		tree,
		generatedFilePath,
		acceptedFileExtensions
	} = params;

	const relativeGeneratedFilePath = relative(
		__dirname,
		generatedFilePath
	)

	const { getCounter } = (() => {

		let counter = 0;

		function getCounter() {
			return counter++;
		}

		return { getCounter };

	})();

	const generateStringRec = (mediaPath: PathLike, tree: Tree) => {

		let str = "";

		tree.files.forEach(file => {
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
			if (!acceptedFileExtensions.includes(extname(file))) {
				return "";
			}
			str = `${str}import _${getCounter()} from "${type() === "Windows_NT" ? ".\\" : "./"}${relativePath}";\n`
		})

		const { directories } = tree;

		Object.keys(directories).forEach(key => {
			str = str + generateStringRec(
				join(mediaPath.toString(), key),
				directories[key]
			)
		})

		return str;

	};


	fs.appendFileSync(
		join(generatedFilePath, `${generatedFileName}.ts`),
		generateStringRec(
			mediaDirPath,
			tree
		)
	)

}