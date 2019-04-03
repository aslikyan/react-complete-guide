import React from 'react';

const validationComponent = (props) => {
  let validationText = 'Input some text'
  if (props.length) {
    validationText = props.length > 5 ? (<span>Text too long</span>) : (<span>Text too short</span>);
  }
  return(
    <div>
      {validationText}
    </div>
  )
}

export default validationComponent;