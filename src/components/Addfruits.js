import axios from 'axios';
import React, { useState } from 'react'
import api from './api';
import { useNavigate } from 'react-router-dom';

function Addfruits() {

  const[fruitname,setfruitname]=useState();
  const[img,setimg]=useState(" ");
  const[description,setdescription]=useState();
  const[caloriesper100g,setcaloriesper100g]=useState(0);
  const[vitamincper100g,setvitamincper100g]=useState(0);
  const[fiberper100g,setfiberper100g]=useState(0);
  const[fruitFamily,setfruitFamily]=useState();
  const[taste,settaste]=useState();
  const navigate=useNavigate()

const SaveFruits=(e)=>
{
  e.preventDefault()
  const values={fruitname,description,caloriesper100g,vitamincper100g,fiberper100g,fruitFamily,taste}
  axios.post(api.addfruits,values)
  .then((Response)=>{
    alert("Data added");
    navigate('../display',{replace:true})
    
  })
  .catch((error)=>console.error("Error while inserting data",error))
}

  return (
    <div className='Container' style={{width: '50%',marginLeft: '297px',paddingTop :'54px',color : 'green',height:'400px'}}>
        <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">FruitName</label>
    <input type="text" className="form-control" id="fruitname" onChange={(e)=>setfruitname(e.target.value)}/>
  </div>
  <div className="col-md-6">
  <label for="formFileSm" className="form-label">Upload Img</label>
  <input className="form-control form-control-sm" id="file" type="file" onChange={(e)=>setimg(e.target.value)}/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Discription</label>
    <input type="text" className="form-control" id="description" onChange={(e)=>setdescription(e.target.value)}/>
  </div>
  
  <div className="col-md-2">
    
  </div>  
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Calories" id="caloriesper100g" onChange={(e)=>setcaloriesper100g(e.target.value)}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Vitamin" id="vitamincper100g" onChange={(e)=>setvitamincper100g(e.target.value)}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Fiber" id="fiberper100g" onChange={(e)=>setfiberper100g(e.target.value)}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Family" id="fruitFamily" onChange={(e)=>setfruitFamily(e.target.value)}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Taste" id="taste" onChange={(e)=>settaste(e.target.value)}/>
    </div>
  </div>
        <div className="row my-4">
          <div className="col ">
            <button type="submit" className="btn btn-success mx-2" onClick={SaveFruits}>Submit</button>
            <button type="submit" className="btn btn-danger">Cancel</button>
          </div>

  </div>
  

</form>
    </div>
  )
}

export default Addfruits