// Imports
import ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ from './node_modules/html-loader/dist/runtime/getUrl.js';
var ___HTML_LOADER_IMPORT_0___ = new URL('./images/aa.jpg', import.meta.url);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(
  ___HTML_LOADER_IMPORT_0___
);
var code =
  '<!DOCTYPE html> <html lang="zh_cn"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>some/page1</title> </head> <body> <div> <img src="' +
  ___HTML_LOADER_REPLACEMENT_0___ +
  '"/> </div> <div id="app"></div> </body> </html> ';
// Exports
export default code;
