import "./popular.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import burger1 from '../../img/burger-1.png'
import burger2 from '../../img/burger-2.png'
import burger3 from '../../img/burger-3.png'
import burger4 from '../../img/burger-4.png'
import burger5 from '../../img/burger-5.png'
import burger6 from '../../img/burger-6.png'
import { Navigation} from "swiper/modules";

export default function Popular(){
    
    const data = [
        {id: '1', image:burger1, text:'Um hambúrguer com duas carnes bovinas grelhadas, pão com gergelim, queijo derretido, molho barbecue, picles, salada fresca (alface, cebola, tomate) e maionese.', title:'Big Duplo Rose', value:'29,00'},
        {id: '2', image:burger2, text:'Um hambúrguer com duas carnes bovinas grelhadas, pão brioche, queijo derretido, salada (alface, cebola, tomate) e fatias de bacon.', title:'Duplo X bacon', value:'30,00'},
        {id: '3', image:burger3, text:'Um hambúrguer com duas carnes bovinas grelhadas, pão com gergelim, queijo derretido, picles, molho cheddar, salada (alface, cebola, tomate, cebola roxa) e fatias de bacon.', title:'Churrasco Premium', value:'31,00'},
        {id: '4', image:burger4, text:'Composto por pão tipo brioche com batata,Um hambúrguer com uma carne bovina grelhada, molho Honey&Fire, bacon em fatias, alface, tomate, queijo cheddar e carne de peito de frango empanada', title:'Top Chicken', value:'32,00'},
        {id: '5', image:burger5, text:'Um hamburguer (100% carne bovina), queijo, tomate, alface americana, cebola e maionese Tasty', title:'Big Tasty', value:'29,00'},
        {id: '6', image:burger6, text:'Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese Big Mac, cebola, picles e pão com gergelim', title:'Big Mac', value:'28,00'},
    ]
    
    return(
        <>
            <h1 className="title">Mais populares</h1>
            <Swiper
                modules={[Navigation]}
                centerInsufficientSlides
                loop={true}
                navigation
                breakpoints={{
                    700:{
                        slidesPerView: 1
                    },
                    1100:{
                        slidesPerView: 3
                    },
                    1400:{
                        slidesPerView: 4
                    },
                    
                }}
            >
                {data.map((item) => ( 
                    <SwiperSlide key={item.id}>
                        <div className="popular">
                            <div className="popular-img">
                                <img src={item.image}/>
                            </div>
                            <div className="popular-text">
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                                <span>R$ {item.value}</span>
                                <button>Carrinho</button>
                            </div>
                        </div>
                    </SwiperSlide>                   
                ))}
            </Swiper>
        </>
    )
}