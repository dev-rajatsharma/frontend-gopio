import React from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import './modal.css';

export default class VerticallyCenteredModal extends React.Component {
    render() {
      let {show, onHide, pic} = this.props
      return (
        <Modal
          // {...this.props}
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{padding:0}}>
            {/* <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title> */}
          </Modal.Header>
          <Modal.Body style={{padding:'0.5rem'}}>
            {/* <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p> */}
            {pic && <Image src={pic.src} alt='pic' fluid/>}
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      );
    }
  }
  
  // class App extends React.Component {
  //   constructor(...args) {
  //     super(...args);
  
  //     this.state = { modalShow: false };
  //   }
  
  //   render() {
  //     let modalClose = () => this.setState({ modalShow: false });
  
  //     return (
  //       <ButtonToolbar>
  //         <Button
  //           variant="primary"
  //           onClick={() => this.setState({ modalShow: true })}
  //         >
  //           Launch vertically centered modal
  //         </Button>
  
  //         <VerticallyCenteredModal
  //           show={this.state.modalShow}
  //           onHide={modalClose}
  //         />
  //       </ButtonToolbar>
  //     );
  //   }
  // }