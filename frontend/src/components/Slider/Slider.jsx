import React,{useState,useEffect} from 'react'
import { SliderData } from './Slider-data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import '../../styles/Slide.css'




const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0)
    const SliderLength=SliderData.length;


    const nextSlide=()=>{
        setCurrentSlide(currentSlide === SliderLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? SliderLength - 1 : currentSlide -1)
    }

    useEffect(()=>{
        setCurrentSlide(0)
    },[])



 //auto slide and auto scroll
 const autoScroll=false;
 let intervalTime=5000;
 let slideInterval;

 function auto(){
     slideInterval=setInterval(nextSlide,intervalTime)
 }

 useEffect(()=>{
    if(!autoScroll){
        auto()
    }
    return ()=>clearInterval(slideInterval)
 },[currentSlide])




  return (
   <div className='slider'>
    
        <AiOutlineArrowLeft className="prev arrow" onClick={prevSlide}/>
        <AiOutlineArrowRight className="next arrow" onClick={nextSlide}/>


         {SliderData.map((item,index)=>{
            return(
                <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                      {index === currentSlide && (
                         <>
                              <img src={item.image} alt={item.desc}/>
                                <div className="content">
                                    <h2>{item.heading}</h2>
                                    <p>{item.desc}</p>
                                    <hr/>
                                    <button className="btn-slide">View More</button>
                                </div>
                         </>
                      )
                      
                      }
                </div>
            )
         })}
         
   </div>
  )
}

export default Slider
