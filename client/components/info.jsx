const {React} = window;
const {styled} = window;
import extraInfo from './image/extraInfo.png';
import { InfoContainer} from './styles/app.styles.js';


const Info = () => {

  return (
    <InfoContainer src={extraInfo} />
  )
}

export default Info;