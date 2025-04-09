
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="w-[1440px] mx-auto mb-10 -my-10">
            <Swiper autoplay={{delay:2500}} grabCursor={true} modules={[ Autoplay , Pagination, Navigation]} className="mySwiper">

                <SwiperSlide className="w-full h-[700px] rounded relative">

                    <img src="https://t4.ftcdn.net/jpg/09/59/85/15/360_F_959851591_a8zeRwsrltQGld71Qt6JzwCFFiTytjML.jpg" alt="" className="w-full h-[700px] rounded"/>

                    <div className="absolute flex flex-col gap-2 gro items-center justify-center top-0 left-0 w-full h-full text-white backdrop-blur-sm rounded">
                        <h1 className="text-5xl font-bold">Fuel Your Mind with Books</h1>
                        <p className="w-[500px] text-center text-2xl">
                            Just like the body needs food, the mind needs knowledge.
                            Feed your curiosity, and your imagination will soar. 
                            Every book is a journey waiting to unfold.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="w-full h-[700px] rounded relative">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfDsoFBWuOIeC6UtAYjLZUFBGEsJGLaB1sw&s" alt="" className="w-full h-[700px] rounded"/>

                    <div className="absolute flex flex-col gap-2 gro items-center justify-center top-0 left-0 w-full h-full text-white rounded backdrop-blur-sm">
                        <h1 className="text-5xl font-bold">Read More, Learn More</h1>
                        <p className="w-[500px] text-center text-2xl">
                            Books hold the wisdom of the world. 
                            Dive deeper into knowledge and unlock endless opportunities. 
                            Your next breakthrough might be just one page away.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="w-full h-[700px] rounded relative">

                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/294/880/small/reading-book-web-banner-design-student-reading-book-on-stack-of-book-to-get-inspiration-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg" alt="" className="w-full h-[700px] rounded"/>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
