import Swal from 'sweetalert2'

export const getLinksSave = async (key) => {
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || []

  return linksSaves
}

export const saveLink = async (key, newLink) => {
  let linksStored = await getLinksSave(key)

  const hasLink = linksStored.some(link => link.id === newLink.id)

  if(hasLink) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Link já encurtado!',
      showConfirmButton: false,
      timer: 2000
    })

    return
  }

  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Link encurtado e salvo!',
    showConfirmButton: false,
    timer: 2000
  })
}

export const deleteLink = async (links, item) => {
  let myLinks = links.filter(items => items.id !== item.id)

  await localStorage.setItem("link-shortener", JSON.stringify(myLinks))
  
  return myLinks
}