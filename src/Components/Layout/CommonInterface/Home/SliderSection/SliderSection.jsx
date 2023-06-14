import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "./SliderSection.css"

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

/**
 * ToDo:   1.styling bgImage
 *         2.styling slider paragraph
 *  
 */
const SliderSection = () => {
    return (
        <div className="h-[500px]">
            <>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            "background-image":
                                "url(https://i.ibb.co/BGZGcJS/camp.webp)",

                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Welcome!
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Summer Spark Academy
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Welcome to our Summer School Learning Camp! Discover, learn, and grow with us this summer. Our engaging programs and dedicated educators are here to provide a fun-filled learning experience. Join us for an unforgettable journey of exploration and friendship. Get ready to make this summer one to remember!
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Learn
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Something New
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Embrace the summer break as an opportunity to learn and grow! Discover new passions, acquire new skills, and let your curiosity soar. Make this summer vacation a time of personal enrichment and transformation. Embrace the joy of learning and embark on a fulfilling journey of self-discovery!
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Arts And Crafts
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Explore Your Creativity
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Welcome to our website, your creative gateway to the world of art and crafts! Unleash your imagination and explore a diverse range of courses designed to nurture your artistic abilities. From painting and drawing to pottery and jewelry making, our platform offers a plethora of opportunities to learn and master various art forms. Whether you're a beginner or an experienced artist, our expert instructors are here to guide you every step of the way. Join our vibrant community of learners and let your creativity flourish. Start your artistic journey with us and unlock your true potential in the world of art and crafts!
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default SliderSection