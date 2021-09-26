import { join } from "path";
import { generateMediaFile } from "./generateMediaFile";

const rootProjectDirPath = join(__dirname, "..", "..");
const resourceDirPath = join(rootProjectDirPath, "res");

const mediaDirPath = join(resourceDirPath, "media");
const generatedFilePath = join(resourceDirPath, "generatedData.ts");

generateMediaFile({
	mediaDirPath,
	generatedFilePath,
	"acceptedFileExtensions": [
		".jpg",
		".png"
	]
});
