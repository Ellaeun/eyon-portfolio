import React from 'react';
import Login from '../Assets/Login.png'; 
import Registration from '../Assets/Registration.png';
import Admin from '../Assets/Admin.png'
import '../Css/CustomersConnect.css'; 

function CustomersConnect() {
  return (
    <div className="customers-connect">
      <h2>CustomersConnect Project</h2>
      <p>This Java desktop app manages customer data using Java + MySQL.</p>

      <div className="image-gallery">
        <img src={Login} alt="Login Page" />
        <img src={Registration} alt="Rgistration Page" />
        <img src={Admin} alt="Admin Dashboard" />
      </div>
      
    </div>
  );
}

export default CustomersConnect;
