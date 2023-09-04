import { ImAppleinc } from 'react-icons/im';
import { BiLogoPlayStore } from 'react-icons/bi';
import {Link} from 'react-router-dom';

function Button({ val }) {

    return ((val === "G-playstore") ?
        <Link to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1" target="_blank"><button ><BiLogoPlayStore className="g_playLogo" /> <p className='g-play'><span>Get it on</span><h2> Google Play</h2></p></button></Link> :  <Link to="https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target="_blank"><button ><ImAppleinc className="apple_Logo" /> <p className="apple-play"><span>Download on the</span><h2>App Store</h2></p></button></Link>
    )
}

export default Button; 