import React from 'react'


import leftside_carrer from '../images/leftside_carrer.png'
import leftside_game1  from '../images/leftside_game1.png'
import leftside_game2 from '../images/leftside_game2.png'
import leftside_game3 from '../images/leftside_game3.png'
import leftside_game4 from '../images/leftside_game4.png'
import leftside_news from '../images/leftside_news.png'
import leftside_playbtn from '../images/leftside_playbtn.png'
import questionmark from '../images/questionmark.svg'
import quit from '../images/quit.svg'

const Leftsidebar = () => {
  return (
    <>
    <div
     className='   h-full w-15 flex flex-col gap-3  border-r justify-center pt-3 border-gray-500 fixed overflow-auto '>
          <a
          className='ml-3  cursor-pointer flex' >
            <img src={leftside_game2} alt="" className='h-9 w-7 hover:brightness-125 hover:saturate-150 hover:contrast-125' />
           
          </a>
          <a className='ml-3 cursor-pointer '>
            <img src={leftside_game4} alt="" className='h-9 w-7 hover:brightness-125 hover:saturate-150 hover:contrast-125'/>
          </a>
          <a className='ml-3  cursor-pointer'>
            <img src={leftside_game3} alt="" className='h-9 w-7 hover:brightness-125 hover:saturate-150 hover:contrast-125'/>
          </a>
          <a className='ml-3 brightness-100 contrast-100 saturate-100 cursor-pointer hover:brightness-125 hover:saturate-150 hover:contrast-125'>
            <img src={leftside_game1} alt=""className='h-9 w-7' />
          </a>
          <a className='ml-3 brightness-100 contrast-100 saturate-100 cursor-pointer hover:brightness-125 hover:saturate-150 hover:contrast-125'>
            <img src={leftside_carrer} alt="" className='h-9 w-7'/>
          </a>
          <a className='ml-3 brightness-100 contrast-100 saturate-100 cursor-pointer hover:brightness-125 hover:saturate-150 hover:contrast-125'>
            <img src={leftside_playbtn} alt="" className='h-8 w-7'/>
          </a >
          <a className='ml-3 brightness-100 contrast-100 saturate-100 cursor-pointer hover:brightness-125 hover:saturate-150 hover:contrast-125'>
            <img src={leftside_news} alt=""className='h-8 w-7' />
          </a>

          <div className='flex flex-col  gap-4 h-1/5 p-4 pt-12 justify-end'>

          <a className='ml-3 brightness-100 contrast-100 saturate-100 cursor-pointer '>
            <img src={questionmark} alt="" className='h-3 w-3 hover:brightness-125 hover:saturate-150 hover:contrast-125'/>
          </a > 
          <a className='ml-3 brightness-100 contrast-100 saturate-100 cursor-pointer'>
            <img src={quit} alt="" className='h-3 w-3'/>
          </a >
          </div>
     </div>
    </>
  )
}

export default Leftsidebar