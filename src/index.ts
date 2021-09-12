import {join} from "path";
import {generateMediaFile} from "./bin/generateMediaFile";

const mediaPath = join(__dirname, "..", "media");
const generatedFilePath = join(__dirname, "..", "src", "mediaImports");


generateMediaFile({
	mediaPath, 
	generatedFilePath, 
	"acceptedFileExtensions": [
		".jpg",
		".png"
	]
});






