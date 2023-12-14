import "./intro.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import burger1 from '../../img/burger-1.png'
import burger2 from '../../img/burger-2.png'
import burger3 from '../../img/burger-3.png'
import burger4 from '../../img/burger-4.png'
import { Pagination, Navigation, Autoplay} from "swiper/modules";

export default function Intro(){
    
    const data = [
        {id: '1', image:burger1, text:'Um hambúrguer com duas carnes bovinas grelhadas, pão com gergelim, queijo derretido, molho barbecue, picles, salada fresca (alface, cebola, tomate) e maionese.', title:'Big Duplo Rose'},
        {id: '2', image:burger2, text:'Um hambúrguer com duas carnes bovinas grelhadas, pão brioche, queijo derretido, salada (alface, cebola, tomate) e fatias de bacon.', title:'Duplo X bacon'},
        {id: '3', image:burger3, text:'Um hambúrguer com duas carnes bovinas grelhadas, pão com gergelim, queijo derretido, picles, molho cheddar, salada (alface, cebola, tomate, cebola roxa) e fatias de bacon.', title:'Churrasco Premium'},
        {id: '4', image:burger4, text:'Composto por pão tipo brioche com batata,Um hambúrguer com uma carne bovina grelhada, molho Honey&Fire, bacon em fatias, alface, tomate, queijo cheddar e carne de peito de frango empanada', title:'Top Chicken'},
    ]
    
    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            navigation
            loop={true}
        >
            {data.map((item) => ( 
                <SwiperSlide key={item.id}>
                    <div className="slide">
                        <div className="slide-text">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                            <button>Pedir agr</button>
                        </div>
                        <div className="slide-img">
                            <img
                                src={item.image}
                            />
                        </div>
                    </div>
                </SwiperSlide>                   
            ))}
        </Swiper>
    )
}