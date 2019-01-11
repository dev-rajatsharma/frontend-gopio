import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className='container-fluid d-flex fixed-bottom small footer'>
                <div className='text-center footer-mid'>
                GOPIO - All rights reserved.
                </div>
                <div>
                    {/* maintained by- Deepika Kothari */}
                </div>
            </footer>
        )
    }
}