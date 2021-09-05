import React, { useState } from 'react'
import Slider from "react-slick"
import styles from "./FilePreview.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-reset.css"

export default function FilePreview({ files, activeIndex, fileType, visible, hidePreview }) {
    const [zoom, setZoom] = useState(1)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    
    const zoomIn = () => {
        console.log("clicked")
        if (zoom < 1.3) {
            setZoom((prevZoom) => Math.round((prevZoom + 0.1) * 10) / 10)
        }
    }

    const zoomOut = () => {
        if (zoom > 1) {
            setZoom((prevZoom) => Math.round((prevZoom - 0.1) * 10) / 10)
        }
    }

    return (
        <div className={styles.backdrop} style={{ width: '100vw', minHeight: '100vh', display: `${visible ? 'block' : 'none'}` }}>
            <Back onClick={hidePreview} />
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    {files.map((image, i) => (
                        <ImagePreview zoomStyles={{transform: `scale(${zoom})`}} image={image.url} />
                    ))}
                </Slider>
                <div className={styles.zoom}>
                    <ZoomIn onClick={zoomIn} />
                    <ZoomOut onClick={zoomOut} />
                </div>
            </div>
        </div>
    )
}

function ImagePreview({image, zoomStyles}) {
    console.log(zoomStyles)
    return (
        <img style={zoomStyles} className={styles.imageItem} src={image} alt={image.alt} />
    )
}

function ZoomOut({ onClick }) {
    return (
        <svg onClick={onClick} width="21" height="22" viewBox="0 0 21 22" fill="none" >
            <path d="M20.278 20.4033L15.7269 15.9093L20.278 20.4033ZM18.249 9.90332C18.249 12.1577 17.3405 14.3197 15.7233 15.9137C14.1061 17.5078 11.9128 18.4033 9.62578 18.4033C7.33877 18.4033 5.14543 17.5078 3.52827 15.9137C1.91111 14.3197 1.00259 12.1577 1.00259 9.90332C1.00259 7.64898 1.91111 5.48697 3.52827 3.89291C5.14543 2.29885 7.33877 1.40332 9.62578 1.40332C11.9128 1.40332 14.1061 2.29885 15.7233 3.89291C17.3405 5.48697 18.249 7.64898 18.249 9.90332V9.90332Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12.162 9.90332H7.08957" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}

function ZoomIn({ onClick }) {
    return (
        <svg onClick={onClick} width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M20.5533 20.4033L16.0023 15.9093L20.5533 20.4033ZM18.5243 9.90332C18.5243 12.1577 17.6158 14.3197 15.9987 15.9137C14.3815 17.5078 12.1882 18.4033 9.90114 18.4033C7.61413 18.4033 5.42079 17.5078 3.80363 15.9137C2.18647 14.3197 1.27795 12.1577 1.27795 9.90332C1.27795 7.64898 2.18647 5.48697 3.80363 3.89291C5.42079 2.29885 7.61413 1.40332 9.90114 1.40332C12.1882 1.40332 14.3815 2.29885 15.9987 3.89291C17.6158 5.48697 18.5243 7.64898 18.5243 9.90332V9.90332Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9.90113 9.90332H6.3504M9.90113 6.40332V9.90332V6.40332ZM9.90113 9.90332V13.4033V9.90332ZM9.90113 9.90332H13.4519H9.90113Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}

function Back({ onClick }) {
    return (
        <svg onClick={onClick} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.back}>
            <path d="M20.2772 12.4033H4.27716" stroke="white" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.2772 18.4033L4.27716 12.4033L10.2772 6.40332" stroke="white" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}