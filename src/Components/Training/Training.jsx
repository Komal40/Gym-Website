import React from 'react'
import Card from './Card/Card'
import './Training.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Training() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }


  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      heading: "Bodybuilding",
    },
    {
      id: 2,
      image: "https://c4.wallpaperflare.com/wallpaper/420/477/268/trees-palm-trees-girls-yoga-wallpaper-preview.jpg",
      heading: "Yoga",
    },
    {
      id: 3,
      image: "https://c4.wallpaperflare.com/wallpaper/1017/46/488/group-fitness-class-located-step-wallpaper-preview.jpg",
      heading: "Aerobic",
    },
    {
      id: 4,
      image: "https://c1.wallpaperflare.com/preview/327/472/938/stretch-exercise-leggings-woman.jpg",
      heading: "Flexiblity",
    },
    {
      id: 5,
      image: "https://c1.wallpaperflare.com/preview/323/639/674/zumba-dance-gymnastics.jpg",
      heading: "Zumba Dance",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      heading: "Weight Liffting",
    },
    {
      id: 7,
      image: "https://c1.wallpaperflare.com/preview/323/639/674/zumba-dance-gymnastics.jpg",
      heading: "Zumba Dance",
    }
  ]


  return (
    <div id='training'>
      <h1 className='training_heading'>Training Program</h1>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {
          cards.map((card) => (
            <Card key={card.id} image={card.image} heading={card.heading} />
          ))
        }
      </Carousel>
    </div>
  )
}
