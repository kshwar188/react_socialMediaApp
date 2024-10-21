import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
  const[windowSize,setWindowSize] = useState({
    width:undefined,
    height:undefined
  })

  useEffect(()=>{
    const haandleResize = () =>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    haandleResize();

    window.addEventListener("resize",haandleResize)

    //prevent memory leak
    return () => window.removeEventListener("resize",haandleResize)
  },[])

  return windowSize
}

export default useWindowSize