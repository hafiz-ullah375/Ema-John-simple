import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, address, phone }
        console.log(shipping);

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Enter Your name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" placeholder='Phone' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <input className="form-submit" type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;