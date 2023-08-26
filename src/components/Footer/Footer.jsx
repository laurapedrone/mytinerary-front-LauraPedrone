import './footer.css'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4 flex-column'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='https://es-la.facebook.com' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='https://ar.linkedin.com' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                    </section>

                    <section>
                        <MDBRow>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <div style={{display: 'flex'}}>
                                    <img
                                        alt=""
                                        src="/public/Assets/images/travel.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{'  '}
                                    <h5 className='text-uppercase'> MyTinerary</h5>
                                </div>
                                <div className='list-unstyled mb-0'>
                                    <LinkContainer to="/">
                                        <Nav.Link>
                                            Home
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/cities">
                                        <Nav.Link>
                                            Cities
                                        </Nav.Link>
                                    </LinkContainer>
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    MindHub AP MERN 08 - Laura Pedrone
                </div>
            </MDBFooter>
        </>
    )
}

export default Footer