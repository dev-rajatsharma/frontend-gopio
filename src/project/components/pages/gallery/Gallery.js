import React from 'react';
import pic1 from '../../../../img/gallery/1.jpg';
import pic2 from '../../../../img/gallery/2.jpg';
import pic3 from '../../../../img/gallery/3.jpg';
import pic4 from '../../../../img/gallery/4.jpg';
import pic5 from '../../../../img/gallery/5.jpg';
import pic6 from '../../../../img/gallery/6.jpg';
import pic7 from '../../../../img/gallery/7.jpg';
import pic8 from '../../../../img/gallery/8.jpg';
import pic9 from '../../../../img/gallery/9.jpg';
import pic10 from '../../../../img/gallery/10.jpg';
import pic11 from '../../../../img/gallery/11.jpg';
import pic12 from '../../../../img/gallery/12.jpg';
import pic13 from '../../../../img/gallery/13.jpg';
import pic14 from '../../../../img/gallery/14.jpg';
import pic15 from '../../../../img/gallery/15.jpg';
import pic16 from '../../../../img/gallery/16.jpg';
import pic17 from '../../../../img/gallery/17.jpg';
import pic18 from '../../../../img/gallery/18.jpg';
import pic19 from '../../../../img/gallery/19.jpg';
import pic20 from '../../../../img/gallery/20.jpg';
import pic21 from '../../../../img/gallery/21.jpg';
import pic22 from '../../../../img/gallery/22.jpg';
import pic23 from '../../../../img/gallery/23.jpg';
// import pic24 from '../../../../img/gallery/jagat_shah.jpeg';
import pic25 from '../../../../img/gallery/June2018Event_with Jagat Shah.jpeg';

import './gallery.css';
 let pics = [
     {
         src: pic1,
         caption: ''
     },
     {
        src: pic2,
        caption: ''
    },
    {
        src: pic3,
        caption: ''
    },
    {
        src: pic4,
        caption: ''
    },
    {
        src: pic5,
        caption: ''
    },
    {
        src: pic6,
        caption: ''
    },
    {
        src: pic7,
        caption: ''
    },
    {
        src: pic8,
        caption: ''
    },
    {
        src: pic9,
        caption: ''
    },
    {
        src: pic10,
        caption: ''
    },
    {
        src: pic11,
        caption: ''
    },
    {
        src: pic12,
        caption: ''
    },
    {
        src: pic13,
        caption: ''
    },
    {
        src: pic14,
        caption: ''
    },
    {
        src: pic15,
        caption: ''
    },
    {
        src: pic16,
        caption: ''
    },
    {
        src: pic17,
        caption: ''
    },
    {
        src: pic18,
        caption: ''
    },
    {
        src: pic19,
        caption: ''
    },
    {
        src: pic20,
        caption: ''
    },
    {
        src: pic21,
        caption: ''
    },
    {
        src: pic22,
        caption: ''
    },
    {
        src: pic23,
        caption: ''
    },
    // {
    //     src: pic24,
    //     caption: ''
    // },
    {
        src: pic25,
        caption: ''
    },
    
 ]

export default class gallery extends React.Component {
    openPoster=(e)=>{
        console.log(e.target.src)
        window.open(e.target.src)
    }
    renderPics=()=>{
        return pics.map((item,index)=>{
            return (
                <figure className='border m-0 gallery-fig-con'>
                    <img src={item.src} className='img img-thumbnail img-responsive' alt='pic' onClick={this.openPoster}/>
                    <div className='text-center'>
                        <small>{item.caption}</small>
                    </div>
                </figure>
            )
        })
    }
    // renderPhotos = () => {
    //     return (
    //         <div className="row">
    //             <div className="column">
    //             <figure className='border m-0'>
    //                 <img src={pic1} alt='pic' />
    //                 <div className='text-center'>
    //                     {/* <small>Montek Singh Ahluwalia(right)</small> */}
    //                 </div>
    //             </figure>
    //             <figure className='m-0'>
    //                 <img src={pic2} alt='pic' />
    //                 <div className='text-center'>
    //                     <small></small>
    //                 </div>
    //             </figure>
    //                 <img src={pic3} alt='pic3' />
    //                 <img src={pic4} alt='pic4' />
    //                 <img src={pic11} alt='pic11' />
    //             </div>

    //             <div className="column">
    //                 <img src={pic6} alt='pic6' />
    //                 <img src={pic7} alt='pic7' />
    //                 <img src={pic8} alt='pic8' />
    //                 <img src={pic9} alt='pic9' />
    //                 <img src={pic10} alt='pic10' />
    //                 <img src={pic5} alt='pic5' />
    //             </div>
    //             <div className="column">
    //                 <img src={pic12} alt='pic12' />
    //                 <img src={pic13} alt='pic13' />
    //                 <img src={pic14} alt='pic14' />
    //                 <img src={pic16} alt='pic16' />
    //                 <img src={pic17} alt='pic17' />
    //                 <img src={pic21} alt='pic21' />
    //             </div>
    //             <div className="column">
    //                 <img src={pic18} alt='pic18' />
    //                 <img src={pic19} alt='pic19' />
    //                 <img src={pic20} alt='pic20' />
    //                 <img src={pic22} alt='pic22' />
    //                 <img src={pic23} alt='pic23' />
    //                 <img src={pic15} alt='pic15' />
    //             </div>
    //         </div>
    //     )
    // }
    render() {
        return (
            <main className='shadow'>
            <h4 className='container'>A glimpse of international events at GOPIO-Virginia</h4>
                <div className='d-flex flex-wrap'>
                    {this.renderPics()}
                </div>
            </main>
        )
    }
}