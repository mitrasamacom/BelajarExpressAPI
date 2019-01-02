var Book = require("../models/book").Book;
module.exports = function(app) {
  app.get("/", function(req, res){
      res.send("OKE")
  })
  //route ketika pengguna mengakses domain.com/book
  app.get("/book", function(req, res) {
    Book.find({}, function(err, books) {
      if(err)
          return res.send(err);
      //maka respon sistem adalah menampilkan data book dalam bentuk json
      res.json(books);
    });
  });

  //route ketika pengguna mengakses domain.com/book/SomeID
  app.get("/book/:id", function (req, res) {
    Book.find({"_id":req.params.id}, function(err, book) {
      if(err)
          return res.send(err);
      //maka respon sistem adalah menampilkan data buku yang sesuai dengan parameter someID dalam bentuk json
      res.json(book);
    });
  });

};