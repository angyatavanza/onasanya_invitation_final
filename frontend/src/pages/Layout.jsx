import Arrows from "../components/Arrows/Arrows"
import Button from "../components/Button/Button"
import ButtonGift from "../components/ButtonGift/ButtonGift"
import Carousel from "../components/Carousel/Carousel"
import Countdown from "../components/Countdown/Countdown"
import CurvedBottomSection from "../components/CurvedBottomSection/CurvedBottomSection"
import CurvedTopSection from "../components/CurvedTopSection/CurvedSection"
import ImageComponent from "../components/ImageComponent/ImageComponent"
import InfoSection from "../components/InfoSection/InfoSection"
import MainHeadline from "../components/MainHeadline/MainHeadline"
import Portrait from "../components/Portrait/Portrait"
import Spinner from "../components/Spinner/Spinner"
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import ModalContainer from "../components/ModalContainer/ModalContainer"
import ModalAccounts from "../components/ModalAccounts/ModalAccounts"
import ModalConfirm from "../components/ModalConfirm/ModalConfirm"
import ModalWeather from "../components/ModalWeather/ModalWeather"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import SectionContainerElement from "../components/SectionContainerElement/SectionContainerElement"


const Layout = () => {

   const { modal, confirmationModal, weatherModal, sent } = useContext(ModalContext);

   return (
      <div className={` relative flex flex-col items-center overflow-hidden
         ${confirmationModal || weatherModal || modal ? ' h-screen' : 'h-min-screen'} `
      }>

         <ButtonGift />

         {/* Modals --------------------------------------- */}
         <ModalContainer isOpen={ modal }>
            <ModalAccounts />
         </ModalContainer>
         
         <ModalContainer isOpen={ weatherModal }>
            <ModalWeather />
         </ModalContainer>
         
         <ModalContainer isOpen={ confirmationModal }>
            <ModalConfirm />
         </ModalContainer>


         {/* 1° Portrait Section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-[100vh] text-sm bg-cream pt-8 px-8 overflow-hidden z-20">
            <Spinner />
            <Portrait />
            <MainHeadline />
            <Arrows />
            <CurvedTopSection bgColor={"bg-mustard"} />
         </section>

         {/* 2° Countdown, maps and schelude section --------------------------------------- */}
         <section className="relative flex flex-col items-center justify-center w-full bg-mustard h-fit px-8 pb-4 z-30
            lg:px-8 lg:pb-20">

            <Countdown />
            <Button
               buttonText={ 'View our Invite' }
               colorCode={"bg-green"}
               url={'calendar'}
            />

            {/* Church and party container ---------- */}
            <SectionContainer>

               {/* Church section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/church-icon.png"}
                     alt={"church icon"}
                  />
                  <InfoSection
                     header={"Ceremony | 3:00 pm"}
                     subtitle={"Holt Chapel"}
                     lineColorCode={"border-green"}
                  >
                     Our wedding ceremony will take place at the Holt Chapel at Elon University at 3:00 PM. Doors will open at 2:30 PM.
                  </InfoSection>
                  <Button
                     buttonText={"How do I get there?"}
                     colorCode={"bg-green"}
                     url={'church'}
                  />
               </SectionContainerElement>

               {/* Party section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/heart-icon.png"}
                     alt={"Icono música"}
                  />
                  <InfoSection
                     header={"Cocktail Hour | 4:45 pm"}
                     subtitle={"The Inn at Elon"}
                     lineColorCode={"border-green"}
                  >
                     Following the ceremony, please join us for a cocktail hour at 4:45 PM at the Inn at Elon.
                  </InfoSection>
                  <Button
                     buttonText={"How do I get there?"}
                     colorCode={"bg-green"}
                     url={'salon'}
                  />
               </SectionContainerElement>

               {/* Present section (only Desktop) ---------- */}
               <SectionContainerElement mobileView={ 'off' }>
               <ImageComponent
                     src={"/assets/images/music-icon.png"}
                     alt={"Icono música"}
                  />
                  <InfoSection
                     header={"Reception | 6:00 pm"}
                     subtitle={"The Inn at Elon"}
                     lineColorCode={"border-green"}
                  >
                     Following the cocktail hour, the reception will begin at 6:00 PM at the Inn at Elon.
                  </InfoSection>
                  <Button
                     buttonText={'View all the Details'}
                     colorCode={'bg-green'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>


            </SectionContainer>

         </section>

         {/* 3° Music & clothes section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-fit text-sm bg-green px-8 pt-20 pb-32 z-20
            lg:pb-40">
            <CurvedBottomSection bgColor={"bg-mustard"} />

            {/* Dress and music container ---------- */}
            <SectionContainer>

               {/* Dress section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/dress-icon.png"}
                     alt={"Icono vestimenta"}
                     margin={"disabled"}
                  />
                  <div className="flex flex-col items-center">
                     <InfoSection
                        header={'What do I wear?'}
                        subtitle={'Dresscode: We kindly request formal attire for the evening. If you need inspiration for formal attire, you are welcome to view inspiration on Pinterest! '}
                        lineColorCode={'border-mustard'}
                     >
                     </InfoSection>
                     <Button
                        buttonText={'Weather on March 8th'}
                        colorCode={'bg-mustard'}
                        action={'openWeatherModal'}
                     />
                  </div>
               </SectionContainerElement>

               {/* Music section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"Plane baile"}
                  />
                  <InfoSection
                     header={"Accommodations"}
                     lineColorCode={'border-mustard'}
                  >
                     While we do not have reserved room blocks, we recommend staying at: DoubleTree by Hilton Greensboro or Marriott Greensboro Downtown
                  </InfoSection>
                  <Button
                     buttonText={"Book Accomodations"}
                     widthClass={"w-64"}
                     colorCode={"bg-mustard"}
                     url={'spotify'}
                  />
               </SectionContainerElement>
               {/* Confirmation section (only Desktop) ---------- */}
               <SectionContainerElement mobileView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/confirm-icon.png"}
                     alt={"Icono confimación"}
                     margin={"disabled"}
                  />
                  <InfoSection
                     header={'Ready to RSVP?'}
                     lineColorCode={'border-mustard'}
                  >
                     We hope you can joing us! Please RSVP by February 21st at 11 PM to confirm your attendance at our event so we can finalize arrangements.

                  </InfoSection>
                  <Button
                     buttonText={"RSVP Now"}
                     widthClass={"w-64"}
                     colorCode={"bg-mustard"}
                     url={'calendar'}
                  />
               </SectionContainerElement>

            </SectionContainer>

            <CurvedTopSection bgColor={"bg-cream"} />
         </section>

         {/* 4° Confirmation section --------------------------------------- */}
         <section className="relative flex flex-col items-center h-fit w-full text-sm bg-cream px-8 z-20
            sm:pb-24 md:pb-0 md:px-0">

            {/* Confirmation and present container ---------- */}
            <SectionContainer>

               {/* Confirmation section ---------- */}
               <SectionContainerElement desktopView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/confirm-icon.png"}
                     alt={"Icono confimación"}
                     margin={"disabled"}
                  />
                  <InfoSection
                     header={'¿Hay equipo?'}
                     lineColorCode={'border-mustard'}
                     textColorCode={'text-gray-dark'}
                  >
                     Esperamos que puedas acompañarnos.
                     PD: Si no confirmás nos dolerá
                     el bolsillo (y el alma).

                  </InfoSection>
                  <Button
                     buttonText={ sent ? 'Formulario enviado' : 'Confirmar asistencia' }
                     disabled={ sent }
                     colorCode={'bg-green'}
                     action={'openConfirmationModal'}
                  />
               </SectionContainerElement>

               {/* Present section ---------- */}
               <SectionContainerElement desktopView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"plane icon"}
                  />
                  <InfoSection
                     header={"¿Qué les regalo?"}
                     lineColorCode={"border-mustard"}
                     textColorCode={"text-gray-dark"}
                  >
                     ¿El mejor regalo? tu presencia,
                     pero si querés ayudarnos a cumplir
                     un sueño hacé click en el botón.

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     
                     colorCode={'bg-green'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>

            </SectionContainer>

            <section className="hidden lg:flex lg:w-full lg:justify-center">
               <Carousel />
            </section>


         </section>

         {/* 5° Carousel section --------------------------------------- */}
         <section className="relative flex justify-center items-end bg-cream w-full z-20
            sm:hidden">
            <Carousel />
         </section>


      </div>
   );
}

export default Layout