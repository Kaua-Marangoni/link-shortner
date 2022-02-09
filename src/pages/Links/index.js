import { useState, useEffect } from "react"
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi"
import "./links.css"
import { Link } from "react-router-dom"

import { getLinksSave, deleteLink } from "../../services/storeLinks"
import LinkItem from "../../components/LinkItem"

import Swal from 'sweetalert2'

const Links = () => {
  const [myLinks, setMyLinks] = useState([])

  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const [loading, setLoading] = useState(false)

  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    const fetchLinks = async () => {
      const result = await getLinksSave("link-shortener")

      if (result.length === 0) {
        setEmptyList(true)
      }

      setMyLinks(result)
    }

    fetchLinks()
  }, [])

  const handleOpenLink = (link) => {
    setData(link)
    setShowModal(true)
  }

  const handleDelete = async (item) => {

    Swal.fire({
      title: 'Você quer deletar esse link?',
      text: item.long_url,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true)
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Deletado!',
          showConfirmButton: false,
          timer: 2000
        })

        const result = await deleteLink(myLinks, item)

        if (result.length === 0) {
          setEmptyList(true)
        }
        setMyLinks(result)

        setLoading(false)
      }
    })
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="links-item">
          <h2 className="empty-text">Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map(link => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>

          <button className="link-delete" onClick={() => handleDelete(link)}>
            {loading ? (
              <div className="loading-delete"></div>
            )
              :
              (
                <FiTrash size={24} color="#ff5454" />
              )
            }
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}

    </div>
  )
}

export default Links