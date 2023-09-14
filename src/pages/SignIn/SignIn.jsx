import React, { useRef, useState } from 'react';
import { server } from "../../Services/cityService"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import GoogleLoginButtom from '../../components/GoogleLoginButtom/GoogleLoginButtom';


const SignIn = () => {

    const inputEmail = useRef()
    const inputPass = useRef()

    const handleSubmitData = async () => {
        const userData = {
            email: inputEmail.current.value,
            password: inputPass.current.value
        }
        const res = await server.get('/auth/in', userData)
        console.log(res)

    }

    const handleSubmitGoogle = async (data) => {
        const userData = { ...data }
        if (userData.terms) delete userData.terms
        const res = await server.get('/auth/in', userData)
        console.log(res)
    }

    return (
        <MDBContainer fluid>
            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://assets-cdn.kangaroo.com.br/images/cover/passagens-areas-cover-3.jpg)', height: '300px' }}></div>
            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-5 text-center'>
                    <h2 className="fw-bold mb-5">Sign in now</h2>
                    <p>New User?    <LinkContainer to="/signup"><a> Create an account</a></LinkContainer></p>
                    <form >
                        <MDBInput ref={inputEmail} wrapperClass='mb-4' label='Email' id='form1' type='email' />
                        <MDBInput ref={inputPass} wrapperClass='mb-4' label='Password' id='form1' type='password' />
                        <MDBBtn onClick={handleSubmitData} className='w-100 mb-4' size='md'>Continue</MDBBtn>
                        <div className="text-center">
                            <p>or sign up with:</p>
                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>
                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>
                            <GoogleLoginButtom fn={handleSubmitGoogle} />
                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default SignIn;