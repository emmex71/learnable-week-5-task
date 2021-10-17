var http = require("http");
var books = [
    {
        name: "things fall apart",
        author: "Chinua achebe",
        genre: "prose",
        status: "available"
    },
    {
        name: "lost symbols",
        author: "Dan brown",
        genre: "fiction",
        status: "available"
    },
    {
        name: "purple hibiscus",
        author: "chimamanda adichie",
        genre: "prose",
        status: "available"
    },
    {
        name: "black bird",
        author: "ejike umeadi",
        genre: "fiction",
        status: "available"
    },
    {
        name: "the successors",
        author: "jerry agada",
        genre: "horror",
        status: "available"
    },
    {
        name: "arrow of god",
        author: "Chinua achebe",
        genre: "prose",
        status: "available"
    },
    {
        name: "the barbershop",
        author: "chima amadi",
        genre: "drama",
        status: "available"
    },
    {
        name: "americanah",
        author: "chimamanda adichie",
        genre: "prose",
        status: "available"
    },
    {
        name: "black boy",
        author: "ola rotimi",
        genre: "fiction",
        status: "available"
    },
    {
        name: "half of a yellow sun",
        author: "chimamanda adichie",
        genre: "prose",
        status: "available"
    },
];
var ObjectPattern = {
    getBooks: function (res) {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(books));
    },
    rentBook: function (req, res) {
        var data = '';
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            var obj = JSON.parse(data);
            try {
                var book = books.filter(function (book) {
                    return book.name === obj.text;
                });
                console.log(book);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === "GET" && req.url === "/") {
        ObjectPattern.getBooks(res);
    }
    if (req.method === "POST" && req.url === "/rent") {
        ObjectPattern.rentBook(req, res);
    }
}).listen(5001, console.log("server started on port 5001"));
