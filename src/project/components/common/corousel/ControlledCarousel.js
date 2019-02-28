import React from 'react';
import {Carousel} from 'react-bootstrap';
import pic1 from '../../../../img/home/carousel/pic1.jpg';
import pic2 from '../../../../img/home/carousel/pic2.jpg';
import pic3 from '../../../../img/home/carousel/pic3.jpeg';
import pic4 from '../../../../img/home/carousel/pic4.jpg';
import pic5 from '../../../../img/home/carousel/pic5.jpeg';
import pic6 from '../../../../img/home/carousel/pic6.jpg';
import pic7 from '../../../../img/home/carousel/pic7.jpg';
import pic8 from '../../../../img/home/carousel/pic8.jpg';
import pic9 from '../../../../img/home/carousel/pic9.jpg';
import pic10 from '../../../../img/home/carousel/pic10.jpg';
import pic11 from '../../../../img/home/carousel/pic11.jpg';
import pic12 from '../../../../img/home/carousel/pic12.jpeg';
import pic13 from '../../../../img/home/carousel/pic13.jpeg';
import pic14 from '../../../../img/home/carousel/pic14.jpeg';
import pic15 from '../../../../img/home/carousel/pic15.jpeg';
import pic16 from '../../../../img/home/carousel/pic16.jpg';
import pic17 from '../../../../img/home/carousel/pic17.jpeg';
import pic18 from '../../../../img/home/carousel/pic18.jpeg';
import pic19 from '../../../../img/home/carousel/pic19.jpeg';
import VerticallyCenteredModal from '../modal/VerticallyCenteredModal';

let pics = [
    {
        'src': pic1,
        'caption': ''
    },
    {
        'src': pic2,
        'caption': ''
    },
    {
        'src': pic3,
        'caption': ''
    },
    {
        'src': pic4,
        'caption': ''
    },
    {
        'src': pic5,
        'caption': ''
    },
    {
        'src': pic6,
        'caption': ''
    },
    {
        'src': pic7,
        'caption': ''
    },
    {
        'src': pic8,
        'caption': ''
    },
    {
        'src': pic9,
        'caption': ''
    },
    {
        'src': pic10,
        'caption': ''
    },
    {
        'src': pic11,
        'caption': ''
    },
    {
        'src': pic12,
        'caption': ''
    },
    {
        'src': pic13,
        'caption': ''
    },
    {
        'src': pic14,
        'caption': ''
    },
    {
        'src': pic15,
        'caption': ''
    },
    {
        'src': pic16,
        'caption': ''
    },
    {
        'src': pic17,
        'caption': ''
    },
    {
        'src': pic18,
        'caption': ''
    },
    {
        'src': pic19,
        'caption': ''
    },
]

export default class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    //   this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        modalShow: false,
        picIndex: null
      };
    }
    
    renderCarouselContent=()=>{
        return pics.map((item,index)=>{
            let className = index===0 ? 'carousel-item active' : 'carousel-item'
            return (
                // <div className={className}>
                //         <img className="d-block w-100" src={item.src} alt="First slide" onClick={this.openPoster}/>
                //         <div class="carousel-caption d-none d-md-block">
                //             {/* <h5>heading</h5> */}
                //             <small className='carousel-caption-text'>{item.caption}</small>
                //         </div>
                //     </div>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    // src="holder.js/800x400?text=First slide&bg=373940"
                    src={item.src}
                    alt={ `slide ${index}`}
                    onClick= {(e)=>this.handleClick(e,index)}
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
          </Carousel.Item>
            )
        })
    }
    handleClick= (e,index) =>{
        this.setState({
            picIndex: index,
            modalShow: true
        })
    }
    modalClose = () =>{
        this.setState({ modalShow: false})
    }

    handleSelect = (selectedIndex, e) => {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction, modalShow, picIndex } = this.state;
  
      return (
        <div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
          {this.renderCarouselContent()}
        </Carousel>
        <VerticallyCenteredModal show={modalShow} onHide={this.modalClose} pic={pics[picIndex]}/>
        </div>
      );
    }
  }