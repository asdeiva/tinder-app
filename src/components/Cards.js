import React from 'react'
import TinderCard from 'react-tinder-card';
import './Cards.css'

function TinderCards() {

  // Hooks are functions that can be used in React components. 
  const [cats] = React.useState([
    {
      name: 'Cat10',
      url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'
    },
    {
      name: 'Cat9',
      url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat8',
      url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat7',
      url: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat6',
      url: 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat5',
      url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat4',
      url: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat3',
      url: 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat2',
      url: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Cat1',
      url: 'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

  ]);

  return (
    <div className='card-container'>

      {
        cats.map( cats => (
          <TinderCard
            className="swipe"
            key={cats.name}
            preventSwipe={['up', 'down']}
          >
              <div
                style={ { backgroundImage: `url(${cats.url})` } }
                className='card'
              >
                <h2>{cats.name}</h2>
              </div>
          </TinderCard>
        ))
      }


    </div>

  )
}

export default TinderCards