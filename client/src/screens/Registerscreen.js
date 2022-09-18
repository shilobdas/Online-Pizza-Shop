import React , { useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { registerUser } from "../actions/userActions";
import Error from "../components/Error"; 
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function RegisterScreen() {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const registerState = useSelector(state =>state.registerUserReducer) 
    const {error, loading, success} = registerState 
    const dispatch = useDispatch()
    function register () {

        if (password!=cpassword) {
            alert("password doesn't match")
        }else {
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded'>

            {loading && (<Loading></Loading>)}
            {success && (<Success success='User Register Successfully'></Success>)}
            {error && (<Error error='Email already registered'></Error>)}




                <h2 className='text-center m-2' style={{fontSize:'30px'}}>Register</h2>
                <div>
                    <input required type="text" placeholder="enter your user name here" className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                    <input required type="text" placeholder="enter your email here" className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input type="password" placeholder="enter your password here" className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <input type="password" placeholder="enter your confirm password here" className='form-control'value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}></input>
                    <button onClick={register} className='btn mt-3 mb-3'>REGISTER</button>
                    <br></br>
                   <p>Already have account? <a style={{color:'black'}} href='/login'>Click Here</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
