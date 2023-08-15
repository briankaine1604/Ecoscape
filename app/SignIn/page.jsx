import {FcGoogle} from 'react-icons/fc'

const SignIn = () => {
  return (
    <div className='w-screen h-screen items-center justify-center flex'>
      <div className='w-64 h-fit flex text-xl justify-center border relative cursor-pointer px-5 p-2'><FcGoogle className='text-3xl'/> SignIn with google</div>
    </div>
  )
}

export default SignIn