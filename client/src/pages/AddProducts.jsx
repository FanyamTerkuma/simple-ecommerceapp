import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

function AddProducts() {
	const [name, SetName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(null);
	const [file, SetFile] = useState(null);
	const navigate = useNavigate();

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('file', file);
			const res = await axios.post('http://localhost:3001/products', formData);
			console.log(res.data);
			navigate('/admin');
		} catch (error) {
			console.log(error);
		}
	};
	const handleClick = async (e) => {
		e.preventDefault();
		upload();
	};

	return (
		<div className='h-[100vh] flex justify-center pt-6  bg-[#f8f9fa]'>
			<div className=' sm:w-1/2 w-auto max-w-full'>
				<form className='flex flex-col gap-3 bg-[#fffefe] p-2 rounded shadow-lg'>
					<h1 className='font-semibold text-2xl text-center'>Add a New Product</h1>
					<Input
						label='Product name'
						id='name'
						type='text'
						placeholder='name'
						name='name'
						onChange={(e) => {
							SetName(e.target.value);
						}}
					/>
					<Input
						label='Product description'
						id='description'
						type='text'
						placeholder='description'
						name='description'
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
					<Input
						label='Product price'
						id='price'
						type='number'
						placeholder='price'
						min={0}
						name='price'
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>
					<Input
						label='Upload product image'
						id='image'
						type='file'
						name='file'
						onChange={(e) => {
							SetFile(e.target.files[0]);
						}}
					/>
					<Button className='rounded border-green-600' label='Add' onClick={handleClick} />
				</form>
			</div>
		</div>
	);
}

export default AddProducts;
