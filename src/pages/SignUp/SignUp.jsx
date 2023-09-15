import React, { useState } from 'react';
import { server } from "../../Services/cityService"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode';
import GoogleLoginButtom from '../../components/GoogleLoginButtom/GoogleLoginButtom'
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/authAction';


const SignUp = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        photoURL: "https://th.bing.com/th/id/OIP.kLmwq2m2gZFoelWigYk90wHaHa?pid=ImgDet&rs=1",
        country: "Argentina",
        verified: true,
        terms: false
    })

    const dispatch = useDispatch()

    const handleChangeData = (e) => {
        setData(prevState => {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } :
                { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmitData = async (e) => {
        e.preventDefault()
        const userData = { ...data }
        if (userData.terms) {
            delete userData.terms
            const res = await server.post('/auth/up', userData)
            console.log(res)
            dispatch(signup(res.data))
        }
    }

    const handleSubmitGoogle = async (data) => {
        const userData = { ...data }
        if (userData.terms) {
            delete userData.terms
            const res = await server.post('/auth/up', userData)
            console.log(res)
            dispatch(signup(res.data))
        }
    }

    return (
        <MDBContainer fluid>
            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://assets-cdn.kangaroo.com.br/images/cover/passagens-areas-cover-3.jpg)', height: '300px' }}></div>
            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-5 text-center'>
                    <h2 className="fw-bold mb-5">Sign up now</h2>
                    <p>Already have an account?    <LinkContainer to="/signin"><a> Sign In</a></LinkContainer></p>
                    <form onSubmit={handleSubmitData}>
                        <MDBRow>
                            <MDBCol col='6'>
                                <MDBInput name='firstName' onChange={handleChangeData} value={data.firstName} wrapperClass='mb-4' label='First name' id='form1' type='text' />
                            </MDBCol>
                            <MDBCol col='6'>
                                <MDBInput name='lastName' onChange={handleChangeData} value={data.lastName} wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput name='email' onChange={handleChangeData} value={data.email} wrapperClass='mb-4' label='Email' id='form1' type='email' />
                        <MDBInput name='password' onChange={handleChangeData} value={data.password} wrapperClass='mb-4' label='Password' id='form1' type='password' />
                        <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='terms' onChange={handleChangeData} value={data.terms} id='flexCheckDefault' label='Accept the Terms of Use and Privacy Policy.' />
                        </div>
                        <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
                        <div className="text-center">
                            <p>or sign up with:</p>
                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            {/* <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                        const infoUser = jwtDecode(credentialResponse.credential)
                                        console.log(infoUser)

                                        handleSubmitGoogle({
                                            email: infoUser.email,
                                            password: "Admin123*",
                                            firstName: infoUser.given_name,
                                            lastName: infoUser.family_name,
                                            photoURL: "https://th.bing.com/th/id/OIP.kLmwq2m2gZFoelWigYk90wHaHa?pid=ImgDet&rs=1",
                                            country: "Argentina",
                                            verified: true,
                                            terms: true
                                        })

                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    useOneTap
                                />       */}

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

export default SignUp;