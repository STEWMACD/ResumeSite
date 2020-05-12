import React, { useState } from "react"
import {Modal, Container,Row,Col, ModalBody, ModalHeader} from "reactstrap"
import Img from "gatsby-image"
import "../styles/images.css"
import Video from "../components/video"

const ImageModal = ({images}) =>{

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    //Only return images if there is atleast one image
    if (images.length > 0){
        return(
            <>
            <hr/>
            <Container>
                    <Row xs="4">
                        {getImages(images)}
                    </Row>    
            </Container>
            </>
        );
    }
    return (<></>);
    
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
                    <div className="text-center">
                        {getModalContent(image)}
                        
                    </div>
                </ModalBody>
            </Modal>
        
        </>

  );}

function getModalContent(image){
    const returnArray = [];
    if(image.videoURL != null){
        returnArray.push(<Video videoSrcURL = {image.videoURL}/>) 
    }else{
        returnArray.push(<Img fluid={image.file.childImageSharp.fluid} alt={image.tag}/>)

    }
    return returnArray;

}