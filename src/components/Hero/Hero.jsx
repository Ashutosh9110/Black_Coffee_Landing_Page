// import BgImage from "../../assets/bg-slate.png"
import BgImage from "../../assets/bg-slate.png?url";
import BlackCoffee from "../../assets/black.png?url";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";


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

        <Navbar />

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
        {/* text content section */}
        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
          <motion.h1 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1
          }}
          className="text-7xl font-bold leading-tight ml-14">Your Black Coffee</motion.h1>
          <motion.div 
             initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{
               type: "spring",
               stiffness: 100,
               damping: 10,
               delay: 1.2
             }}
               className="relative">
          <div className="relative z-10 space-y-4">
              <h1 className="text-2xl">Black Lifestyle Lovers</h1>
              <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident at tempora fugiat accusantium quibusdam impedit, incidunt enim voluptatum.</h1>
          </div>
          <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
        </motion.div>
        </div>
        {/* Hero image section */}
        <div className="relative">
          <motion.img 
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.4
           }}
          src={BlackCoffee} 
          alt=""
          className="relative z-40 h-[400px] md:h-[700px] img-shadow"
          />
          {/* orange cirle ring */}
          <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"></div>

          {/* Big Text Section */}

          <div className="absolute -top-2 left-[200px] z-[1]">
          <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
            Your Black Coffee
          </h1>
          </div>
        </div>
        {/* third div section */}
        <motion.div 
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 1.2
           }}
            className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
          <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">Your Black Coffee</h1>
        <div className="relative">
          <div className="relative z-10 space-y-4">
            <h1 className="text-2xl">Dark Coffee </h1>
            <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident at tempora fugiat accusantium   voluptatum tempora fugiat voluptatum.</h1>
          </div>
          <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
        </div>
        </motion.div>
        <div></div>
        </div>
      </div>
    </section>
  </main>)
};

export default Hero;
