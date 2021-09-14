import "./styles.css"

function Card(obj){
    return(
        <div className="Card">
            <h1>Nome: {obj.name}</h1>
            <h2>Senha: {obj.password}</h2>
            <h3>Email: {obj.email}</h3>
            <p>Endereço: {obj.adress}</p>
            <p>Telefone: {obj.cellphone}</p>
            <p>Idade: {obj.age}</p>
        </div>
    )
}

export default Card