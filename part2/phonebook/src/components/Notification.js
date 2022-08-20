import React from 'react'

const Notification = ({message, failureMessage}) => {
  if(message===null && failureMessage==null){
    return null
  }else if(message!=null && failureMessage==null){
        return (
            <div className='success'>{message}</div>
          )
    }else if(message===null && failureMessage!=null){

        return(
            <div className='error'>{failureMessage}</div>
        )
    }


}

export default Notification