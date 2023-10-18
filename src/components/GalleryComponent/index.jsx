import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./CustomStyle.css"

const GalleryComponent = ({data, setShowGallery}) => {

    return (
            <Carousel
                autoFocus={false}
                c={(e)=>alert(e)}
                className={'fixed inset-0 bg-black bg-opacity-75 z-999999999 overflow-hidden'}
                autoPlay={false}
                emulateTouch={true}
                infiniteLoop={false}
                interval={2000}
                showThumbs={false}
                transitionTime={2000}
            >
                {
                    data?.map((dt)=>{
                        return (
                            <>
                                <div
                                    onClick={(e)=>{
                                        if (e.target.childElementCount===2){
                                            setShowGallery({
                                                gallery:false,
                                                galleryItems:undefined
                                            })
                                        }
                                    }}
                                className={'py-8 w-full h-[70%]  flex  flex-col justify-center items-center'}>
                                    <div  className={'w-[450px] rounded flex justify-center h-full '}>
                                        <img
                                            onClick={()=>alert("HI")}
                                            className={'rounded-md'}  src={`${dt.url}`} />
                                    </div>
                                    <p className={'text-white'}>{dt.name}</p>
                                </div>
                            </>
                        )
                    })
                }
            </Carousel>

    );
};

export default GalleryComponent;
