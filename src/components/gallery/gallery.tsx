import './gallery.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules'
import picture1 from '../../img/review1.avif'
import picture2 from '../../img/review2.jpg'
import picture3 from '../../img/review3.avif'
import picture4 from '../../img/review4.avif'
import picture5 from '../../img/review5.avif'
import picture6 from '../../img/review6.avif'
import picture7 from '../../img/review7.avif'
import picture8 from '../../img/review8.avif'

export default function Gallery(){

    const data =[
        {id:'1', img:picture1},
        {id:'2', img:picture2},
        {id:'3', img:picture3},
        {id:'4', img:picture4},
        {id:'5', img:picture5},
        {id:'6', img:picture6},
        {id:'7', img:picture7},
        {id:'8', img:picture8}
    ]

    return(
        <>
            <h1 className='title'>Galeria</h1>
            <Swiper 
                className='gallery-swiper'
                slidesPerView={2}
                grid={{
                    rows: 2,
                }}
                modules={[Grid]}
                loop={true}
            >
              {data.map((item) => ( 
                    <SwiperSlide key={item.id}>
                        <img src={item.img} className='gallery-img'/>
                    </SwiperSlide>                   
                ))}
            </Swiper>
        </>
    )
}