import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'


const ModalWeather = () => {

   const [ localWeather, setLocalWeather ] = useState({})
   const [ futureWeather, setFutureWeather ] = useState({})
   const [ formatDate, setFormatDate ] = useState('')
   const { setWeatherModal } = useContext(ModalContext);

   const handleWeather = () => {
      axios.get(`https://api.weatherapi.com/v1/current.json?q=Mendoza&lang=es&key=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}`)
         .then((response) => {
            console.log('Response:', response.data);
            setLocalWeather(response.data)
         })
         .catch((error) => {
            console.error('Error:', error);
         })
   }

   const fechaActual = () => {
      const todayDate = new Date();

      const year = todayDate.getFullYear();
      const month = todayDate.getMonth() + 1; // Months start from 0, so 1 is added
      const day = todayDate.getDate();

      const lastDayOfMonth = new Date(year, month, 0).getDate();
      console.log("lastDayOfMonth", lastDayOfMonth);

      // Formatear la fecha como "YYYY-MM-DD"
      if( ( (day + 3) <= lastDayOfMonth) ){
         setFormatDate( `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day + 1 : day + 1}` )
      }else{
         setFormatDate( `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day }` )
      }

      console.log(formatDate);
   }

   const handleFutureWeather = () => {
      axios.get(`https://api.weatherapi.com/v1/forecast.json?q=Mendoza&dt=${formatDate}&lang=es&key=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}`)
         .then((response) => {
            console.log('Response:', response.data);
            setFutureWeather(response.data)
         })
         .catch((error) => {
            console.error('Error:', error);
         })
   }

   useEffect(() => {
      handleWeather()
      handleFutureWeather()
      fechaActual()
   }, [])

   return (
      <div className="flex flex-col w-11/12 h-full overflow-y-scroll rounded-md shadow-md
         md:w-[640px] md:h-5/6 md:self-center
         lg:w-[720px] ">

<header className="relative flex flex-col items-center justify-start gap-2 w-full rounded-t-md
            bg-[url('/assets/backgrounds/cbu-header-vertical.png')] bg-no-repeat bg-cover bg-bottom ">
            <div className="h-[150px] lg:h-[200px] flex pt-[4vh]">
               <h2 className="text-2xl font-semibold text-center text-white z-50
                  lg:text-3xl">
                  What will the weather <br className="md:hidden"></br> be like?
               </h2>
            </div> 
            <img 
               onClick={ () => setWeatherModal( false ) }
               src="./assets/images/btn-close.png" 
               alt=" Boton cerrar " 
               className="absolute top-4 right-4 h-10 cursor-pointer rounded-md z-50
                  transition-all delay-50 duration-150 hover:cursor-pointer hover:scale-90 hover:drop-shadow-md hover:rotate-90" 
            />
            <img src="./assets/images/weather-header-pieces-03.png" alt="Gift animation" className="h-16 absolute -bottom-4 right-5 jumping-element lg:h-20 lg:-bottom-4 lg:right-12" />
            <img src="./assets/images/weather-header-pieces-01.png" alt="Star animation" className="h-6 absolute top-2 left-12 jumping-element-reverse lg:h-12 lg:top-5 lg:left-20" />
            <img src="./assets/images/cbu-header-pieces-06.png" alt="Coins animation" className="h-4 absolute top-16 left-2 jumping-element-reverse lg:h-6 lg:top-16 lg:left-12" />
            <img src="./assets/images/weather-header-pieces-02.png" alt="" className="h-12 absolute -bottom-2 left-5 jumping-element lg:h-16 lg:-bottom-2 lg:left-10" />
         </header>

         <main className='flex flex-col items-center gap-8 grow bg-cream p-6 text-gray-dark text-sm'>

            <article className="flex flex-col gap-2 w-full">
               <section className="flex items-center gap-2 mb-4">
                  <img src={`${localWeather?.current?.condition?.icon}`} alt="" className='h-12' />
                  <h2 className='font-semibold text-lg'>Forecast: {localWeather?.current?.condition?.text}</h2>
               </section>
               <div className='flex flex-col flex-wrap gap-1'>
                  <span className='italic text-base'>Actual Temp:</span>
                  <span className='font-bold text-xl'> {localWeather?.current?.temp_c}° </span>
                  <hr className='w-56 border-1 border-green' />
               </div>
               <div className='flex flex-col flex-wrap gap-1'>
                  <span className='italic text-base'>What it feels like: </span>
                  <span className='font-bold text-xl'> {localWeather?.current?.feelslike_c}° </span>
                  <hr className='w-56 border-1 border-green' />
               </div>
               <div className='flex flex-col flex-wrap gap-1'>
                  <span className='italic text-base'>Humidity:</span>
                  <span className='font-semibold text-xl'> {localWeather?.current?.humidity}% </span>
                  <hr className='w-56 border-1 border-green' />
               </div>
               <div className='flex flex-col flex-wrap mt-4 gap-1'>
                  <span className='italic text-base'>Tomorrow:</span>
                  <span className='font-semibold text-sm'>{futureWeather?.forecast?.forecastday[0]?.day?.condition?.text}.</span>
                  <span className=' font-bold text-xl'> 
                     {futureWeather?.forecast?.forecastday[0]?.day?.maxtemp_c}° 
                     <span className='text-base mx-2'>(max.)</span>
                     - {futureWeather?.forecast?.forecastday[0]?.day?.mintemp_c}° 
                     <span className='text-base ms-2'>(min.)</span>
                  </span>
                  <hr className='w-56 border-1 border-green' />
               </div>
            </article>

         </main>

         <footer className='h-[8vh] bg-green flex items-center justify-center rounded-b-md'>
            <img src="./assets/images/names.png" alt="" className=" h-3/6" />
         </footer>

      </div>
   )
}



export default ModalWeather