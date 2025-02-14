import React from "react";
import bannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";



const BannerStyle = {
  backgroundImage : `url(${bannerImg})`,
  backgroundSize : "cover",
  backgroundPosition : "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
}


const AppBanner = () => {

  return (
  <div className="container my-14">
    <div 
      style={BannerStyle}
      className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold">
              Download the app
            </h1>
            <p className="text-clip sm:px-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sunt voluptates omnis.{" "}
            </p>
            {/* Images link */}
            <div className="flex justify-center items-center gap-4">
            <a 
            href="#"
            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            >
              <img src={AppStoreImg} alt="" />
            </a>
            <a 
            href="#"
            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            >
              <img src={PlayStoreImg} alt="" />
            </a>
             </div>
          </div>
        </div>
      </div>
    </div>
    )
};




export default AppBanner;
