import React from 'react';
import './register.css'

const Register = () => {
  return (
    <>
        <div class="final__register-wrapper">
            <div class="final__register-block">
                <h3 class="final__register-title">Create an account</h3>
                <p>Quickly &amp; easily create an account using the form below.</p>
                <form action="UI">
                  <input type="text" placeholder="Enter your Name" required/>
                  <input type="email" placeholder="Enter your  E-mail" required />
                  <input type="submit" value="Create my account"/>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register
