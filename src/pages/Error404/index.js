import "./error404.css"
import { Link } from "react-router-dom"
import Image404 from "../../assets/notfound.svg"

const Error404 = () => {
  return (
    <div className="container-error">
      <img src={Image404} alt="Imagem de Not Found" />
      <h1>Página não encontrada!</h1>
      <Link to="/">
        Voltar para home
      </Link>
    </div>
  )
}

export default Error404