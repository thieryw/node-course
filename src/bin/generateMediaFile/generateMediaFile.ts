import {writeImports} from "./writeImports";
import {writeExport} from "./writeExport";
import type {PathLike} from "fs";
import {existsSync, writeFileSync} from "fs";
import {join} from "path";
import {generatedFileName} from "./generatedFileName";
import {crawl} from "./crawl";


export function generateMediaFile(params: {
	generatedFilePath: PathLike;
	mediaPath: PathLike;
	acceptedFileExtensions: string[];
}){
	const {generatedFilePath, mediaPath, acceptedFileExtensions} = params;
	const dirArborescence = crawl({mediaPath});
	const generatedFileCompletePath = join(generatedFilePath.toString(), `${generatedFileName}.ts`);


	if(existsSync(generatedFileCompletePath)){
		writeFileSync(generatedFileCompletePath, "");
	}


	writeImports({
		mediaPath, 
		generatedFilePath, 
		dirArborescence,
		acceptedFileExtensions
	});

	writeExport({
		dirArborescence, 
		generatedFilePath,
		acceptedFileExtensions
	});

};