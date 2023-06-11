import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import './allInstructor.css'

const AllInstructor = () => {

    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allInstructors')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInfo(data)

            })
    }, [])


    return (
        <div className='w-11/12 mx-auto my-20'>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        info.map((item, index) => <SwiperSlide
                            key={index}
                        >
                            <img src={item.image} alt="" />
                            <p className='md:text-3xl text-2xl text-center text-white -top-32 relative uppercase'>{item.name}</p>
                            <h1 className='text-xl text-white -top-32 text-center relative'><span className='text-xl text-[#FFE61B]'><Typewriter
                                words={[`Number Of Classes : ${item.number_of_classes}`]}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            /></span></h1>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>

        </div>
    )
}

export default AllInstructor