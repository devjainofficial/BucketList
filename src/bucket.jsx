import React from 'react'
import {faRegTrashAlt} from 'react-icons/fa'
const style = {
li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
liComplete: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
textComplete: `ml-2 cursor-pointer line-through`,
button: `cursor-pointer flex items-center`
}

const Bucket = ({bucket}) =>{
  return (
  <li className={style.li}>
        <div className={style.row}>
            <input type="checkbox" />Bucket
            <p className={style.text}>{bucket}</p>
        </div>
        <button>{<faRegTrashAlt />}</button>
  </li>
  )
}

export default Bucket;
