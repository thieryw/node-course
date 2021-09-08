import {crawl} from "./crawl";
import {join} from "path";
import {mkdirSync, rmSync} from "fs";
import {writeImports} from "./writeImports";


const mediaPath = join(__dirname, "../media");

const dirArborescence = crawl(mediaPath);

rmSync(join(__dirname, "../src/mediaImports"), { "recursive": true, "force": true });

mkdirSync(join(__dirname, "../src/mediaImports"));



writeImports(mediaPath, dirArborescence);








