import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from './api'
import Alert from './Alert';
import { Link, useNavigate } from 'react-router-dom';

function Displayfruits() {
    const[fruitsval,setfruitsval]=useState([]);
    const[flag,setFlag]=useState(false);
    const[name,setfruitname]=useState();
    const navigate=useNavigate()
useEffect(()=>{
    axios.get(api.getallfruits)
    .then(Response=>{
        setfruitsval(Response.data)
        console.log(Response.data)
    })
    .catch(error=>{console.error('Error while fetching all data',error)})
},[])

  const DeleteFruits=async(id,name)=>
  {
    axios.delete(api.deletefruitsById+id)
    .then(Response=>{
      const updatestate= fruitsval.filter(fruit=>fruit.fruitid!==id)
      setfruitsval(updatestate)
      setFlag(true)
      setfruitname(name)
      
    })
    .catch(error=>{console.error('Error while delete  data',error)
      setFlag(false)
  })
  }
  const Updatefruits=(id)=>
  {
    navigate(`/update/${id}`);

  }
  
  return (
    <div className='container' style={{paddingTop:'65px'}}>
      {flag && <Alert msg={name}/>}

        {fruitsval.map((values,index)=>(
            
            
            <div class="card mb-3 my-2" style={{maxwidth: '540px',background:'darkgray',borderRadius:'20px',height:'100px',width:'85%'}}>
  <div class="row g-0">
    <div class="col-md-2">
      <img src={`./images/fruit_img/${values.fruitname}.png`} className="img-fluid rounded-start" alt="..." style={{height:'70px',margin:'10px'}}/>
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title" style={{fontSize:'15px'}}>{values.fruitname}</h5>
        <p class="card-text" style={{fontSize:'13px',marginBottom: '2px',fontWeight:'500'}}>{values.description}</p>
       
        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group" style={{height:'26px'}}>
    <button type="button" class="btn btn-outline-secondary" style={{fontSize:'11px',color:'green',fontWeight:'500'}}>Calories : {values.caloriesper100g}</button>
    <button type="button" class="btn btn-outline-secondary" style={{fontSize:'11px',color:'green',fontWeight:'500'}}>Vitamin : {values.vitamincper100g}</button>
    <button type="button" class="btn btn-outline-secondary" style={{fontSize:'11px',color:'green',fontWeight:'500'}}>Fiber : {values.fiberper100g}</button>
    <button type="button" class="btn btn-outline-secondary" style={{fontSize:'11px',color:'green',fontWeight:'500'}}>Family : {values.fruitFamily}</button>
    <button type="button" class="btn btn-outline-secondary" style={{fontSize:'11px',color:'green',fontWeight:'500'}}>Taste : {values.taste}</button>
  </div>
  <div class="input-group">
  <div class="btn-group" role="group" aria-label="First group" style={{height:'26px'}}>
    <button type="button" class="btn btn-success mx-2" value={values.fruitid} onClick={()=>Updatefruits(values.fruitid)} style={{fontSize:'11px',fontWeight:'500'}}>Edit</button>
    <button type="button" className="btn btn-danger" style={{fontSize:'11px',fontWeight:'500'}} value={values.fruitid} onClick={()=>DeleteFruits(values.fruitid,values.fruitname)}>Delete</button>
  </div>
     </div>
</div>
      </div>
    </div>
  </div>
</div>
        ))}
        
    </div>
  )
}

export default Displayfruits