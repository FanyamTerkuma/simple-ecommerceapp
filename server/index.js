const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('file'));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '/uploads');
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

const { parsed: config } = dotenv.config();
const BASE_URL = `GET https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`; //temporary baseurl

const auth = {
	userName: config.CLOUD_NAME,
	password: config.API_SECRET
};

app.get('/', (req, res) => {
	res.json('backend reached');
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
	const image = req.file.file;

	const query = 'INSERT INTO products(name,description,price,image) VALUES(?,?,?,?)';
	db.query(query, [name, description, price, image], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.listen(3001, () => {
	console.log('connection successful');
});
