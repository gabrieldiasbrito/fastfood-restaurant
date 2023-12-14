import './about.css'
import Chef from '../../img/chef.svg'

export default function About(){
    return(
        <>
            <h1 className='title'>Quem somos?</h1>
            <div className='about-container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla euismod libero, sed sollicitudin ante eleifend quis. Nullam ut nunc auctor, placerat sapien gravida, varius nulla.</p>
                <img src={Chef}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla euismod libero, sed sollicitudin ante eleifend quis. Nullam ut nunc auctor, placerat sapien gravida, varius nulla.</p>
            </div>
        </>
    )
}