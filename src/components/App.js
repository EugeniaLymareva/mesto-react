import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsDeleteCardPopupOpen(false)
    setIsImagePopupOpen(false)
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onDeleteCard={handleDeleteCardClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm 
          title="Редактировать профиль" 
          name="edit" 
          type="submit" 
          value="Сохранить" 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
        >
          <fieldset className="popup__input-container">
            <input type="text" name="name" className="popup__item" id="name-input" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__item-error name-input-error"></span>

            <input type="text" name="about" className="popup__item" id="about-input" placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="popup__item-error about-input-error"></span>
          </fieldset>
        </PopupWithForm>

        
        <PopupWithForm 
          name="add" 
          title="Новое место" 
          type="submit" 
          value="Создать" 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <input type="text" name="name" className="popup__item" id="name-picture-input" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__item-error name-picture-input-error"></span>

            <input type="url" name="link" className="popup__item" id="link-input" placeholder="Ссылка на картинку" required />
            <span className="popup__item-error link-input-error"></span>
          </fieldset>
        </PopupWithForm>

       
        <PopupWithForm 
          name="delete" 
          title="Вы уверены?" 
          type="button" 
          value="Да" 
          isOpen={isDeleteCardPopupOpen} 
          onClose={closeAllPopups}
        >
        </PopupWithForm>

        <PopupWithForm 
          name="update-avatar" 
          title="Обновить аватар" 
          type="submit" 
          value="Сохранить" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <input type="url" name="avatar" className="popup__item" id="link-avatar-input" placeholder="Ссылка на картинку" required />
            <span className="popup__item-error link-avatar-input-error"></span>
          </fieldset>
        </PopupWithForm>

        <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} ></ImagePopup>
      </div>   
    </div>
  )
}

export default App
