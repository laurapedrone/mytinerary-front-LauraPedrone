import React from 'react'
import Carousel from 'react-multi-carousel'
import CardsTravelMain from '../CardsTravelMain/CardsTravelMain'
import { cardsData, responsive } from "./carouselData"

const CarouselMain = () => {
    return (
        <>
            <section className='container-fluid' style={{ textAlign: 'center' }}>
                <h2>Popular MYTINERARIES!</h2>
                <Carousel showDots={true} responsive={responsive}>
                    {
                        cardsData.map(item => <CardsTravelMain key={item.id} data={item} />)
                    }
                </Carousel>
            </section>
        </>
    )
}

export default CarouselMain