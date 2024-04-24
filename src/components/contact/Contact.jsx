import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './contact.scss';
import Button from '../button/Button';

const Contact = () => {
	const form = useRef();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();

		if (name && email && message) {
			emailjs
				.sendForm(
					'service_ladrbav',
					'template_q0dxs9q',
					form.current,
					'bsEke6vB-AGmMW_Lc'
				)
				.then(
					(result) => {
						toast.success('Message has been sent.');

						setName('');
						setEmail('');
						setMessage('');
					},
					(error) => {
						console.log(error.text);
					}
				);
		} else {
			toast.error('All Fields are required.');
		}
	};

	return (
		<>
			<ToastContainer />
			<div className="email">
				<form ref={form} onSubmit={sendEmail}>
					<h2>Ask a question</h2>
					<div className="line" />

					<div className="info">
						<input
							type="text"
							name="name"
							placeholder="Your Name ..."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email ..."
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<textarea
						name="message"
						placeholder="Your Question ..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}></textarea>
					<Button text="Send" />
				</form>
			</div>
		</>
	);
};

export default Contact;
