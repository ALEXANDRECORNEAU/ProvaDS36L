export default function Header() {
  return (
    <main className=" bg-stone-100">

      <div className="md:flex items-center  flex-row-reverse">
        <div className="basis-1/2 flex justify-center">
          <img src="/img/image.svg" alt="Descrição da Imagem" />
        </div>

        <div className="basis-1/2  text-justify text-black">
          <h1>Choose your plan</h1>
          <h2 className="text-2xl ">Make your best tour plan with us</h2>
          <h1>Select or Search your best plans</h1>
          <h6 className="text-[#64748B]">#TravelPhotography#InstaTravel <br />
            #TravelCouples#TravelGoals#SoloTravel
            #TravelInspiration#PassportReady</h6>
          <h4 className=" text-white bg-black w-24 rounded hover:bg-black hover:text-white ">Find</h4>
        </div>
      </div>

      <div className="bg-white flex flex-col md:flex-row justify-center items-center text-center">
        <div className="w-full md:w-1/2 lg flex justify-center">
          <img src="/img/image2.svg" alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white text-left text-slate-600">
            <h1 className="text-2xl">A story about a journey</h1>
            <div className="flex items-center">
              <img src="/img/pseudo.svg" alt="" />
              <h1>Jan-06-2023</h1>
              <div className="ml-auto flex items-center">
                <img src="/img/user.svg" alt="" />
                <h1>Adam Buleiver</h1>
              </div>
            </div>
            <h4 >Thailand trip in December</h4>
            <p>Experience the magic of Thailand with GTravel in
              December! Our expertly curated trip will take you on an
              unforgettable journey through this vibrant and captivating
              country. Discover the stunning beaches of Thailand's
              southern islands, such as Phuket, Krabi, or Koh Samui, where
              you can bask in the warm tropical sun and indulge in water
              sports.
              GTravel, your trusted travel partner, ensures a seamless
              and well-planned itinerary, including accommodations,
              transportation, and expert guides. Book your Thailand
              adventure with GTravel today and create lasting memories
              in the Land of Smiles.</p>
              <p className="underline text-black">Read More</p>
            <h4 className="text-white bg-black w-24 rounded hover:bg-black hover:text-white">Find</h4>
          </div>
        </div>
      
      </div>
      <h2 className="text-left text-[#64748B]">Pricing</h2>
            <h4 className="text-left text-5xl">Check your tour plans</h4>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="place-items-center rounded-sm pb-2">
       
          <div >
          </div>
          <div className="flex justify-center">
            <img src="/img/image3.svg" alt="" />
          </div>
          <div className="flex justify-between text-[#64748B]">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$455/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Confirm your group tour recent packages</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.svg" alt="" />
            <h4> Morocco</h4>
          </div>
        
      </div>

      <div className="place-items-center rounded-sm pb-2">
       
          <div className="flex justify-center">
            <img src="/img/image4.svg" alt="" />
          </div>
          <div className="flex justify-between text-[#64748B]">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$405/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Make your adventures comfortable</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.svg" alt="" />
            <h4>  Switzerland</h4>
          </div>
       
      </div>
      <div className="place-items-center rounded-sm pb-2">
        
          <div className="flex justify-center">
            <img src="/img/image5.svg" alt="" />
          </div>
          <div className="flex justify-between text-[#64748B]">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$355/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Get secured tour plan with your spouse</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.svg" alt="" />
            <h4> Singapore</h4>
          </div>
      
      </div>
      <div className="place-items-center rounded-sm  pb-2">
       
          <div className="flex justify-center">
            <img src="/img/image6.svg" alt="" />
          </div>
          <div className="flex justify-between text-[#64748B]">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$400/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Explore the paris streets at peace</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.svg" alt="" />
            <h4>Paris</h4>
          </div>
       
      </div>
      </div>
    </main>
  )
}