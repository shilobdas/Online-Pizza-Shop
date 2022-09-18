import React, { useState , useEffect} from 'react' 
import {useSelector, useDispatch} from 'react-redux';
import Error from "../components/Error"
import Loading from "../components/Loading"
import { deleteUser, getAllUsers } from '../actions/userActions';
export default function Userslist() {
    const dispatch = useDispatch()

    const usersstate = useSelector(state=>state.getAllUsersReducer)

    const { error, loading,users} = usersstate
    useEffect(() => {
    dispatch(getAllUsers())
  }, []);
  return (
    <div>
        <h2>Pizza's User List</h2>
        {loading && <Loading/>}
        {error && (<Error error="something went wrong"></Error>)}

        <table className='table table-bordered'>
            <thead className='thead table-dark'>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {users && users.map(user=>{
                return <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>
                        {user.email}
                    </td>
                    <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                  
                </tr>
            })} 
            </tbody>
        </table>
    </div>
  )
}
