import Card from 'react-bootstrap/Card';
import './cardsTravelMain.css'

const CardsTravelMain = ({ data }) => {
    const { city, imageUrl } = data
    return (
        <Card style={{ width: '16rem', margin: '1rem' }}>
            <Card.Img className='card-image' variant="top" src={imageUrl} alt="City" />
            <Card.Body>
                <Card.Title>{city}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardsTravelMain
