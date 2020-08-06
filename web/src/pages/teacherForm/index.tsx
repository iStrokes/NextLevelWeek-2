import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import TextArea from '../../components/TextArea';



function teacherForm() {
	return (
		<div id="page-teacher-form" className="container">
			<PageHeader 
			title="Que incrível que você quer dar aulas"
			description="O primeiro passo é preencher esse formulário de inscrição"
			/>

			<main>
				<fieldset>
						<legend>Seus dados</legend>
						<Input name="name" label="Nome completo" />
						<Input name="avatar" label="URL do seu avatar" />
						<Input name="whatsapp" label="Whatsapp" />
						<TextArea name="bio" label="Biográfia"/>
				</fieldset>

				<fieldset>
						<legend>Sobre a aula</legend>
						<Input name="subject" label="Matéria" />
						<Input name="cost" label="Custo da sua aula por hora" />
				</fieldset>


				<footer>
					<p>
						<img src={warningIcon} alt="Atenção!"/>
						Importante! <br />
						Preencha todos os dados
					</p>
					<button type="button">
						Salvar cadastro
					</button>
				</footer>
			</main>
		</div>
	)
}


export default teacherForm;