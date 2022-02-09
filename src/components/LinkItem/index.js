import "./link-item.css"
import { FiX, FiClipboard } from "react-icons/fi"
import toast, { Toaster } from 'react-hot-toast'

const LinkItem = ({ closeModal, content }) => {
  const copyLink = async () => {
    await navigator.clipboard.writeText(content.link)

    toast.success("Link copiado!", {
      position: "bottom-center"
    })
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>

        <button onClick={closeModal}>
          <FiX size={28}
          color="#000" />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>

      <Toaster />
    </div>
  )
}

export default LinkItem