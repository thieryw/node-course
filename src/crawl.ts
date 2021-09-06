import {readdirSync, statSync} from "fs";
import {join} from "path";
import type { PathLike } from "fs";

function crawlRec(mediaPath: PathLike): Record<string, unknown>{

	const out: ReturnType<typeof crawlRec> = {};
	
	readdirSync(mediaPath).forEach(file => {
		if(statSync(join(mediaPath.toString(), file)).isDirectory()){
			out[file] = crawlRec(join(mediaPath.toString(), file));
			return;
		}
		out[file.split(".")[0]] = file;
	})
	
	return out;
}

export function crawl(mediaPath: PathLike): Record<string, unknown>{

	return crawlRec(mediaPath);

};