var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


/*
宣告一個物件，一個物件的key / value 的架構
object handle {
    /       :          requestHandlers.start,
    /start  :          requestHandlers.start,
    /uplade :          requestHandlers.uplad}
 */
var handle = {}
    // "/","/start" 的 request 由 requestHandlers.start 處理
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
// "/upload" 的 request 由requestHandlers.start 處理
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);