import React from 'react'
import { Card, CardHeader, Image } from '@nextui-org/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

interface myProps {
    slidesPerView?: number,
    spaceBetween?: number,
    pictures: string[],
    titles: string[],
    subtitles: string[],
}
const CSwiper: React.FC<myProps> = ({
    slidesPerView = 1,
    spaceBetween = 0,
    ...props
}) => {
    const slides = [];
    for (let i = 0; i < props.pictures.length; i++) {
        slides.push(
            <SwiperSlide key={i}>
                <Card className="h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">{props.titles[i]}</p>
                        <h4 className="text-white font-medium text-large">{props.subtitles[i]}</h4>
                    </CardHeader>
                    <Image removeWrapper className="z-0 w-full h-full object-cover" src={props.pictures[i]} alt="Image" />
                </Card>
            </SwiperSlide>
        )
    }
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            className="z-0 w-full h-full object-cover"
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
        >
            {slides}
        </Swiper>
    )
}

export default CSwiper