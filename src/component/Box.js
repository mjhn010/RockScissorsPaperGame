import React from 'react'
import Frog from '../assets/frog.png'
function Box(prors) {
  let result;
  if(prors.title == "Computer" && prors.result !== "tie" && prors.result !== ""){
    result = prors.result == "win" ?'lose':"win";
  }else{
    result = prors.result
  }
  return (
    <div className={`box ${result}`}>
      <div className='title-box'>
      <h1>{prors.title}</h1>
      </div>
      <div className={`img-box`}>
        <img className='frog' src={Frog}/>
      <img className='hand-img' src={prors.item && prors.item.img}/>
      </div>
      <h2>{result}</h2>
    </div>
  )
}

export default Box
