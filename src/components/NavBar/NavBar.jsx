import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../../Home'
let NavBar = () => {
    return (
        <>
        <nav className='navbar bg-dark navbar-expand-lg'>
            <div className="container"> 
            <div className="row"style={{margin:'auto'}}>
                <div className="col-md-12">
                <Link to={'/'} className="navbar-brand">
            <p className="h3 text-white fw-bold" style={{textAlign:"center",margin:'auto',fontFamily:"timesnew roman",fontSize:'40px'}}>
                    EB BILL CALCULATOR 
                    </p> </Link>
                </div>
                <div className="row"><div className="col-md-2"style={{marginLeft:'30%'}}>
                <Link to={'/contacts/add'} className="btn btn-success  text-light"  >New User</Link>
                </div>
               
                <div className="col-md-3">
                <Link to={'/contacts/list'} className="btn btn-primary md-1 text-light"  >Payment history</Link>
                </div></div>
                
            </div>
            
                
                   
                   
                    
             </div>
             
             
             
        </nav>
        
        </>
    )
};
export default NavBar;