import React, { useContext } from 'react'
import { AlertContext } from '../../App'

const DemoPage = () => {
    const {handleAlert} = useContext(AlertContext)
    const handleShowMessage = () =>{
        handleAlert("success", "Thông báo thành công")
    }
  return (
    <button
        onClick={handleShowMessage}
        className='px-2 py-5 bg-orange-600 text-white rounded'>Ant Design Message</button>
  )
}

export default DemoPage