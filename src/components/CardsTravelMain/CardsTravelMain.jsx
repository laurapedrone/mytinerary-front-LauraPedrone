import Card from 'react-bootstrap/Card';
import './cardsTravelMain.css'

const CardsTravelMain = ({ data }) => {
    const { city, imageUrl } = data
    return (
        <Card style={{ width: '15rem', margin: '1rem' }}>
            <Card.Img className='cardimage' variant="top" src={imageUrl} alt="City" />
            <Card.Body>
                <Card.Title>{city}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardsTravelMain
