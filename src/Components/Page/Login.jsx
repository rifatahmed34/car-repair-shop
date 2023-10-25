import image1 from '../../assets/login/login.svg'
import { SiFacebook } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {

    const {signIn, googleLogin} = useContext(AuthContext)
    const [passerror, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        if(password.length < 6){
            setError('You have must be at least 6 characters')
            return;
        }
        setError('')

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('Login successful')
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                toast.success('Login successful')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className="hero lg:h-[120vh] px-10  ">
            <div className="grid lg:grid-cols-2 rounded-none  flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left mt-10 lg:ml-12">
                    <img className='h-[70vh]' src={image1} alt="" />
                </div>
                <div className="card flex-shrink-0   border rounded-none bg-base-100 w-full">
                    <h2 className='text-5xl font-semibold text-center mt-6'>Login</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input border-none bg-slate-100 rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                            <input type={showPassword? 'text' : 'password'} placeholder="password" name='password' className="input w-full border-none bg-slate-100 rounded-none input-bordered" required />
                            <span className='relative mt-3 -ml-8 text-2xl' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>
                            </div>
                            {
                                passerror && <p className='text-red-700 font-extrabold'>{passerror}</p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white font-semibold hover:bg-amber-950 bg-[#FF3811]">Login</button>
                        </div>
                        <div className='mt-6 w-full mx-auto'>
                            <p className='text-center'>Or Sign In with</p>
                            <div className='flex justify-center gap-6 py-4'>
                                <SiFacebook className='text-center text-3xl text-blue-700'></SiFacebook>
                                <BsLinkedin className='text-center text-3xl text-blue-700'></BsLinkedin>
                                <button onClick={handleGoogleLogin}><FcGoogle className='text-center text-3xl '></FcGoogle></button>
                            </div>
                            <p className='text-center py-4'>Have an account? <Link to='/register'><span className='text-blue-800 font-semibold'>Sign Up</span></Link></p>
                        </div>
                    </form>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Login;