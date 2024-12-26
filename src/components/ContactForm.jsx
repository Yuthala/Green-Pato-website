import React from 'react'
import './ContactForm.css'
import {Button} from './Button'
import Swal from 'sweetalert2'

function ContactForm() {

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	
		formData.append("access_key", "e825ad6e-1037-4df3-a00d-3373884abfc0");
	
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);
	
		const res = await fetch("https://api.web3forms.com/submit", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		  },
		  body: json
		}).then((res) => res.json());
			Swal.fire({
				text: "Ваше сообщение отправлено",
				icon: "success",
				confirmButtonColor: "#B4C277"
			})
		// .catch((error) => {
		// 	Swal.fire({
		// 		text: "Что-то пошло не так. Попробовать еще раз?",
		// 		icon: "error",
		// 		confirmButtonColor: "#AB3541"
		// 	})
		// })
	  };
	  
  return (
	<section className="contact">
		<form onSubmit={onSubmit}>
			<h4>Напишите нам</h4>
			<div className="input-box">
				<label htmlFor="name">Ваше имя</label>
				<input type="text" className="field" placeholder="Ваше имя" name="name" required/>
			</div>
			<div className="input-box">
				<label>Электронная почта</label>
				<input type="email" className="field" placeholder="Ваш email" name="email" required/>
			</div>
			<div className="input-box">
				<label>Ваше сообщение</label>
				<textarea name="message" className="field mess" placeholder="Ваше сообщение (до 300 знаков)" required></textarea>
			</div>
			<Button 
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--medium"
				>
				ОТПРАВИТЬ
			</Button>
		</form>
	</section>
  )
}

export default ContactForm
