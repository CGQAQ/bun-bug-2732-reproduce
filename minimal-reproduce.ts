import Parser from "web-tree-sitter";
import fs from "node:fs/promises";
await Parser.init();
 
async function loadLanguageParser(path: string) {
   return Parser.Language.load(path);
}

// Same size, wasm file size: 3.8 MB, but will not seg fault
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");
// await loadLanguageParser("./tree-sitter-c_sharp.wasm");

// Same size, wasm file size: 3.8 MB, but will seg fault
// only if load at least three times
await loadLanguageParser("./tree-sitter-zig.wasm");
await loadLanguageParser("./tree-sitter-zig.wasm");
await loadLanguageParser("./tree-sitter-zig.wasm");
 
// const parser = new Parser();
// parser.setLanguage(parsers.typescript);
// 
// const sourceCode = `
// console.log("Hello World");
// `;
// 
// const result = parser.parse(sourceCode);
// console.log(result.rootNode.toString());
// 
//

