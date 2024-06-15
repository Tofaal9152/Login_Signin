import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-start  bg-red-200 w-[50rem] rounded-lg'>
      <div className='text-3xl font-bold text-white'>Login</div>
      <div className='flex flex-col items-center space-y-4'>
        <input type="text" />
        <input type="password" />
      </div>

      <div className='flex items-center justify-between'>
        <input className='w-full' type="checkbox" name="" id="" />
        <p>Forget Password</p>
      </div>
      <div>
        <button>Login</button>
        <p>
          Don't have an account?
          <span className="underline-offset-2">Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login