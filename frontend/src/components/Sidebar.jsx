// Sidebar.js
import React, { createContext, useState,useContext } from 'react';


const SidebarContext=createContext();

export default function Sidebar({children}){
   
    const [expanded, setexpanded] = useState(false)

    return(
    <>
   
    <SidebarContext.Provider value={{expanded}}>   
    <ul className='flex ml-3 flex-col gap-2 '  onMouseEnter={()=>setexpanded(!expanded)}  onMouseLeave={()=>setexpanded(!expanded)}>
        {children}
    </ul>
    </SidebarContext.Provider>

    </>     
    )
}

export function SidebarItems({image,text,icon,sidetext}){
    const {expanded}=useContext(SidebarContext)


    return(
        <li className={`flex   flex-col gap-2 mr-2  mt-3  ${expanded?"border-t border-gray-500 w-48 transition-all":""} transition-all`}>
            
            <div className='flex gap-2 justify-start items-center transition-all '>
               <img src={icon} alt="" className='transition-all' />
              <div className='w-full flex justify-start items-center'> {expanded && <div className='text-white transition-all text-sm m-1 p-1'>{text}</div>} </div>
            </div>

            <div className='flex gap-2 h-9 transition-all  '>
              <img src={image} alt=""  className='transition-all'/>
              {expanded && <div className='  text-white text-xs transition-all  hover:bg-white hover:text-black'>{sidetext}</div>}
            </div>
        </li>
    )   
}
