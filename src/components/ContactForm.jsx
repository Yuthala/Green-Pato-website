import React from 'react'
import { useState } from 'react'
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './ContactForm.css'
import {Button} from './Button'
import { isValidEmail } from './../isValidEmail'
import Swal from 'sweetalert2'

function ContactForm() {

	const useLayoutEffect = () => {
		// scroll to top
		window.scrollTo(0, 0)
	};

	// Задаем state для инпутов
	const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        termsAndConditions: false
	})

	// создаем метод update для всех инпутов, тернарный оператор для input type checkbox и type "все остальные" 
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
	const validationRules = {
		name: !!state.name && state.name.match(/^ *$/) === null && state.message.length < 20,
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

		// fetch запрос
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
			event.target.reset();
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
				<label>Ваше имя</label>
				<input 
					type="text" 
					className="field" 
					placeholder="Ваше имя" 
					name="name" 
					onChange={update}
					required/>
			</div>

			<div className="input-box">
				<label>Электронная почта</label>
				<input 
					type="email" 
					className="field" 
					placeholder="example@email.ru" 
					name="email" 
					onChange={update}
					required/>
			</div>

			<div className="input-box">
				<label>Ваше сообщение</label>
				<textarea 
					name="message" 
					className="field mess" 
					placeholder="Ваше сообщение (до 250 знаков)" 
					onChange={update}
					required>
				</textarea>
			</div>

            <div className="checkbox">
				<input
					type="checkbox"
					name="termsAndConditions"
					className="input-check"
					onChange={update}
					required/>
				Нажимая на кнопку "Отправить", вы даете согласие на обработку персональных данных и соглашаетесь с <HashLink to="policy" rel="noopener noreferrer license" className="input-p" onClick={useLayoutEffect }>Политикой конфиденциальности.</HashLink>
			</div>

			<input type="hidden" name="subject" value="Форма с сайта Green Pato/index page"/>

			<Button 
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
