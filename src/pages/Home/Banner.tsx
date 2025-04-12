
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="w-full xl:w-[1440px] mx-auto mb-10 -my-10">
            <Swiper autoplay={{delay:2500}} grabCursor={true} modules={[ Autoplay , Pagination, Navigation]} className="mySwiper">

                <SwiperSlide className="w-full xl:h-[700px] rounded relative">

                    <img src="https://t4.ftcdn.net/jpg/09/59/85/15/360_F_959851591_a8zeRwsrltQGld71Qt6JzwCFFiTytjML.jpg" alt="" className="w-full h-[400px] xl:h-[700px] rounded"/>

                    <div className="absolute flex flex-col gap-2 gro items-center justify-center top-0 left-0 w-full h-full text-white backdrop-blur-sm rounded">
                        <h1 className="text-xl xl:text-5xl font-bold">Fuel Your Mind with Books</h1>
                        <p className="text-lg px-3 xl:w-[500px] text-center xl:text-2xl">
                            Just like the body needs food, the mind needs knowledge.
                            Feed your curiosity, and your imagination will soar. 
                            Every book is a journey waiting to unfold.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="w-full xl:h-[700px] rounded relative">

                    <img src="https://www.shutterstock.com/image-photo/old-books-quill-pen-vintage-600nw-1947616498.jpg" alt="" className="w-full h-[400px] xl:h-[700px] rounded"/>

                    <div className="absolute flex flex-col gap-2 gro items-center justify-center top-0 left-0 w-full h-full text-white rounded backdrop-blur-sm">
                        <h1 className="text-xl xl:text-5xl font-bold">Unlock the Power of Reading</h1>
                        <p className="text-lg px-3 xl:w-[500px] text-center xl:text-2xl">
                            Each book is a door to a new world.  
                            Discover ideas that spark change, stories that inspire,  
                            and knowledge that empowers your journey forward.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className="w-full xl:h-[700px] rounded relative">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfDsoFBWuOIeC6UtAYjLZUFBGEsJGLaB1sw&s" alt="" className="w-full h-[400px] xl:h-[700px] rounded"/>

                    <div className="absolute flex flex-col gap-2 gro items-center justify-center top-0 left-0 w-full h-full text-white rounded backdrop-blur-sm">
                        <h1 className="text-xl xl:text-5xl font-bold">Read More, Learn More</h1>
                        <p className="text-lg px-3 xl:w-[500px] text-center xl:text-2xl">
                            Books hold the wisdom of the world. 
                            Dive deeper into knowledge and unlock endless opportunities. 
                            Your next breakthrough might be just one page away.
                        </p>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
