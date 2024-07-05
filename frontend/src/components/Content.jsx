import React, { useEffect, useState } from 'react'
import back from '../images/back.svg'
import flag from '../images/flag.svg'
import map1 from '../images/map1.png'
import map2 from '../images/map2.png'
import map3 from '../images/map3.png'
import map4 from '../images/map4.png'
import map5 from '../images/map5.png'
import map6 from '../images/map6.png'



const Content = () => {

    const [table1, settable1] = useState({});
    const [table2, settable2] = useState({});
    const [table3, settable3] = useState({});
    const [table4, settable4] = useState({});


    useEffect(() => {
        async function fetchData() {
            try {
                const [data1, data2, data3, data4] = await Promise.all([
                    fetch('https://fog-battlefield-backend-km6n.onrender.com/first').then(res => res.json()),
                    fetch('https://fog-battlefield-backend-km6n.onrender.com/second').then(res => res.json()),
                    fetch('https://fog-battlefield-backend-km6n.onrender.com/third').then(res => res.json()),
                    fetch('https://fog-battlefield-backend-km6n.onrender.com/fourth').then(res => res.json()),
                ]);
                
                settable1(data1);
                settable2(data2);
                settable3(data3);
                settable4(data4);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        fetchData();
    }, []);
    
    
return (
   <>
    <div className='text-white ml-8 mt-2 flex  text-xs position-relative '>
        <a href="/" className='flex justify-start items-center'> <img src={back} alt="b" /></a>
        <a href="/" className='mt-2 ml-5 '>MUTIPLAYER /</a>
        <a href="/" className='mt-2 ml-5'>SERVER BROWSER/</a>
    </div>
    <div className='text-white  ml-8 text-3xl font-semibold '>
       <span>SERVER INFO</span>
    </div>

    <div className=' mt-12 ml-8'>
     


      <div className='font-bold text-white text-xl'> <h1> #1| NASA | Noobs Welcome | Conquest 40Hz</h1></div>
      <div className=' mt-4 flex justify-start gap-2'>
        <img src={flag} alt="" /> 
        <span className='text-white  text-xs'>CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40HZ </span>
      </div>

      <div className='text-white text-xs mt-1 w-3/5'>
        <span>Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d </span>
    </div>


     <div>
        <button className=' text-white  px-2 py-2 m-1 mt-4 border w-52 hover:bg-white hover:text-black text-xs border-gray-500'>JOIN </button>
        <button className=' text-white  px-4 py-2 m-1 border w-52 hover:bg-white hover:text-black text-xs border-gray-500'>SPECTATE </button>
        <button className=' text-white  px-4 py-2 m-1 border w-52 hover:bg-white hover:text-black text-xs border-gray-500'>JOIN AS COMMANDER </button>
        <button className=' text-white  px-4 py-2 m-1 border w-30 hover:bg-white hover:text-black text-xs border-gray-500'>*13672 </button>
     </div>

     <div className='text-white w-3/5 flex justify-start gap-2  text-sm font-semibold'>
        <div className=' w-1/5 flex flex-col'> 
            <span>PLAYERS</span> 
            <span className=''>{table1.PLAYERS}</span>
        </div>
        <div className=' w-1/5 flex flex-col'>  
            <span>PING</span> 
            <span className=''>{table1.PING}</span>
        </div>
        <div className=' w-1/5 flex flex-col'> 
            <span>TICKRATE</span> 
            <span className=''>{table1.TICKRATE}</span>
        </div>
                                 
       

     </div>

     <div className='text-white mt-5 w-4/5  flex '>            
            <div className='w-1/3'>        
              <span className='text-xs'>SETTINGS</span>
              <div className='w-4/5'>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>REGION</span>
                    <span>{table2.REGION}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>PUNKBASTER</span>
                    <span>{table2.PUNKBASTER}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>FAIRFIGHT</span>
                    <span>{table2.FAIRFIGHT}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>PASSWORD</span>
                    <span>{table2.PASSWORD}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>PRESET</span>
                    <span>{table2.PRESET}</span>
                </div>
              </div>
               
            </div>


            <div className='w-1/3'>        
              <span className='text-xs'>ADVANCED</span>
              <div className='w-4/5'>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>MINIMAP</span>
                    <span>{table3.MINIMAP}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>ONLY SQUAD LEADER SPAWN</span>
                    <span>{table3["ONLY SQUAD LEADER SPAWN"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>VEHICLES</span>
                    <span>{table3.VECHILE}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>TEAM BALANCE</span>
                    <span>{table3["TEAM BALANCE"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>MINIMAP SPOTTING</span>
                    <span>{table3["MINIMAP SPOTTING"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>HUD</span>
                    <span>{table3.HUD}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>3P VEHICLE CAM</span>
                    <span>{table3["3P VECHILE CAM"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>REGENERATIVE HEALTH</span>
                    <span>{table3["REGENERATIV HEALTH"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>KILL CAM</span>
                    <span>{table3["KILL CAM"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>FRIENDLY FIRE</span>
                    <span>{table3["FRINENDLY FIRE"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>3D SPOTTING</span>
                    <span>{table3["3D SPOTTING"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>ENEMY NAME TAGS</span>
                    <span>{table3["ENEMY NAME TAGS"]}</span>
                </div>
              </div>
               
            </div>


            <div className='w-1/3'>        
              <span className='text-xs'>RULES</span>
              <div className='w-4/5'>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500 transition-all'>
                    <span>TICKETS</span>
                    <span>{table4.TICKETS}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>VEHICLE SPAWN DELAY</span>
                    <span>{table4["VECHILE SPAWN"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>BULLET DAMAGE</span>
                    <span>{table4["BULLET DAMAGE"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p- hover:bg-white hover:text-black border-gray-500'>
                    <span>KICK AFTER TEAM KILLS</span>
                    <span>{table4["KICK AFTER TEAM KILLS"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>PLAYER HEALTH</span>
                    <span>{table4["PLAYER HEALTH"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>PLAYER RESPAWN TIME</span>
                    <span>{table4["PLAYER RESPAWN TIME"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>KICK AFTER IDLE</span>
                    <span>{table4["KICK AFTER IDLE"]}</span>
                </div>
                <div className='flex justify-between border-b m-2 p-1 hover:bg-white hover:text-black border-gray-500'>
                    <span>BAN AFTER KICKS</span>
                    <span>{table4["BAN AFTER KICKS"]}</span>
                </div>
              </div>
               
            </div>
     </div>



    </div>
    <span className='text-white text-sm ml-5'>MAP ROTATION</span>
    <br></br>
    <div>
   


    <div className="flex flex-wrap justify-center gap-3 border-b-2 border-blue-900 ">
      <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map1} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map2} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map3} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map4} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map5} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map6} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map1} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map2} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map3} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map4} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map5} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map6} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map1} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map2} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map3} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    <div className="w-56  bg-gray-800 text-white text-center h-28 up hover:bg-slate-200 hover:text-gray-800 up  ">
        <img src={map4} alt="" className='w-full h-1/2 object-cover ' />
        <div className='opacity-90 '>
        <p>CONQUEST LARGE</p>
        <p>DAWNBREAKER</p>
        </div>
    </div>

    
      
    </div>
   
    


    </div>


   </>
  )
}

export default Content
