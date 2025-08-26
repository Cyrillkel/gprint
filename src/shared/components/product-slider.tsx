"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
// import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
// import { Badge } from "@/shared/components/badge"
import type { Product } from "@/shared/data/products-data"
import { useEffect, useRef } from "react"
import type SwiperCore from 'swiper'

// Импорт стилей Swiper
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface ProductSliderProps {
  products: Product[]
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const params = useParams()
  const locale = params.locale as string
  const swiperRef = useRef<SwiperCore>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return
      
      if (e.key === 'ArrowLeft') {
        swiperRef.current.slidePrev()
      } else if (e.key === 'ArrowRight') {
        swiperRef.current.slideNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])


  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-semibold font-heading holo-text-primary">Наша продукция</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          eventsTarget: '.product-swiper',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
       
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 16,
          },
        }}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/${locale}/products/${product.id}`} className="block group h-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">

                <div className="relative aspect-square overflow-hidden flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">                  <Image
                    src={product.image || "/sticker.png"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  </div>
           
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flip-card-back text-center flex items-center justify-center">
                    <p className="font-sans">{product.description}</p>
                    </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-base text-gray-800 mb-2 group-hover:text-purple-600 transition-colors font-heading">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2 flex-1 font-sans">{product.description}</p>

                  {/* <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-purple-600">{product.price} ₽</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">В наличии</span>
                  </div> */}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные кнопки навигации */}
      <div className="swiper-button-prev-custom absolute right-20 top-0 -translate-y-1/4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors -ml-5">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div className="swiper-button-next-custom absolute right-10 top-0 -translate-y-1/4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors -mr-5">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Кастомная пагинация */}
      <div className="swiper-pagination-custom flex justify-center mt-6 gap-2 abs"></div>
    </div>
  )
}
