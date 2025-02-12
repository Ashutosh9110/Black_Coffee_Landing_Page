// import BgImage from "../../assets/bg-slate.png"
import BgImage from "../../assets/bg-slate.png?url";
import BlackCoffee from "../../assets/black.png?url";



// const bgImage = {
//   backgroundImage : `url(${BgImage})`,
//   backgroundSize : "cover",
//   backgroundPosition : "center",
//   backgroundRepeat: "no-repeat",
// }

const Hero = () => {
  return (
    <main className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BgImage})` }}>

    {/* // <main style={bgImage}> */}
    <section className="min-h-[750px] w-full">
      <div className="container">
        {/* Navbar Section */}
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
        {/* text content section */}
        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
          <h1 className="text-7xl font-bold leading-tight ml-14">Your Black Coffee</h1>
        <div className="relative">
          <div className="relative z-10 space-y-4">
            <h1 className="text-2xl">Black Lifestyle Lovers</h1>
            <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident at tempora fugiat accusantium quibusdam impedit, incidunt enim voluptatum.</h1>
          </div>
          <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
        </div>
        </div>
        {/* Hero image section */}
        <div className="relative">
          <img src={BlackCoffee} 
          alt=""
          className="relative z-40 h-[400px] md:h-[700px] img-shadow"
          />

        </div>
        {/* third div section */}
        <div></div>
        </div>
      </div>
    </section>
  </main>)
};

export default Hero;
