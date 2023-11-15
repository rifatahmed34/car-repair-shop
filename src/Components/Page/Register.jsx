import image1 from '../../assets/login/login.svg'
import { SiFacebook } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)
    const [errorPassword, setErrorPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password)
        if (password.length < 6) {
            setErrorPassword('you must enter at least 6 characters')
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorPassword('you must have at least one uppercase  letter')
            return;
        }
        setErrorPassword('')

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                toast.success('user created successfully')
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

                // ..
            });
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className="hero lg:h-[120vh] px-10  ">
            <div className="grid lg:grid-cols-2 rounded-none gap-4 flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left mt-10 lg:ml-12">
                    <img className='80-[80vh]' src={image1} alt="" />
                </div>
                <div className="card flex-shrink-0   border rounded-none bg-base-100 w-full">
                <h2 className='text-5xl font-semibold text-center mt-6'>Login</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name='name' className="input border-none bg-slate-200 text-black rounded-none input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input border-none bg-slate-200 text-black rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                                <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className="input border-none bg-slate-200 text-black rounded-none input-bordered w-full" required />
                                <span className='text-2xl relative mt-3 -ml-8 ' onClick={() => setShowPassword(!showPassword)}>{showPassword? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>
                            </div>
                            {
                                errorPassword && <p className='text-red-700 font-semibold'>{errorPassword}</p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white font-semibold hover:bg-amber-950 bg-[#FF3811]">Register</button>
                        </div>
                        <div className='mt-6 w-full mx-auto'>
                            <p className='text-center'>Or Sign In with</p>
                            <div className='flex justify-center gap-6 py-4'>
                                <SiFacebook className='text-center text-3xl text-blue-700'></SiFacebook>
                                <BsLinkedin className='text-center text-3xl text-blue-700'></BsLinkedin>
                                <button onClick={handleGoogleLogin}><FcGoogle className='text-center text-3xl '></FcGoogle></button>
                            </div>
                            <p className='text-center py-4'>Already have an account?  <Link to='/login'><span className='text-blue-800 font-semibold'>Login</span></Link></p>
                        </div>
                    </form>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Register;