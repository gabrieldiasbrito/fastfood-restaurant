import './footer.css'
import { IoFastFoodOutline , IoLogoInstagram , IoLogoTwitter , IoShareSocialOutline , IoLogoTiktok } from "react-icons/io5";

export default function Footer(){
    return(
        <div className="footer">
            <div>
                © 2023 <b>Gabriel Brito</b>
            </div>
            <IoFastFoodOutline className="footer-icon"/>
            <div className='social'>
                <a href=""><IoShareSocialOutline/></a>
                <a href=""><IoLogoInstagram/></a>
                <a href=""><IoLogoTiktok/></a>
                <a href=""><IoLogoTwitter/></a>
            </div>
        </div>
    )
}