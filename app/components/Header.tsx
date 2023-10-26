export default function Header() {
  return (
    <main className="grid gap lg:grid-cols ms:grid-cols-1 bg-stone-100">
      <div className=" md:col-span-2 lg:col-span-3 mt-4 text-center text-white">
      <div className="place-items-center rounded-sm pb-2">
        <a href="/curso_html.html">
          <div className="flex justify-center">
            <img src="/img/image.svg" alt="" />
          </div>
          <div className="text-center text-slate-600">
            <h1>Choose your plan</h1>
            <h4 className="text-2xl">Make your best tour plan with us</h4>
            <p>Select or Search your best plans</p>
            <p>#TravelPhotography #InstaTravel <br /> #TravelCouples #TravelGoals #SoloTravel <br /> #TravelInspiration #PassportReady</p>
          </div>
          <h4 className="text-center text-white bg-black w-24 rounded hover:bg-black hover:text-white ">Find</h4>
        </a>
      </div>
      </div>
      <div className="bg-white	 place-items-center rounded-sm pb-2">
        <a href="#">
          <div className="flex justify-center">
            <img src="/img/image2.svg" alt="" />
          </div>
          <div className="bg-white text-center text-slate-600">
            <h1>A story about a journey</h1>
            <h4 className="text-2xl">Thailand trip in december</h4>
            <p>Select or Search your best plans</p>
            <p>#TravelPhotography #InstaTravel <br /> #TravelCouples #TravelGoals #SoloTravel <br /> #TravelInspiration #PassportReady</p>
          </div>
          <h4 className=" text-white bg-black w-24 rounded hover:bg-black hover:text-white ">Find</h4>

        </a>
      </div>
      <div className="place-items-center rounded-sm pb-2">
        <a href="#">
          <div className="text-center text-5xl">
            <h4>Check your tour plans</h4>
          </div>
          <div className="flex justify-center">
            <img src="/img/image3.svg" alt="" />
          </div>
          <div className="flex justify-between">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$455/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Confirm your group tour recent packages</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.png" alt="" />
            <h4> Morocco</h4>
          </div>
        </a>
      </div>

      <div className="place-items-center rounded-sm pb-2">
        <a href="#">
          <div className="flex justify-center">
            <img src="/img/image4.svg" alt="" />
          </div>
          <div className="flex justify-between">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$405/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Make your adventures comfortable</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.png" alt="" />
            <h4>  Switzerland</h4>
          </div>
        </a>
      </div>
      <div className="place-items-center rounded-sm pb-2">
        <a href="#">
          <div className="flex justify-center">
            <img src="/img/image5.svg" alt="" />
          </div>
          <div className="flex justify-between">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$355/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Get secured tour plan with your spouse</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.png" alt="" />
            <h4> Singapore</h4>
          </div>
        </a>
      </div>
      <div className="place-items-center rounded-sm pb-2">
        <a href="#">
          <div className="flex justify-center">
            <img src="/img/image6.svg" alt="" />
          </div>
          <div className="flex justify-between">
            <h4 className="text-center ">Team tour</h4>
            <h4 className="text-right ">$400/Person</h4>
          </div>
          <div>
            <h3 className="text-center text-2xl">Explore the paris streets at peace</h3>
          </div>
          <div className="flex justify">
            <img src="/img/map.png" alt="" />
            <h4>Paris</h4>
          </div>
        </a>
      </div>

    </main>
  )
}