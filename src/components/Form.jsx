import React, { useState } from 'react'
import Map from './Map';

const Form = () => {
    const [formData, setFormData] = useState({});

    const[users, setUsers] = useState([]);
    


    const handleOnChange=(elem)=>{
       const {type, name, value, checked}=elem.target
        if(type==="checkbox" ){
            setFormData({...formData, [name]:checked})
        }
        else {
               setFormData({...formData, [name]:value})
        }
        
      }
    

   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData]);
        setFormData("");
       
    }

    const  handleDelete = (key) =>{
     
        var updateUsers= users.filter(elem => elem.email !== key)
      //  console.log(updateUsers);
        setUsers(updateUsers);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={formData.email} placeholder='Enter Email' onChange={handleOnChange}/><br/>
            <input type="number" name="age" value={formData.age} placeholder='Enter Age' onChange={handleOnChange} /><br/>
            <input type="text" name="address" value={formData.address} placeholder='Enter Address'onChange={handleOnChange} /><br/>
            <select name="department" value={formData.department} onChange={handleOnChange} >
                <option value="FSW">FSW</option>
                <option value="FSW">Backened</option>
                <option value="FSW">Frontend</option>
            </select><br/>
            <input type="number" name="salary" value={formData.salary}  placeholder='Enter Salary in Lakhs' onChange={handleOnChange}/><br/>
            <input type="checkbox"  name="maritalStatus" value={formData.checked}  onChange={handleOnChange}/><span>Marital State</span><br/>
            <input type="submit" />
        </form >

        <div style={{display:"flex", width:"50%", heigth:"50px", margin:"auto", border:"blue solid 1px"}}>
            {/* <h1>{formData.maritalStatus}</h1>
           <Map value={users}/> */}
             <table>
              
              <tr>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Marital Status</th>
                  
              </tr>
      
                  {users.map((elem) => (
                    <tr key={elem.email}>
                        <td>{elem.email}</td>
                        <td>{elem.age}</td>
                        <td>{elem.address}</td>
                        <td>{elem.department}</td>
                        <td>{elem.salary}</td>
                        <td>{elem.maritalStatus ? "Yes" : "No"}</td>
                        <button onClick={() => handleDelete(elem.email)} > delete</button>
                    </tr> 
                   
                      ))}   
                   
                   
                   </table>      
              
            
        </div>
    </div>
  )
}

export default Form