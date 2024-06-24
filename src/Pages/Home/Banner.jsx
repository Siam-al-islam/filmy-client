import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";


const Banner = () => {
    return (
        <div>
            <div className='md:py-52 py-40 overflow-hidden'>
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={true}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="relative">
                                <div >
                                    <h1 className="md:text-6xl text-4xl font-bold text-white text-center">We cultivate careers</h1>
                                    <p className="md:text-xl text-white text-center uppercase">for emerging artists, celebrating and amplifying the significance of handmade objects and their creators.</p>
                                    <div className="text-center mt-8">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative">
                                <div >
                                    <h1 className="md:text-6xl text-4xl font-bold text-white text-center">We discover innovative artists</h1>
                                    <p className="text-xl text-white text-center uppercase">who push the limits of traditional methods and materials, pioneering new expressions and reshaping the future craft landscape.</p>
                                    <div className="text-center mt-8">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="">
                                <div >
                                    <h1 className="md:text-6xl text-4xl font-bold text-white text-center">We provide resources and amplify craft </h1>
                                    <p className="text-xl text-white text-center uppercase">LIVE like a king in our best houses</p>
                                    <div className="text-center mt-8">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;