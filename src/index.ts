import {crawl} from "./crawl";
import {join} from "path";


const mediaPath = join(__dirname, "../media");


console.log("recursive object with dir arborescence");
console.log(crawl(mediaPath));