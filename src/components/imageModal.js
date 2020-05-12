import React, { useState } from "react"
import {Modal, Container,Row,Col, ModalBody, ModalHeader} from "reactstrap"
import Img from "gatsby-image"
import "../styles/images.css"

const ImageModal = ({images}) =>{

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <Container>
                <Row xs="4">
                    {getImages(images)}
                </Row>    
        </Container>
        
    );
}
export default ImageModal

function getImages(images) {
    const imageArray = [];
    images.forEach(element => {
      imageArray.push(<ImageSub image={element}/>)
    });
    return imageArray
  }

  const ImageSub = ({image})=>{
      const [modal, setModal] = useState(false);
      const toggle = () =>setModal(!modal);
    return(
        <>
            <Col><div className="imageContainer"onClick={toggle}>
                <Img fixed={image.file.childImageSharp.fixed} alt={image.tag}/></div>
            </Col>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <div className="float-center">
                        <Img fluid={image.file.childImageSharp.fluid} alt={image.tag}/>
                    </div>
                </ModalBody>
            </Modal>
        
        </>

  );}