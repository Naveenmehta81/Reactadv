import { useState  } from "react";
import React from "react";


function Filedata(){
 const[formdata , setformdata] = useState({firstname : "" , lastname: '' , email:'' , stree:"" , isVisible : true})
 
  console.log(formdata);
 function handleform(event){
    const{name , value , type , checked } = event.target
    setformdata(
        prevdata =>{
            return{
              ...prevdata , 
             [name] : value
            }
             
        }
    )
 }

   return(
    <div>
       <form>
        <label>First name :</label>
         <input
         type="text"
         placeholder="First name"
         name="firstname"
         value={formdata.firstname}
         onChange={handleform}
         />
         <br/>
         <br/>
         <label>last name  :</label>
         <input
         type="text"
         placeholder="last name"
         name="lastname"
         value={formdata.lastname}
         onChange={handleform}
         />
         <br/>
         <br/>
        < label>Email:</label>
         <input
         type="email"
         placeholder="enter your email"
         name="email"
         value={formdata.email}
         onChange={handleform}
         />
         <br/>
         <br/>
         <label htmlFor="cnt">Country</label>
         <select
         name="country"
         id="cnt"
         value={formdata.country}
         onChange={handleform}>
           <option value="india">India</option>
           <option value="us">us</option>
           <option value="uk">uk</option>
           <option value="russia">russia</option>
         </select>
         <br/>
         <label>stree address</label>
         <input
         type="text"
         placeholder="stree address"
         name="stree"
         value={formdata.stree}
         onChange={handleform}
         />
         <br/>
         <br/>
         <fieldset>
          <legend>BY email</legend>
          <input
         type="checkbox"
         name="isVisible"
         id="isVisible"
         checked={formdata.isVisible}
         onChange={handleform}>
        </input>
        <label htmlFor="isVisible">comments
            <p>get notified when comments</p>
        </label>
         <input
         type="checkbox"
         name="isVisible"
         id="isVisible"
         checked={formdata.isVisible}
         onChange={handleform}>
        </input>
        <label htmlFor="isVisible">candidates
            <p>get notified when candidates</p>
        </label>
        <input
         type="checkbox"
         name="isVisible"
         id="isVisible"
         checked={formdata.isVisible}
         onChange={handleform}>
        </input>
        <label htmlFor="isVisible">offers
            <p>get notified when offers</p>
        </label>
         </fieldset>
         <fieldset>
         <legend>PUSH notification</legend>
         <input 
         onChange={handleform}
         type="radio"
         name="radio"
         id="radio"
         value="radio"
         />
         <label htmlFor="radio">Everything</label>

         </fieldset>


         


         
       </form>
    </div>
   )
    
} 


export default Filedata;



// const [formdata, setformdata] = useState({firstname:"" , lastname:'' ,Comment:'' , 
//     isVisible:true , mode:''});
//   console.log(formdata)
//   function handlformdata(e){
//        const{name , value , type , checked } =    e.target
//     setformdata(
//       prevdata =>{
//         return{
//           ...prevdata ,
//           [name]: type === 'checkbox'  ? checked : value
//         }
//       }
//     )
    


//   }


//   function submithandler(event){
//   event.preventDefault();

//     console.log(formdata)
//   }
 

//   return (
    
//     <div>
//         <form onSubmit={submithandler}>
//           <input
//           type='text'
//           placeholder='enter your first name:'
//           name = "firstname"
//           value={formdata.firstname}
//           onChange={handlformdata}/>
//           <br/>
//           <br/>
//           <input 
//           type='text'
//           placeholder='enter your last name:'
//           name='lastname'
//           value={formdata.lastname}
//           onChange={handlformdata}/>
//           <br/>
//           <br/>
//           <textarea
//           placeholder='enter yout text'
//           onChange={handlformdata}
//           name='Comment'
//           value={formdata.Comment}/>
//            <br/>
//            <br/>


//           <input
//           type='checkbox'          
//           name='isVisible'
//           id='isVisible'
//           checked ={formdata.isVisible}
//           //value={formdata.lastname}
//           onChange={handlformdata}/>
//           <label htmlFor='isVisible'>AM is visible?</label>
//           <br/>
//           <br/>
//           <fieldset>c
//             <legend>Mode</legend>
//             <input
//           onChange={handlformdata}
//           type='radio'
//           name='mode'
//           id='online-mode'
//           value='online-mode'
//           checked= {formdata.mode === "online-mode"}
//           />
//           <label htmlFor='online-mode'>onlinemode</label>
         
//             <input
//             onChange={handlformdata}
//           type='radio'
//           name='mode'
//           id='offline-mode'
//           value='offline-mode'
//           checked= {formdata.mode === "offline-mode"}
//           />
//      <label htmlFor='offline-mode' >offline mode</label>

//           </fieldset>
           
//            <label htmlFor='favcar'>select fav car</label>

//           <select
//           name='favcar'
//           id='faccar'
//           value={formdata.favcar}
//           onChange={handlformdata}
//           >
//             <option value="scarpio">SCARPIO</option>
//             <option value="Thar">Thar</option>
//             <option value="alto">alto</option>
//             <option value="ven">ven</option>

//           </select>
//          <br/>
//          <br/>
//           <button>Submit</button>
          
//         </form>
        
//     </div>
//   )