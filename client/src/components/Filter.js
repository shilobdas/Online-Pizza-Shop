import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions'; //searching process

export default function Filter() {
    const dispatch = useDispatch()
    const [searchkey , setsearchkey] = useState('')
    const [category , setcategory] = useState('all')
  return (
    <div className='container'>
        <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
    
        <div className="form-outline col-md-3 w-20">
            <input 
            onChange={(e)=>{setsearchkey(e.target.value)}}
            value={searchkey} type="search" id="form1" class="form-control w-20 mt-1" placeholder='search your pizzas'/>
        </div>

            
            <div className='col-md-3 w-20'>
            <select className='form-control w-20 mt-1' value={category} onChange={(e)=>setcategory(e.target.value)}>
                <option value='all'>All</option>
                <option value='veg'>Veg</option>
                <option value='nonveg'>Non-Veg</option>
            </select>
            </div>
            <div className='col-md-3 w-20'>
                <button className='btn w-100 mt-1' onClick={()=>{dispatch(filterPizzas(searchkey , category))}}>FILTER</button>
            </div>
        </div>
    </div>
  )
}
