import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Bucket from "./bucket";


const style = {
  bg: `h-screen w-screen p-4 bg-grandient-to-r from-[#2FBBE0] to-[#1CB5E0]`,
  container:`bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-grey-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
}

function App() {
const [buckets, setBuckets ] = useState(['Learn React' , 'Grind Leetcode'])


  return (
  <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>BUCKET LIST</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Your Water" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {buckets.map[(bucket, index)=>(
            <Bucket key={index} Bucket={bucket}/>
          )] 
          }
        </ul>
        <p className={style.count}>You have 2 buckets</p>
      </div>
   </div>
  );
}

export default App;
