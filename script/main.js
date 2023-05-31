let popup = document.getElementById('popup_menu')
let modalCity = document.getElementById('modal-city')
function openPopupMenu() {
	popup.classList.add('open_popup_menu')
	
}

function closePopupMenu() {
	popup.classList.remove('open_popup_menu')
}

function openModalCity() {
	modalCity.classList.add('open_modal_city')
}

function closeModalCity() {
	modalCity.classList.remove('open_modal_city')
}
