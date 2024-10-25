import React, { useEffect, useState } from 'react';
const Footer = (Footer) => {
    return (
        <>
        <div className='container border-top'>
            <div className="row m-3">
                <div className="col-md-6">
                    <h2 className='user-select-none'>Store</h2>
                    <p>© 2024</p>
                </div>
                <div className="col-md-2">
                    <h5>Section 1</h5>
                    <p className='text-secondary'>Home</p>
                    <p className='text-secondary'>About</p>
                    <p className='text-secondary'>Contact</p>
                </div>
                <div className="col-md-2">
                <h5>Section 2</h5>
                    <p className='text-secondary'>Home</p>
                    <p className='text-secondary'>About</p>
                    <p className='text-secondary'>Contact</p>
                </div>
                <div className="col-md-2">
                <h5>Section 3</h5>
                    <p className='text-secondary'>Home</p>
                    <p className='text-secondary'>About</p>
                    <p className='text-secondary'>Contact</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;