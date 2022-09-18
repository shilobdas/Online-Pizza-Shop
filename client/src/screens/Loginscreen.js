import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";


export default function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Loginstate = useSelector(state => state.loginUserReducer)
  const { loading, error } = Loginstate
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])


  function login() {
    const user = { email, password }
    dispatch(loginUser(user))
  }


  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className='text-center' style={{ fontSize: '30px ' }}>Login</h2>


          {loading && (<Loading></Loading>)}
          {error && (<Error error='Invalid Credentials'></Error>)}


          <div>
            <input type="text" placeholder="enter your email here" className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }}></input>
            <input type="password" placeholder="enter your password here" className='form-control'
              value={password} required onChange={(e) => { setpassword(e.target.value) }}></input>
            <button onClick={login} type="submit" className='btn mt-3 mb-3  '>Login</button>
            <br></br>
            <p><a style={{ color: 'black' }} href='/register' className='mt-2 row justify-content-center mt-5'>Click Here To Register</a>   </p>
          </div>
        </div>
      </div>
    </div>

  )
}
