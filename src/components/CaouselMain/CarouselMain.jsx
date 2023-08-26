import React from 'react'
import Carousel from 'react-multi-carousel'
import CardsTravelMain from '../CardsTravelMain/CardsTravelMain'
import { cardsData, responsive } from "./carouselData"
import Container from '@mui/material/Container';

const CarouselMain = () => {
    return (
        <>
            <section className='container-carousel' style={{ textAlign: 'center' }}>
            <Container fixed>
                    <h2>Popular MYTINERARIES!</h2>
                    <Carousel showDots={true} responsive={responsive}>
                        {
                            cardsData.map(item => <CardsTravelMain key={item.id} data={item} />)
                        }
                    </Carousel>
                </Container>
            </section>
        </>
    )
}

export default CarouselMain