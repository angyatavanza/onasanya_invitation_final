import { ModalContext } from "../../context/ModalContext"
import { useContext, useState } from "react"
import './ModalAccounts.css'


const ModalAccounts = () => {

   const { setModal } = useContext(ModalContext);
   const [ copied, setCopied ] = useState(false);

   const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 1000);
   }

   return (
      <div className="flex flex-col w-11/12 rounded-md overflow-y-scroll shadow-md h-full
         md:w-[640px] md:h-5/6 md:self-center
         lg:w-[720px]">

         <header className="relative flex flex-col items-center justify-start gap-2 w-full rounded-t-md
            bg-[url('/assets/backgrounds/cbu-header-vertical.png')] bg-no-repeat bg-cover bg-bottom ">
            <div className="h-[150px] md:h-[150px] lg:h-[150px] flex pt-[4vh]">
               <h2 className="text-2xl font-semibold text-center text-white z-50
                  lg:text-3xl">
                  The <br className="md:hidden"></br> details
               </h2>
            </div> 
            <img 
               onClick={ () => setModal( false ) }
               src="./assets/images/btn-close.png" 
               alt=" Boton cerrar " 
               className="absolute top-4 right-4 h-10 cursor-pointer rounded-md z-50
                  transition-all delay-50 duration-150 hover:cursor-pointer hover:scale-90 hover:drop-shadow-md hover:rotate-90" 
            />
            <img src="./assets/images/cbu-header-pieces-06.png" alt="Star animation" className="h-4 absolute top-2 left-12 jumping-element-reverse lg:h-5 lg:top-5 lg:left-20" />
            <img src="./assets/images/cbu-header-pieces-01.png" alt="" className="h-6 absolute bottom-2 left-5 jumping-element lg:h-8 lg:-bottom-2" />
         </header>

         <main className='flex flex-col items-center gap-8 grow bg-cream p-6 text-gray-dark text-sm'>
            <img src="./assets/images/1.png" alt="" className='flex flex-col items-center gap-8 grow bg-cream p-6 text-gray-dark text-sm'/>
            <img src="./assets/images/2.png" alt="" className='flex flex-col items-center gap-8 grow bg-cream p-6 text-gray-dark text-sm'/>
            {/* Patagonia Bank Section */}
           

            {/* Western Union Section */}
            

            {/* Western Union Section */}
         

               <article className='flex flex-col gap-3 items-center mt-2'>
                  <hr className='w-48 border border-[#5D7551]' />
                  <h2 className='text-lg font-medium'>Thank you</h2>
               </article>

         </main>

         <footer className='h-[8vh] bg-green flex items-center justify-center rounded-b-md'>
            <img src="./assets/images/names.png" alt="" className=" h-3/6" />
         </footer>

      </div>
   )
}

export default ModalAccounts
