import {writeImports} from "./writeImports";
import {writeExport} from "./writeExport";
import type {PathLike} from "fs";
import {rmSync, mkdirSync, readdirSync} from "fs";
import {join} from "path";
import {generatedFileName} from "./generatedFileName";
import {crawl} from "./crawl";


export function generateMediaFile(params: {
	generatedFilePath: PathLike;
	mediaPath: PathLike;
}){
	const {generatedFilePath, mediaPath} = params;
	const dirArborescence = crawl({mediaPath});

	if(readdirSync(generatedFilePath).length > 0){
		rmSync(
			join(
				generatedFilePath.toString(), 
				`${generatedFileName}.ts`
			)
		);
	};



	writeImports({
		mediaPath, 
		generatedFilePath, 
		dirArborescence
	});

	writeExport({
		dirArborescence, 
		generatedFilePath
	});

};