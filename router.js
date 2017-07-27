function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    console.log(typeof(handle[pathname]));
    if (typeof handle[pathname] === `function`) {
        handle[pathname](response);
    } else {
        console.log(`No request handler found ` + pathname);
        response.writeHead(404, { "Conten-Type": "text/plain" });
        response.write(`404 Not found`);
        response.end();
    }
}

exports.route = route;