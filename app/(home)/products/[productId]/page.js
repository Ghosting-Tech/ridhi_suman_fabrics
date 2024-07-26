
// import Image from "next/image";
// import ProductCarousel from "@/components/carousel/ProductCarousel";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import Link from "next/link";
// import { Carousel } from "@material-tailwind/react";
import ImageSlider from '@/components/layout/products/productDetails/ImageSlider'
import ProductInfo from "@/components/layout/products/productDetails/ProductInfo";

const fetchProductData=async(productId)=>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`, {
      cache: 'no-store' // Ensure fresh data fetching
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log('Error fetching product data:', error);
    return null;
  }
}


export default async function  ProductData({params:{productId}}) {
 
  const productData = await fetchProductData(productId);
  
  return (
    <div className=' flex flex-col md:flex-row'> 
    <ImageSlider data={productData ?.images}/>
   <ProductInfo product={productData}/>
    </div>
  )
}














// const ProductPage = () => {
//   const [bigImage, setBigImage] = useState("/image/image.png");
//   const [smallImages, setSmallImages] = useState([
//     "/category/other-site/image1.jpg",
//     "/category/other-site/image2.jpg",
//     "/category/other-site/image3.jpg",
//     "/category/other-site/image4.jpg",
//     "/category/other-site/image1.jpg",
//     "/category/other-site/image2.jpg",
//     "/category/other-site/image3.jpg",
//     "/category/other-site/image4.jpg",
//   ]);

//   const handleImageClick = (index) => {
//     const newBigImage = smallImages[index];
//     const newSmallImages = [...smallImages];
//     newSmallImages[index] = bigImage;
//     setBigImage(newBigImage);
//     setSmallImages(newSmallImages);
//   };


//   const [mainImage, setMainImage] = useState("/category/other-site/image1.jpg");

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//   };

//   const handleMainImageClick = () => {
//     window.open(mainImage, "_blank");
//   };

//   return (
//     <>
//       <div className="flex flex-col md:flex-row my-5">
//         {/* Start Pic Part */}
//         <div className="flex w-full lg:w-[45%] flex-col px-2 lg:px-10">
//           <div className="mb-2 flex justify-center md:h-[37rem]">
//             <Image
//               src={mainImage}
//               width={493}
//               layout="responsive"
//               height={677}
//               className="w-full object-cover  rounded-lg"
//               onClick={handleMainImageClick}
//             />
//           </div>
//           <ImageSlider
//             images={smallImages}
//             onThumbnailClick={handleThumbnailClick}
//           />
//         </div>
//         {/* End Pic Part */}
//         {/* Text part */}
       
//       </div>
//       <ProductCarousel />
//     </>
//   );
// };

// export default ProductPage;
