import  { useState } from 'react';

function BoxComponent() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  // Conditionally assign the "active" class based on the isActive state
  const boxClass = isActive ? 'box active' : 'box';

  return (
    <div className={boxClass} onClick={toggleActive}>
      Click me to toggle the {"active"} class
    </div>
  );
}

export default BoxComponent;
