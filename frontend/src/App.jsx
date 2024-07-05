import React, { useState } from 'react'
import './App.css'

import squad from './images/squad.svg'
import bgdark from './images/BG_FINAL.jpg'

import online from './images/rightside_online.svg'
import offline from './images/rightside_offline.svg'
import join from './images/join.svg'
import radio_on from './images/radio_on.svg'
import radio_off from './images/radio_off.svg'


import Leftsidebar from './components/Leftsidebar'
import Sidebar ,{SidebarItems} from './components/Sidebar'
import Content from './components/Content'




const App = () => {

  const mystyle = {
    backgroundImage: `url(${bgdark})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundposition: 'center',
    
    //scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-500 overflow-y-scroll
}

const [bigger, setbigger] = useState(false)

  return (
    <div style={mystyle} className='w-full h-full bg-cover bg-fixed flex justify-between  rajdhani-medium font-semibold   '>
      <div className='flex w-4/5  '>
        <Leftsidebar></Leftsidebar>
        
      
       <div className='w-4/5  ml-14  '>
        <Content></Content>
       </div>
       
       </div>

       <div className={`flex   pt-8   ${bigger?"bg-gray-900 opacity-80":""} `}  onMouseEnter={()=>setbigger(!bigger)}  onMouseLeave={()=>setbigger(!bigger)} >
     <Sidebar  className='fixed' >

      <SidebarItems image={join} text="SQUAD" sidetext="SQUAD JOIN" icon={squad}/>
      <SidebarItems image={online} text="ONLINE" sidetext="MaryJane" icon={radio_on}/>
      <SidebarItems image={offline} text="OFFLINE" sidetext="420" icon={radio_off}/>
      
     </Sidebar>
    </div>
    
    </div>
  )
}

export default App