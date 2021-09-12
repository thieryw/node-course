import { createServer } from "http";


export function createMyServer() {

	createServer((req, res) => {

		res.write("Hello World");

		res.end();

	}).listen(5000, () => console.log("server running..."));

}