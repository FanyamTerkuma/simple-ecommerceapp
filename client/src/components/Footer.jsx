import React from 'react';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';
import { AiOutlineFacebook } from 'react-icons/ai';
import { SiWhatsapp, SiGmail } from 'react-icons/si';
function Footer() {
	return (
		<div className='grid justify-center gap-2 bg-white shadow-lg opacity-100 py-4 h-auto px-2 sticky bottom-0 z-50'>
			<p className='flex justify-center text-2xl font-light'>Contact us</p>
			<span className='grid grid-cols-1 md:grid-cols-5 gap-2 justify-center'>
				<div className='flex gap-2 items-center'>
					<SlSocialInstagram size={26} color='#c9184a' />
					<p className='cursor-pointer'>@insta.com</p>
				</div>
				<div className='flex gap-2 items-center'>
					<SlSocialTwitter size={26} color='#0077b6' />
					<p className='cursor-pointer'>@twitter.com</p>
				</div>
				<div className='flex gap-2 items-center'>
					<AiOutlineFacebook size={32} color='#023e8a' />
					<p className='cursor-pointer'>@facebook.com</p>
				</div>
				<div className='flex gap-2 items-center'>
					<SiWhatsapp size={26} color='#6a994e' />
					<p className='cursor-pointer'>080-200-243-90</p>
				</div>
				<div className='flex gap-2 items-center'>
					<SiGmail size={26} color='#4c956c' />
					<p className='cursor-pointer'>@gmail.com</p>
				</div>
			</span>
			<p className='flex justify-center text-xs font-extralight '>Copyright 2022</p>
		</div>
	);
}

export default Footer;
