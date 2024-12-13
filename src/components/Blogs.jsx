import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules"; // Correct import for v9+
import { blogs } from "../data";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Blogs
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <Swiper
          // spaceBetween={30}
          centeredSlides={true}
          // pagination={{ clickable: true }}
          // navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          modules={[Autoplay]} // Register modules
          className="mySwiper"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => {
                  navigate(`/${blog.title}`);
                }}
                className="bg-white cursor-pointer rounded-lg shadow-md p-4 w-60 h-72 flex-shrink-0"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {blog.title}
                  <img
                    src={blog.img}
                    alt="Blog"
                    className="w-full h-36 object-cover rounded-t-md"
                  />
                </h3>
                <p className="text-gray-600">{blog.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
