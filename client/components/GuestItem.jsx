const {React} = window;
const {styled} = global;
import {GuestExpand, GuestType, GuestNote, GuestNote12, Close, Button, ButtonContainer, Span} from './styles/guestDetail.styles.js';

const GuestItem = ({typeStyle, buttonStyle, button1, button2, invalid1, invalid2, guest }) => {
  let typeContent;
  if (typeStyle === 'adult') {typeContent = 'Adults'; }
  else if (typeStyle === 'child') {typeContent = 'Children'; }
  else {typeContent = 'Infants'; }

  return (
    <>
      <GuestType style={{'grid-area': typeStyle}}>{typeContent}
        { typeStyle === 'child' && (<GuestNote12>Ages 2-12</GuestNote12>)}
        { typeStyle === 'infant' && (<GuestNote12>Under 2</GuestNote12>)}
      </GuestType>
      <ButtonContainer style={{'grid-area': buttonStyle}}>
        <Button onClick={button1} invalid={invalid1}>-</Button>
        <Span>{guest} </Span>
        <Button onClick={button2} invalid={invalid2}>+</Button>
      </ButtonContainer>
    </>
  )
}

export default GuestItem;