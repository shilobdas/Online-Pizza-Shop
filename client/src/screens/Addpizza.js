import React, {useState, useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'  //addpizza
import { addPizza } from '../actions/pizzaActions' //addpizza
import Loading from '../components/Loading';
import Pizza from '../components/Pizza';
import Error from '../components/Error';
import Filter from '../components/Filter';
import Success from '../components/Success';

export default function Addpizza() {
  const[name,setname] = useState('')
  const[smallprice,setsmallprice] = useState()
  const[mediumprice,setmediumprice] = useState()
  const[largeprice,setlargeprice] = useState()
  const[image,setimage]= useState('')
  const[description,setdescription]= useState('')
  const[category,setcategory]= useState('')

  const dispatch = useDispatch()  

  //add pizza logic
  const addpizzastate = useSelector(state=>state.addPizzaReducer)
  const {success, error, loading} = addpizzastate

  function formHandler(e) {
    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices:{
        small : smallprice,
        medium : mediumprice,
        large : largeprice
      }
    }
    console.log(pizza);
    dispatch(addPizza(pizza));
  }
  
  return (
    <div>
        <div className='text-start'>
          <h1>Add Pizza</h1>


          {loading && (<Loading></Loading>)}
            {success && (<Success success='New Pizza Added Successfully'></Success>)}
            {error && (<Error error='Something went wrong'></Error>)}

          <form onSubmit={formHandler}>
            <input className='form-control' type="text" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            <input className='form-control' type="text" placeholder='small varient price' value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}></input>
            <input className='form-control' type="text" placeholder='medium varient price' value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}></input>
            <input className='form-control' type="text" placeholder='large varient price' value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}></input>
            <input className='form-control' type="text" placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
            <input className='form-control' type="text" placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value)}}></input>
            <input className='form-control' type="text" placeholder='image url' value={image} onChange={(e)=>{setimage(e.target.value)}}></input>

          
            <button className='btn mt-3' type='submit'>Add Pizza</button>
          </form>
        </div>
    </div>
  )
}
