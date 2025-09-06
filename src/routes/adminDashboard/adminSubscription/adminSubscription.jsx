import React, { useState , useEffect} from "react";
import axios from "axios";
import "./adminSubscription.scss"



const AdminSubscription = () => {
    const [users , setUsers] = useState([])
    const [form , setForm ] = useState({
        userId : "",
        planName : "",
        amount : "",
        profitPercent : "",
        duration : "",
        status : "",
        startDate : "",
        endDate : ""
    }

    )

    const [subscriptionMessage , setSubscriptionMessage] = useState("")

    useEffect(() => {

      const fetchUsers = async () => {

      try {
        const res = await axios.get("https://vixafx-api-1.onrender.com/api/allUsers/users"); 
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();

    } , [])

    const handleChange = (e) => {
        setForm({...form , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          
          const res = await axios.post("https://vixafx-api-1.onrender.com/api/subscribe/create", form);
             setSubscriptionMessage("✅ Subscription successful");

        } catch (err) {
            setSubscriptionMessage("❌ Subscription failed. Please try again.");
    }

    }
    

    return(
        <div className="adminSubscription">
          <form onSubmit={handleSubmit}>
            <h1>Manage Subscriptions</h1>
              <div className="field">
                <select name="userId" value={form.userId} onChange={handleChange}>
                    <option value="">Select user </option>
                        {users.map((user) => {
                           return  <option key={user._id} value={user._id}>{user.userName} {user.email} </option>
                        })}
                </select>
              </div>
              <div className="names">
                <div className="name">
                    <label>Plan </label>
                  <input name="planName" type="text" value={form.planName} onChange={handleChange}/>
                </div>
                <div className="name">
                    <label>Amount</label>
                <input type="Number" name="amount" value={form.amount} onChange={handleChange}/>

                </div>
              </div>
              <div className="names">
                <div className="name">
                  <label >Profit Percent </label>
                  <input type="Number" name="profitPercent" value={form.profitPercent} onChange={handleChange}/>
                </div>
                <div className="name">
                    <label>Duration </label>
                     <input type="Number" name="duration" value={form.duration} onChange={handleChange}/>
                </div>
              </div>
              <div className="names">
                         <div className="name">
                   <label>Start Date </label>
                  <input type="date" name="startDate" onChange={handleChange} value={form.startDate} />

                </div>
                <div className="name">
                       <label >End Date </label>
                  <input type="date" name="endDate" onChange={handleChange} value={form.endDate} id="" />


                </div>
                   
              </div>

              <div className="field">
                <label>Status </label>
                <input type="text" name="status" value={form.status} onChange={handleChange} />
              </div>
        
      
              <button type="submit">Subscribe</button>
                <p className={`${subscriptionMessage.includes("✅") ? "success" : "fail"}`}>{subscriptionMessage}</p>
                 <p>© Copyright 2025   Vixa FX   All Rights Reserved.</p>

             </form>
          </div>
           
    )


}

export default AdminSubscription    