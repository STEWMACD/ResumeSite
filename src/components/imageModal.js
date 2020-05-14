import React, { useState } from "react"
import {Modal, Container,Row,Col, ModalBody, ModalHeader, CarouselItem, Carousel, CarouselControl} from "reactstrap"
import Img from "gatsby-image"
import "../styles/images.css"
import Video from "../components/video"

const ImageModal = ({images}) =>{

    const [modal, setModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    
    const toggle = (index)=>{
        setAnimating(false);
        goToIndex(index);
        setModal(!modal);};

    const next = () => {
        console.log(animating)
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating&&modal) return;
        setActiveIndex(newIndex);
    }

    const slides = images.map((image =>{
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            key={image.tag}>
            {getModalContent(image)}
        </CarouselItem>
        )
    }))

    //Only return images if there is atleast one image
    if (images.length > 0){
        return(
            <>
            <hr/>
            <Container>
                <Row xs= "2" md="4" lg = "6" noGutters>
                    {getThumbnails(images,toggle)}
                </Row>
                   
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                    <ModalBody>
                        <div className="text-center">
                            <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                                {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                            </Carousel>
                            

                        </div>
                    </ModalBody>
                </Modal> 
            </>
        );
    }
    return (<></>);
    
}

export default ImageModal

function getThumbnails(images,modalToggleFunction) {
    const imageArray = [];
    images.forEach((image,index) => {
      imageArray.push(
          
      <Col><div className="imageContainer overlay-effect" onClick={()=>modalToggleFunction(index)}>
        <Img fixed={image.file.childImageSharp.fixed} alt={image.file.tag}/></div>
      </Col>)
    });
    return imageArray
}


function getModalContent(image){
    const returnArray = [];
    if(image.videoURL != null){
        returnArray.push(<Video videoSrcURL = {image.videoURL}/>) 
    }else{
        returnArray.push(<Img fluid={image.file.childImageSharp.fluid} alt={image.tag}/>)
    }
    return returnArray;

}

function getCarouselItems(images){
    const returnArray = [];
    images.forEach((image,index)=>{
        returnArray.push(
        
            )
    })
}

