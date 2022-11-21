import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import "./signup.css"

const schema=yup.object().shape({
    firstname:yup.string().required(),
    lastname:yup.string().required(),
    email:yup.string().email().required(),
    age:yup.number().required().positive().integer(),
    mobile:yup.number().required().positive().integer(),
    gender:yup.string().required(),
    password:yup.string().min(4).max(10).required(),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null]),
})

const Signup = () => {
            const {register,handleSubmit,formState: { errors }}=useForm({
                resolver:yupResolver(schema),
            });
            
            const submitForm=(data)=> {
                console.log(data);
            }
          

  return (
    <div className='body'>
        
    <div className='FormStyle'>
        <div className="title"><h3>Sign Up</h3> </div>
        <div className="inputs">
            <form className='design' onSubmit={handleSubmit(submitForm)}>
            <input type="text" name='firstname' placeholder='Firstname' {...register('firstname')} />
                {errors.firstname && <p>Please enter firstname.</p>}
                <br/>
                <input type="text" name='lastname' placeholder='Lastname' {...register('lastname')}  />
                {errors.lastname && <p>Please enter lastname.</p>}
                <br/>
                <input type="email" name='email' placeholder='email id' {...register('email')}   />
                {errors.email && <p>Please enter email.</p>}
                <br/>
                <input type="text" name="age" placeholder='age' {...register('age', { pattern: /\d+/ })} />
                 {errors.age && <p>Please enter number for age.</p>}
                 <br />
                 <input type="text" name="mobile" placeholder='Mob. No. here' {...register('mobile' )} />
                 {errors.mobile && <p>Please enter your mobile number.</p>}
                 <br />
                 <h>Select Gender:</h>
                <select {...register("gender")}>
                <option value="">Select...</option>
                <option value="Male">Male 
                </option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                </select>
                {errors.gender && <p>Please select your gender.</p>}
                <br/>
                <input type="password" name='password' placeholder='password' {...register('password')} />
                {errors.password && <p>Please enter password.</p>}
                <br/>
                <input type="password" name='confirmpassword' placeholder='confirm password'{...register('confirmpassword')}  />
                {errors.confirmpassword && <p>Password not match.</p>}
                <br/>

                <input type="submit" id='submit'/>
            </form>
        </div>
    </div> 
    </div>
  )
}

export default Signup;