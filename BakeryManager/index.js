var PouchDB = require("pouchdb");
var db = new PouchDB("todos");
var remoteCouch = false;

const item = {
    name: "Cake",
    ingredients: ["flour"],
    price: 10,
    count: 20,
};

class BakedGoods {
    Class(name, ingredients, price, count) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.count = count;
    }
}

function createItem() {}

function addTodo(text) {
    var todo = {
        _id: new Date().toISOString(),
        title: text,
        completed: false,
    };
    db.put(todo, function callback(err, result) {
        if (!err) {
            console.log("Successfully posted a todo!");
        }
    });
}

function showTodos() {
    db.allDocs({ include_docs: true, descending: true }, function(err, doc) {
        console.log(doc);
    });
}

addTodo();
addTodo();
showTodos();