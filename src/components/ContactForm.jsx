import React from 'react'
import { useState } from 'react'
import './ContactForm.css'
import {Button} from './Button'
import { isValidEmail } from './../isValidEmail'
import Swal from 'sweetalert2'

function ContactForm() {
	// Задаем state для инпутов
	const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        termsAndConditions: false
	})
	// создаем метод update для всех инпутов, тернарный оператор для input type checkbox и "все остальные" типа
	const update = event => {
		const target = event.currentTarget
		setState({
			...state,
			[target.name]: target.type === 'checkbox'
				? target.checked
				: target.value
		})
	}
	// Валидация инпутов
	var validationRules = {
		name: !!state.name && state.name.match(/^ *$/) === null,
		email: isValidEmail(state.email),
		message: !!state.message
			&& state.message.length < 250
			&& state.message.match(/^ *$/) === null,
		termsAndConditions: state.termsAndConditions
	}

	// Отправка формы на почту gmail
	const submit = async (event) => {
		event.preventDefault();

	// валидация формы по клику "Отправить"
	const isValidForm = Object
		.values(validationRules)
		.every(key => key)

		if (isValidForm) {
		console.log('✅ Submitting form with state:', state)
	}
	
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
			confirmButtonColor: "#008000"
		});
	
	// .catch((error) => {
	// 	Swal.fire({
	// 		text: "Что-то пошло не так. Попробовать еще раз?",
	// 		icon: "error",
	// 		confirmButtonColor: "#AB3541"
	// 	});
	// 	console.log(error);
	// })
	};
	  

  return (
	<section className="contact">
		<form onSubmit={submit}>
			<h4>Напишите нам</h4>
			<div className="input-box">
				<label htmlFor="name">Ваше имя</label>
				<input 
					type="text" 
					className="field" 
					placeholder="Ваше имя" 
					name="name" 
					onChange={update}
					required/>
			</div>

			<div className="input-box">
				<label htmlFor="email">Электронная почта</label>
				<input 
					type="email" 
					className="field" 
					placeholder="Ваш email" 
					name="email" 
					onChange={update}
					required/>
			</div>

			<div className="input-box">
				<label htmlFor="message">Ваше сообщение</label>
				<textarea 
					name="message" 
					className="field mess" 
					placeholder="Ваше сообщение (до 250 знаков)" 
					maxLength="250" 
					onChange={update}
					required>
				</textarea>
			</div>

			<label>
                <input
                    type="checkbox"
                    name="termsAndConditions"
                    onChange={update}
                    required/>
                Согласен с <a href="#">Политикой конфиденциальности</a>
            </label>

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
