import { useState } from 'react';
import './form.css'

const Form = () => {
    const [values, setValues] = useState({
        nomeDoPaciente: '',
        dia: '',
        horario: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)

        // Faça alguma coisa com os dados
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <p>Selecione o dia e horário para o plantão.</p>

                <input onChange={handleInputChange} type="text" placeholder="Nome do paciente" name="nomeDoPaciente" />
                <select onChange={handleSelectChange} id="dia" name="dia" defaultValue="dia">
                    <option value="dia" disabled>Dia</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                </select>
                <select onChange={handleSelectChange} id="horario" name="horario" defaultValue="horario">
                    <option value="horario" disabled>Horário</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                </select>
                <button type="submit" className="botao-continuar">Continuar</button>
                <button className="botao-voltar">Voltar</button>
            </form>
        </>
    );
}

export default Form;