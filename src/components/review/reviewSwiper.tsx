import './review.css'
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { IoPersonCircle } from "react-icons/io5"; 

export default function ReviewSwiper(){

    const data =[
        { id:'1', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex pulvinar, auctor libero tempor, tristique lectus.', name:'Gabriel Brito', data:'14/12/2023'},
        { id:'1', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex pulvinar, auctor libero tempor, tristique lectus.', name:'Gabriel Brito', data:'14/12/2023'},
    ]

    return(
        <>
            <Swiper
                modules={[Navigation]}
                centerInsufficientSlides
                loop={true}
                navigation
                slidesPerView={1}
                className="review-swiper"
            >
                {data.map((item) => ( 
                    <SwiperSlide key={item.id}>
                        <div className="review-container">
                            <p>{item.review}</p>
                            <div className='account'>
                                <IoPersonCircle className="profile-icon"/>
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.data}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                   
                ))}
            </Swiper>   
        </>
    )
}