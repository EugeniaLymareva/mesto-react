function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={`popup-${props.name}`} >
      <div className="popup__container">
        <button className="popup__close" onClick={props.onClose} type="button"></button>
        <form className="popup__form" name={`${props.name}-form`} noValidate>
            <h2 className="popup__title">{props.title}</h2>
            
                {props.children}
            
            <input type={props.type} value={props.value} className="popup__submit-button" />
        </form>
        </div>
    </div>
  )
}
export default PopupWithForm

