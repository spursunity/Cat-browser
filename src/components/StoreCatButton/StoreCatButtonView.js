import React from 'react';


const StoreCatButtonView = ({
  buttonClass,
  buttonText,
  onButtonClick,
}) => {
  return (
    <button
    className = { buttonClass }
    onClick = { onButtonClick } >
      { buttonText }
    </button>
  );
};


export default StoreCatButtonView;
