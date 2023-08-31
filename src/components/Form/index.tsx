import { useState } from 'react';
import './form.css'

const navbarSelects = [
    { id: "dia", name: "dia", defaultValue: "Dia", option: { value: ["01", "02", "03"], disabled: "Dia" } },
    { id: "horario", name: "horario", defaultValue: "Horário", option: { value: ["08:00", "09:00", "10:00"], disabled: "Horário" } }
]

const Form = () => {
    const [values, setValues] = useState({});

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
                {navbarSelects.map(select => (
                    <select
                        key={select.id}
                        onChange={handleSelectChange}
                        id={select.id}
                        name={select.name}
                        defaultValue={select.defaultValue}
                    >
                        <option value={select.defaultValue} disabled>{select.option.disabled}</option>
                        {select.option.value.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                ))}
                <button type="submit" className="botao-continuar">Continuar</button>
                <button className="botao-voltar">Voltar</button>
            </form>
        </>
    );
}

export default Form;