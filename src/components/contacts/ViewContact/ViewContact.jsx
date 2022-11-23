import React, {useState,useEffect} from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import axios from "axios"
let ViewContact  = () => {
    let { contactId } = useParams();
    
    // const user = JSON.parse(contactId)
    // console.log(user)
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
                setDis(true)
            }
    },[user])
    
    return (
        <>
        <section className='view-contact-intro'>
            <div className="container">
               <div className="row">
                <div className="col">
                    
                </div>
               </div>
            </div>

        </section>
        {dis && 
        <section className='view-contact mt-3'>
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-md-6">
                    <ul className='list-group'>
                                        <li className='list-group-item list-group-item-action'>
                                            Name: <span className='fw-bold'>{user.name}</span>
                                        </li>
                                        {/* <li className='list-group-item list-group-item-action'>
                                            Department: <span className='fw-bold'>{user.dept}</span>
                                        </li> */}
                                        <li className='list-group-item list-group-item-action'>
                                            Email: <span className='fw-bold'>{user.email}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Customer No <span className='fw-bold'>{user.id1}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Units: <span className='fw-bold'>{user.unit}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Rate: <span className='fw-bold'>{user.rate}</span>
                                        </li>
                                                                        
                                    </ul>
                    </div>
                   

                </div>
                <br /><br />
                
            </div>
                
           

        </section>
}
        </>
    )
};
export default ViewContact ;