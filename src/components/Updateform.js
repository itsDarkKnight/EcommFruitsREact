import api from './api';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Updateform() {
    
    const { id } = useParams();
    const[fruitname,setfruitname]=useState('');
  const[img,setimg]=useState(" ");
  const[description,setdescription]=useState('');
  const[caloriesper100g,setcaloriesper100g]=useState(0);
  const[vitamincper100g,setvitamincper100g]=useState(0);
  const[fiberper100g,setfiberper100g]=useState(0);
  const[fruitFamily,setfruitFamily]=useState('');
  const[taste,settaste]=useState('');
  const[allfruitsdata,setallfruitsdata]=useState({
    vitamincper100g :''
})
const navigate=useNavigate()

  useEffect(()=>{
    try
    {
        
        const Response=axios.get(api.getById+id)
        axios.get(api.getById+id)
        .then(Response=>{
            setfruitname(Response.data.fruitname)
            setdescription(Response.data.description)
            setcaloriesper100g(Response.data.caloriesper100g)
            setvitamincper100g(Response.data.vitamincper100g)
            setfiberper100g(Response.data.fiberper100g)
            settaste(Response.data.taste)
            setfruitFamily(Response.data.fruitFamily)
        })

    }
    catch(error)
    {
        console.log("Error while fertching data by Id",error)
    }
    
  },[id])

const Updatedata=(e)=>
{   
    e.preventDefault();
    const fruitval={fruitname,fruitFamily,taste,caloriesper100g,fiberper100g,vitamincper100g,description}
    axios.put(api.updatebyId+id,fruitval)
    navigate(`/display`);
    window.location.reload();
}

  return (
    <div className='Container' style={{width: '50%',marginLeft: '297px',paddingTop :'54px',color : 'green',height:'400px'}}>
       <h2>Edit data for : {fruitname} </h2>
        <form className="row g-3">
  <div className="col-md-6">
    <label htmlfor="inputEmail4" className="form-label">FruitName</label>
    <input type="text" className="form-control" id="fruitname" value={fruitname} onChange={(e)=>setfruitname(e.target.value)}/>
  </div>
  <div className="col-md-6">
  <label htmlfor="formFileSm" className="form-label">Upload Img</label>
  <input className="form-control form-control-sm" id="file" type="file" />
  </div>
  <div className="col-12">
    <label htmlfor="inputAddress" className="form-label">Discription</label>
    <input type="text" className="form-control" value={description} id="description" onChange={(e)=>setdescription(e.target.value)}/>
  </div>
  <div className="col-md-2">
    
  </div>  
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Calories" id="caloriesper100g" onChange={(e)=>setcaloriesper100g(e.target.value)} value={caloriesper100g} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Vitamin" id="vitamincper100g" onChange={(e)=>setvitamincper100g(e.target.value)} value={vitamincper100g}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Fiber" id="fiberper100g"  onChange={(e)=>setfiberper100g(e.target.value)} value={fiberper100g} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Family" id="fruitFamily" onChange={(e)=>setfruitFamily(e.target.value)} value={fruitFamily}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Taste" id="taste" onChange={(e)=>settaste(e.target.value)} value={taste}/>
    </div>
  </div>
        <div className="row my-4">
          <div className="col ">
            <button type="submit" className="btn btn-success mx-2" onClick={Updatedata}>Update</button>
            <button type="submit" className="btn btn-danger">Cancel</button>
          </div>

  </div>
  

</form>
    </div>
  )
}

export default Updateform