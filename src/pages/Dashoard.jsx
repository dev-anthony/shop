import ProductCard from '../components/ProductCard'


function Dashoard() {
   
  return (
    <>
    {/* <div className='h-full bg-gray-300 px-20  w-full flex justify-between items-center'>
      <div className="text flex flex-col w-1/2 h-full overflow-hidden items-start justify-center">
        <h1 className='font-bold text-3xl'>SHOP ANYTHING & EVERYTHING!</h1>
        <p className="text-xl mb-6 mt-4 leading-relaxed">
          From fashion to electronics, groceries to gifts —<br></br> find it all in one place.  
          Enjoy unbeatable deals, fast delivery, and a seamless shopping experience.  
        </p>
        <button className="bg-white mt-4 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          View More
        </button>
      </div>
       <div className="image flex h-full w-1/2 flex-col">
        <img
          src="\src\assets\Still_life_of_wireless_cyberpunk_headphones___Premium_AI-generated_PSD-removebg-preview.png"
          alt="Shopping"
          className="w-full h-full object-cover "
        />
      </div> 
    </div> */}
    <div className="h-full bg-gray-300 px-4 md:px-20 py-7 w-full flex flex-col md:flex-row justify-between items-center bg-[url('/src/assets/abstract modern white and grey gradient color diagonal line pattern background.jpg')] bg-cover bg-center">
  {/* Text Section */}
  <div className="text flex flex-col w-full md:w-1/2 h-full overflow-hidden items-center md:items-start justify-center text-center md:text-left py-12 md:py-0">
    <h1 className="font-bold md:text-3xl text-xl">SHOP ANYTHING & EVERYTHING!</h1>
    <p className="md:text-xl md:mt-4 mt-2 leading-relaxed text-xs">
      From fashion to electronics, groceries to gifts — find it all in one place.
      Enjoy unbeatable deals, fast delivery, and a seamless shopping experience.
    </p>
    <button className="bg-white shadow md:mt-4 mt-2 md:text-xl text-xs text-black md:px-6 md:py-3 px-3 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition">
      View More
    </button>
  </div>

  {/* Image Section (hidden on small screens) */}
  <div className="image hidden md:flex h-full w-full md:w-1/2 flex-col">
    <img
      src="/src/assets/Still_life_of_wireless_cyberpunk_headphones___Premium_AI-generated_PSD-removebg-preview.png"
      alt="Shopping"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    <ProductCard/>
    </>
  );
}

export default Dashoard