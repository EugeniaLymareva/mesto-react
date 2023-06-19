function Card(props) {
    function handleClick() {
        props.onCardClick({
            name: props.name,
            link: props.link,
        })
    }

    return (
        <li className="element">
            <img className="element__mask-group" src={props.link} alt="" onClick={handleClick} />
            <button className="element__trash" type="button" onClick={props.onDeleteCard}></button>
            <div className="element__info">
                <h2 className="element__title">{props.name}</h2>
                <div className="element__likes">
                    <button className="element__group" type="button"></button>
                    <h2 className="element__like-counter">{props.likes.length}</h2>
                </div>
            </div>
        </li>
    )
  }
  export default Card