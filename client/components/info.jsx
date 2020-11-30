const {React} = window;
const {styled} = window;
import extraInfo from './image/extraInfo.png';
import { InfoContainer} from './styles/app.styles.js';


const Info = () => {

  return (
    <InfoContainer width='700px' height='780px' src={extraInfo} alt='Booking Details'/>
  )
}

export default Info;