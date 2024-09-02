import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false)
    useEffect(()=>{
        const timeout = setInterval(()=>{
            setAlert(false)
        }, 2000)
        return ()=> clearInterval(timeout)
    }, [alert])
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`
  return (
    <article className={`color ${index > 8 && `color-light`}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={()=>{setAlert(true)
        navigator.clipboard.writeText(hexValue)
    }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
