import React from 'react'
import style from './style'
import Signin from './Components/Signin'
import Login from './Components/Login';


const App = () => {
  return (
    <div>
      <div className=" w-full overflow-hidden">
        <div className={`${style.paddingX} `}>
          <div className={` h-screen flex items-center justify-center`}>
            
            <Signin/>
          </div>
        </div>
      </div>
      <hr />
      <div className=" w-full overflow-hidden">
        <div className={`${style.paddingX} `}>
          <div className={` h-screen flex items-center justify-center`}>
            
            <Login/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App