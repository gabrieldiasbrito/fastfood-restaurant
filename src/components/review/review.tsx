import './review.css'
import ReviewImg from '../../img/review.svg'
import ReviewSwiper from './reviewSwiper'

export default function Review(){
    return(
        <>
            <h1 className="title">Avaliações</h1>
            <div className='review'>
                <img src={ReviewImg}/>
                <ReviewSwiper/>
            </div>
        </>
    )
}