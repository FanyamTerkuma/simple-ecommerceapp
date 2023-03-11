import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import axios from 'axios';

function UpdateProduct({ className }) {
	const [name, SetName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(null);
	const [file, SetFile] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const id = location.pathname.split('/')[2];

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('file', file);
			await axios.put('http://localhost:3001/products/' + id, formData);
			window.alert('Product has been updated successfully');
			navigate('/admin');
		} catch (error) {
			console.log(error);
		}
	};
	const handleClick = async (e) => {
		e.preventDefault();
		upload(id);
	};

	return (
		<div className={`${className}  flex justify-center `}>
			<div className=' sm:w-1/2 w-auto max-w-[30em]'>
				<form className='flex flex-col gap-3 bg-[#fffefe] p-2 rounded shadow-lg'>
					<h1 className='font-semibold text-2xl text-center'>Edit Selected Product</h1>
					<Input
						label='Product name'
						id='name'
						type='text'
						placeholder='Enter product name'
						name='name'
						onChange={(e) => {
							SetName(e.target.value);
						}}
					/>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						className='w-auto resize-none indent-1 p-1 rounded shadow-inner border border-slate-100 focus:outline-none'
						rows={8}
						name='description'
						placeholder='Write product description'
						onChange={(e) => {
							setDescription(e.target.value);
						}}></textarea>
					<Input
						label='Product price'
						id='price'
						type='number'
						placeholder='Enter price'
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
					<Button className='rounded border-green-600' label='Update' onClick={handleClick} />
				</form>
			</div>
		</div>
	);
}

export default UpdateProduct;
