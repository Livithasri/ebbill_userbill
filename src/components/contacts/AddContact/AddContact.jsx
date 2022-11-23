import React,{ useState } from 'react';
import {Link, Navigate} from "react-router-dom";

import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddContact  = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [id1,setId]=useState('')
    const [unit,setUnit]=useState('')
    const [rate, setRate] = useState('')

    // const [productname,setProductname]=useState('')
    // const [description,setDescription]=useState('')
   
    const navigate=useNavigate()

    
    
    const HandleSubmit =async (e) =>{

    if (unit === 0) {
      alert('Please enter a valid unit')
    } else {
      

      // Logic for message

      if (unit<=100) {
        let  rate= 0
      setRate(rate.toFixed(1))
        // setMessage('You are underweight')
       } 
       else if (unit >=100 && unit <= 150) {
        let  rate1= 25 + ((unit-50) * 0.75);
        let sur_charge = rate1 * 0.20;
    let rate  = rate1 + sur_charge;
    setRate(rate.toFixed(1))

        //  setMessage('You are a healthy weight')
       } 
       else if (unit >150 && unit <= 250) {
        let  rate1=  100 + ((unit-150) * 1.20);
        let sur_charge = rate1 * 0.20;
    let rate  = rate1 + sur_charge;
    setRate(rate.toFixed(1))

        //  setMessage('You are a healthy weight')
       } 
       else  {
        let  rate1=  220 + ((unit-250) * 1.50);
        let sur_charge = rate1 * 0.20;
    let rate  = rate1 + sur_charge;
    setRate(rate.toFixed(1))

        //  setMessage('You are a healthy weight')
       } 
            
    }
        e.preventDefault();
        const {data}=await axios.post('http://localhost:8080/signup',{name,email,id1,unit,rate})
        // navigate('/contacts/list')
}
// let reload = () => {
//     window.location.reload()
//   }
    return (
        <>
        <section className='add-contact p-3'>
            <div className="container">

                <div className="row">
                    <div className='col-md-4'>

                    </div>
                     <div className="col-md-4">
                        <p className="h4 text-primary fw-bold" style={{fontFamily:'timesnew roman'}}>
                            Eb Bill
                        </p>
                        
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <form onSubmit={HandleSubmit}>
                               <div className="mb-2">
                               <label className="form-label fw-bold">Name</label> 
                                   <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                
                                <div className="mb-2">
                                <label className="form-label fw-bold">Email</label> 
                                   <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                
                                <div className="mb-2">
                                <label className="form-label fw-bold">Customer No</label> 
                                   <input type="text" className='form-control'  value={id1} onChange={e => setId(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">Units</label> 
                                   <input type="text" className='form-control'  value={unit} onChange={e => setUnit(e.target.value)}/>
                                </div>
                                
                                                               
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-danger'  value='Calculate'/>
                                   {/* <Link to={'/contacts/list'} className="btn btn-dark ms-2" >List</Link> */}
                                </div>   
                            </form>
                            <div className='center'>
          <h3>Your Bill is: Rs.{rate} </h3>
        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};     
export default AddContact ;