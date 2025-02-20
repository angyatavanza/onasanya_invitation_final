import './Carousel.css'
const Carousel = () => {

   return (
      <section className='flex justify-center items-baseline relative z-40 w-[450px] h-72 pt-12 overflow-hidden
         lg:w-full lg:h-96 lg:pt-6 '>
         < img src="/assets/photos/img-01.JPG" className="pic01"/>
         < img src="/assets/photos/img-02.JPG" className="pic02"/>
         < img src="/assets/photos/img-03.JPG" className="pic03"/>
         < img src="/assets/photos/img-04.JPG" className="pic04"/>
         < img src="/assets/photos/img-05.JPG" className='pic05'/>
      </section>
   )
}

export default Carousel