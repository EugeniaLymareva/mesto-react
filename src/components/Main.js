import React from 'react'
import api from '../utils/api'
import Card from './Card'


function Main(props) {
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo()
        .then(response => {
            setUserName(response.name)
            setUserDescription(response.about)
            setUserAvatar(response.avatar)
        })
        .catch((err) => {console.log(err)})

        api.getInitialCards()
        .then(response => {
            setCards(
                response.map((data) => ({
                    likes: data.likes,
                    link: data.link,
                    name: data.name,
                    cardId: data._id,
                }))
            )
        })
        .catch((err) => {console.log(err)})
    }, [])
  return (
      <main className="content">
          <section className="profile">
            <div className="profile__container">
              <a href="#" className="update-avatar" onClick={props.onEditAvatar} ><img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" /></a>
              <div className="profile__info">
                <div className="profile__user-name">
                  <h1 className="profile__name">{userName}</h1>
                  <button className="profile__edit-button" onClick={props.onEditProfile} type="button">
                  </button>
                </div>
                <p className="profile__occupation">{userDescription}</p>
              </div>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace}  type="button"></button>
          </section>

          <section className="elements">
            <ul className="elements__grid">
                {cards.map((card) => (
                    <Card 
                        key={card.cardId} 
                        likes={card.likes} 
                        name={card.name} 
                        link={card.link} 
                        onDeleteCard={props.onDeleteCard} 
                        onCardClick={props.onCardClick} 
                    />
                ))}
            </ul>
          </section> 
      </main>
  )
}

  
export default Main