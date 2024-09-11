import { useState } from "react"
import Card from "./Card"

const cardsData = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
    imagePath: '/images/pexels-chokniti-khongchum-1197604-3938022.jpg'
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
    imagePath: '/images/pexels-fitsumassefa-532786.jpg'
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
    imagePath: '/images/pexels-fr3nks-305566.jpg'
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description 4',
    imagePath: '/images/pexels-pixabay-236380.jpg'
  },
  {
    id: 5,
    title: 'title 5',
    description: 'description 5',
    imagePath: '/images/pexels-pixabay-263402.jpg'
  },
  {
    id: 6,
    title: 'title 6',
    description: 'description 6',
    imagePath: '/images/pexels-tomfisk-1692693.jpg'
  }
]

export default function App() {
  const [likes, setLikes] = useState(Array(6).fill(false))

  const handleHeartClick = (index) => {
    const newLikes = [...likes]
    newLikes[index] = !newLikes[index]
    setLikes(newLikes)
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardsData.map((card) => {
          return (
            <Card 
              id={card.id} 
              title={card.title} 
              description={card.description} 
              imgSrc={card.imagePath} 
              handleLike={handleHeartClick} 
              likes={likes}
            />
          )
        })}
      </div>
    </div>
  )
}