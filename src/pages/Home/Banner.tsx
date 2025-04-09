
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="w-[1440px] mx-auto mb-10 -my-10">
            <Swiper autoplay={{delay:2500}} grabCursor={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">

                <SwiperSlide className="w-full h-[700px] rounded">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/294/880/small/reading-book-web-banner-design-student-reading-book-on-stack-of-book-to-get-inspiration-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg" alt="" className="w-full h-[700px] rounded"/>
                </SwiperSlide>

                <SwiperSlide className="w-full h-[700px] rounded">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfDsoFBWuOIeC6UtAYjLZUFBGEsJGLaB1sw&s" alt="" className="w-full h-[700px] rounded"/>
                </SwiperSlide>

                <SwiperSlide className="w-full h-[700px] rounded">
                    <img src="https://t4.ftcdn.net/jpg/09/59/85/15/360_F_959851591_a8zeRwsrltQGld71Qt6JzwCFFiTytjML.jpg" alt="" className="w-full h-[700px] rounded"/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
