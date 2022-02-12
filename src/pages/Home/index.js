import { useState } from "react"
import "./home.css"
import { FiLink } from "react-icons/fi"
import ImageLogo from "../../assets/logo.svg"

import Swal from 'sweetalert2'

import Menu from "../../components/Menu"
import LinkItem from "../../components/LinkItem"

import api from "../../services/api"
import { saveLink } from "../../services/storeLinks"

const Home = () => {
  const [link, setLink] = useState("")
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleShortLink = async () => {
    setLoading(true)
    try {
      const { data: dataLink } = await api.post("/shorten", {
        long_url: link
      })

      setData(dataLink)
      setShowModal(true)

      saveLink("link-shortener", dataLink)

      setLink("")
      setLoading(false)
    } catch {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor, digite uma URL válida!',
        showConfirmButton: false,
        timer: 2000
      })

      setLink("")
      setLoading(false)
    }
  }

  const pressEnter = (event) => {
    event.key === "Enter" && handleShortLink()
  }

  return (
    <div className="container-home">
      <Menu />
      <div className="logo">
        <div className="div-img"><img src={ImageLogo} alt="Logo" /></div>
        <h1>Encurtador de Link</h1>
        <span>&#8595; Cole seu link para encurtar &#8595;</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(event) => setLink(event.target.value)}
            onKeyPress={pressEnter}
          />
        </div>

        <button onClick={handleShortLink}>
          {loading && <div className="loading"></div>}
          {!loading && <span>Encurtar Link</span>}
        </button>
      </div>

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}

export default Home