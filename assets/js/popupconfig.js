const popup = document.querySelector("button")
const modal = document.querySelector("dialog")
const popupexit = document.querySelector("dialog button")


popup.onclick = function (){
    modal.showModal()
    
}


popupexit.onclick = function (){
    modal.close()
}