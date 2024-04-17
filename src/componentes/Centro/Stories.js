import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "Gerisvaldo",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Jailson Mendes",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Arthur",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Papai Noel",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Minions",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}