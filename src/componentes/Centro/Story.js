export default function Story (props) {
    return (
        <div className="Story">
            <div className="imagem-perfil">
                <img src={props.caminhoDaImagem} alt="Imagem do Story" />
            </div>
            <div className="nome-usuario">
                <p>{props.nomeUsuario}</p>
            </div>
        </div>
    )
}