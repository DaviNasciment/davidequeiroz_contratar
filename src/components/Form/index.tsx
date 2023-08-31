import './form.css'

const Form = () => {
    return (
        <>
            <form className="form">
                <p>Selecione o dia e horário para o plantão.</p>

                <input type="text" placeholder="Nome do paciente" name="nome-do-paciente" />
                <select id="dia" name="dia" defaultValue="dia">
                    <option value="dia" disabled>Dia</option>
                    <option value="01" >01</option>
                    <option value="01" >02</option>
                    <option value="01" >03</option>
                </select>
                <select id="horario" name="horario" defaultValue="horario">
                    <option value="horario" disabled>Horário</option>
                    <option value="08:00" >08:00</option>
                    <option value="09:00" >09:00</option>
                    <option value="10:00" >10:00</option>
                </select>
                <button type="submit" className="botao-continuar">Continuar</button>
                <button className="botao-voltar">Voltar</button>
            </form>
        </>
    );
}

export default Form;