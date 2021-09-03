import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart,  faChevronDown, faPhone, faFileAlt, faEnvelopeOpen, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' ;

function initFontAwesome(){
    library.add(faShoppingCart, 
                faChevronDown, 
                faPhone, 
                faFileAlt, 
                faEnvelopeOpen, 
                faFacebook, 
                faWhatsapp, 
                faChevronRight, 
                faChevronLeft,
                faLinkedin,
                faTwitter,
                );
}

export default  initFontAwesome;