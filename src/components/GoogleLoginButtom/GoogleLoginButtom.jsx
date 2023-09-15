import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButtom = ({fn}) => {
    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            console.log(tokenResponse)

            const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: "Bearer " + tokenResponse.access_token
                }
            })
            fn({
                email: data.email,
                password: "Admin123*",
                firstName: data.given_name,
                lastName: data.family_name,
                photoURL: data.picture,
                terms:true
            })
            console.log(data)
        }
      
    })
    return (
        <MDBBtn onClick={() => login()} tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm" />
        </MDBBtn>
    )
}

export default GoogleLoginButtom
