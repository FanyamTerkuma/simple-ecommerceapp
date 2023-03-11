const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/products', express.static('./uploads'));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	}
});
const upload = multer({ storage: storage });

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'ecommercedb'
});

app.get('/products', (req, res) => {
	const query = 'SELECT * FROM products';
	db.query(query, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.post('/products', upload.single('file'), (req, res) => {
	const name = req.body.name;
	const description = req.body.description;
	const price = req.body.price;
	const image = 'http://localhost:3001/products/' + req.file.filename;

	const query = 'INSERT INTO products(name,description,price,image) VALUES(?,?,?,?)';
	db.query(query, [name, description, price, image], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});
app.delete('/products/:id', (req, res) => {
	const productId = req.params.id;
	const query = 'DELETE FROM  products WHERE productid =?';
	db.query(query, [productId], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});
app.put('/products/:id', upload.single('file'), (req, res) => {
	const productId = req.params.id;
	const name = req.body.name;
	const description = req.body.description;
	const price = req.body.price;
	const image = 'http://localhost:3001/products/' + req.file.filename;

	const query = 'UPDATE products SET name = ?,description = ?, price = ?,image = ? WHERE productid = ?';

	db.query(query, [name, description, price, image, productId], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});
app.listen(3001, () => {
	console.log('connection successful');
});
