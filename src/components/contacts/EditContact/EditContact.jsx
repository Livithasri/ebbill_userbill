import React,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const EditContact  = () => {
        const navigate = useNavigate()
         let { contactId} = useParams()
        // const user = JSON.parse(contactId)
        const [user,setUsers]=useState(null)
        const [dis,setDis]=useState(false)
        const getData = async()=>{
            const {data}=await axios.get(`http://localhost:8080/view/${contactId}`)
            console.log(data)
            setUsers(data)
        }
        useEffect(()=>{
            getData()
        },[])
        useEffect(()=>{
                if(user!=null){
                    setName(user.name)
                    setEmail(user.email)
                    setId(user.id1)
                    setUnit(user.unit)
                    setRate(user.rate)
                    setDis(true)
                }
        },[user])
    console.log(user)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [id1,setId]=useState('')
    const [unit,setUnit]=useState('')
    const [rate,setRate]=useState('')


    

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post(`http://localhost:8080/edit/${user._id}`,{name,email,id1,unit,rate})
        navigate('/contacts/list')
}
   
    return (
        
        <>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">
                            Update Personal details
                        </p>
                        
                    </div>
                </div>
                {dis && 
                <div className="row align-items-center">
                    <div className="col-md-4">
                            <form>
                               <div className="mb-2">
                               <label className="form-label text-success fw-bold h5">Name</label> 
                                   <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">Email</label>
                                   <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                                </div>                                                                    
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-primary' value='Update' onClick={handleSubmit}/>
                                   {/* <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link> */}
                               
                                </div>   
                            </form>
                    </div>
                    
                </div>
}
            </div>
        </section>
        </>
    )
};
export default EditContact ;