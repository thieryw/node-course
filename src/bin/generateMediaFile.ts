import { writeImports } from "./writeImports";
import { writeExport } from "./writeExport";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";
import { generatedFileName } from "./generatedFileName";
import { crawl } from "./tools/crawl";
import { sortFileArraysNumerically } from "./sortFileArraysNumerically";

export function generateMediaFile(params: {
	generatedFilePath: string;
	mediaDirPath: string;
	acceptedFileExtensions: string[];
}) {
	const { generatedFilePath, mediaDirPath, acceptedFileExtensions } = params;
	const tree = crawl({ "dirPath": mediaDirPath });
	const generatedFileCompletePath = join(generatedFilePath, `${generatedFileName}.ts`);

	sortFileArraysNumerically({ tree })

	if (existsSync(generatedFileCompletePath)) {
		writeFileSync(generatedFileCompletePath, "");
	}

	writeImports({
		mediaDirPath,
		generatedFilePath,
		tree,
		acceptedFileExtensions
	});

	writeExport({
		tree,
		generatedFilePath,
		acceptedFileExtensions
	});

};