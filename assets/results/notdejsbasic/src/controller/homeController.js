import connection from "../configs/connectDB";

let data = [];
let getHomePage = (req, res) => {
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    data = []
    results.map((row) => {
      data.push({
        id: row.id,
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email,
        address: row.address,
      });
    });
  });
  console.log("chec", data);
  return res.render("index.ejs", { dataUser: data});
};

module.exports = {
  getHomePage,
};
