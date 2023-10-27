export default function Footer() {
  return (
    <main>
      <div className="bg-cyan-50 flex flex-col md:flex-row space-y-4 md:space-x-4 items-start">
        <div className="place-items-center rounded-sm pb-2">

          <div className="text-center text-justify">
            <h1 className="text-2xl">About Us</h1>
            <h2>
              GTravel is your trusted travel agent specializing in booking packages around the world. <br />
              We provide exceptional service to cater to your travel needs and preferences.
              Book your next adventure with us and embark on a transformative journey that will create cherished memories for a lifetime.
            </h2>
          </div>
        </div>

        <div className="place-items-center rounded-sm ">
          <div className="text-center text-justify">
            <h1 className="text-2xl">Travel Info</h1>
            <h2>Menu</h2>
            <h2>Travel Guides</h2>
            <h2>Plans</h2>
          </div>
        </div>


        <div className="place-items-center rounded-sm pb-2">
          <div className="text-center text-justify">
            <h1 className="text-2xl">Information</h1>
            <h2>Gift Cards</h2>
            <h2>Find a Package</h2>
            <h2>Discounts</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <p className="text-center text-black mt-8 border-t">©Copyright UTFPR 2023-2 by Alunos de Web all rights reserved!</p>
        </div>
        <div className="md:w-1/4 flex justify-center space-y-4 mt-8 md:mt-0">
          <a href="http://www.facebook.com/seuenderece" className="text-center">
            <svg
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
          </a>
          <a className="text-center">
            <svg fill="black" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              {/* Seu ícone do segundo serviço */}
            </svg>
          </a>
          <a href="" className="text-center">
            <svg fill="black" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              {/* Seu ícone do terceiro serviço */}
            </svg>
          </a>
          <a href="" className="text-center">
            <svg fill="black" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              {/* Seu ícone do quarto serviço */}
            </svg>
          </a>
        </div>
      </div>

    </main>

  )
}