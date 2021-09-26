import { readdirSync, statSync } from "fs";
import { join } from "path";

export type Tree = {
	files: string[];
	directories: Record<string, Tree>
};

export function crawl(params: { dirPath: string; }): Tree {
	const { dirPath } = params;
	const files: string[] = [];
	const directories: Tree["directories"] = {};

	readdirSync(dirPath).forEach(fileOrDir => {

		const completePath = join(dirPath.toString(), fileOrDir);

		if (statSync(completePath).isDirectory()) {
			directories[fileOrDir] = crawl({ "dirPath": completePath });
			return;
		}

		files.push(fileOrDir);
	})

	return {
		files,
		directories
	};
};


