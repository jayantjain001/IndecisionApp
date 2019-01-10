import React from 'react';
import Modal from 'react-modal';

const OptionModal =(props)=>{
return (
<Modal
isOpen={!!props.selectedOption}
contentLabel="Selected option"
onRequestClose={props.clearselectedOption}
closeTimeoutMS={100}
className="modal"
>
<h3 className="modal__title">Selected Option</h3>
{props.selectedOption&&<p className="modal__body">{props.selectedOption}</p>}
<button className="sbutton"  onClick={props.clearselectedOption}>Okay</button>
</Modal>
)
};

/*
()=>{

    return ()
}

same as

()=>(

)

*/
export default OptionModal;