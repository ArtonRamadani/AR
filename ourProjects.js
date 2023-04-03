import './homepage.scss';
import React, { useState } from 'react';
import SliderImg1 from "../../images/dashboard-images/prishtina-mall/PrishtinaMall1.jpg"
import SliderImgArtConstruction from "../../images/dashboard-images/art-construction/artconstruction1.jpg"
import SliderImg2 from "../../images/dashboard-images/Spitali-Onkologjik-Kazakistan_fin.png"
import SliderImg3 from "../../images/dashboard-images/Ice_Palace_Astana/icepallace1.jpg"
import PVCimg from "../../images/products/M-technologie-PVC-Product-2.png"
import AluminProdukt from "../../images/products/Produktet-e-Aluminit.jpg"
import SpiderGlassIMG from "../../images/products/Spider-Glass.png"
import imageDescription from "../../images/dashboard-images/M-technologie-PVC-Product-2_5-removebg-preview.png"
import ZgjedhShqip from "../../images/dashboard-images/zgjedh.png"
import ZgjedhEN from "../../images/dashboard-images/zgjedh_en.png"
import imagePrishtina from "../../images/dashboard-images/benefitet.png"
import imagePrishtinaMobile from "../../images/dashboard-images/benefitet_mobile.png"
import galleryData from "../../DB/singlePageData.json"
import ourPartners from "../../DB/partneret"
import Translations from '../../components/translations/translations';
import Slider from "react-slick";
import { Link } from 'react-router-dom';



// images of the slider with z-index !
import img1 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_1.1.jpg'
import img2 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_1.2.jpg'
import img3 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_1.3.jpg'
import img5 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_2.1.jpg'
import img6 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_2.2.png'
import img7 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_4.png'
import img8 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_5.png'
import img9 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_6.png'
import img10 from '../../images/complex_slider_img/ArtConstruction_M-Technologie_960x960_7.png'
import SliderImages from "../../DB/sliderImages.json"

import { setLangData, setSelectedLang } from "../../redux/Functions/actions";
import { connect } from 'react-redux';


import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

SwiperCore.use([Navigation, Pagination]);

// import required modules
const Homepage = (props) => {
  let slicedGalley = galleryData.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);


  const handleChange = (event) => {

    const { value } = event.target;
    // while (value) {
    //   var test = 0. + value

      console.log('testGashi', value)
    //   break;
    // }
   
    setActiveIndex(value);
    
    swiper.slideTo(value, 300, true);
  };

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    onSwiper: (swiper) => setSwiper(swiper),
  };
  // Slick Slider Settings
  var slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var firstSlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    cssEase: "linear"
  };
  const style1 = {
    backgroundPosition: "4%",
  }

  // const { imageIndex } = this.state;
  return (
    <>
      <div className="homepage_layout">
        <div className='opening_parent_slider'>
          <Slider {...firstSlickSettings}>
            <div>
              <img src={SliderImg1} className="images_homepage d-block w-100" style={{ objectPosition: "left" }} alt="..." />
              <div className="container " >
                <h1 className='ImageDescription col-md-6 col-5 ' data-aos="fade-right" data-aos-duration="1500" dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'CilesiInovacionDheZgjidhjeDuhur')}` }}></h1>
                <div className="lokacioni" data-aos="fade-right" data-aos-duration="1500" >
                  <div className="d-flex">
                    <h4 className='emri'>{Translations(props?.langData, props?.selected_lang, 'projekti')}</h4>
                    <h4 className='emriNderteses'> &nbsp;{Translations(props?.langData, props?.selected_lang, 'PrishtinaMallNameLabel')} </h4>
                  </div>
                  <h4 className='emriNderteses '><i className="fa fa-location-dot" /> &nbsp;{Translations(props?.langData, props?.selected_lang, 'PrishtinaNameLabel')}</h4>
                </div>
                <a href="/projects" className='shikoProjektin' data-aos-duration="2000" > {Translations(props?.langData, props?.selected_lang, 'shikoProjektet')}</a>
              </div>
            </div>
            <div>
              <img src={SliderImgArtConstruction} className="images_homepage d-block w-100" alt="..." />
              <div className="container " >
                <h1 className='ImageDescription col-md-6 col-5 ' data-aos="fade-right" data-aos-duration="1500" dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'CilesiInovacionDheZgjidhjeDuhur')}` }}></h1>
                <div className="lokacioni" data-aos="fade-right" data-aos-duration="1500" >
                  <div className="d-flex">
                    <h4 className='emri'>{Translations(props?.langData, props?.selected_lang, 'projekti')}</h4>
                    <h4 className='emriNderteses'> &nbsp; Art Construction</h4>
                  </div>
                  <h4 className='emriNderteses '><i className="fa fa-location-dot" />&nbsp; {Translations(props?.langData, props?.selected_lang, 'PrishtinaNameLabel')}</h4>
                </div>
                <a href="/projects" className='shikoProjektin' data-aos-duration="3000" > {Translations(props?.langData, props?.selected_lang, 'shikoProjektet')}</a>
              </div>
            </div>
            <div>
              <img src={SliderImg2} className=" images_homepage d-block w-100" alt="..." />
              <div className="container" >
                <h1 className='ImageDescription col-md-6 col-5 ' data-aos="fade-right" data-aos-duration="5500" dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'CilesiInovacionDheZgjidhjeDuhur')}` }}></h1>
                <div className="lokacioni" data-aos="fade-right" data-aos-duration="5500" >
                  <div className="d-flex">
                    <h4 className='emri'>{Translations(props?.langData, props?.selected_lang, 'projekti')}</h4>
                    <h4 className='emriNderteses'> &nbsp;{Translations(props?.langData, props?.selected_lang, 'SpitaliOnkologjik')}</h4>
                  </div>
                  <h4 className='emriNderteses '><i className="fa fa-location-dot" /> &nbsp;{Translations(props?.langData, props?.selected_lang, 'kazakistan')}</h4>
                </div>
                <a to={"/projects"} className='shikoProjektin' data-aos-duration="6000" > {Translations(props?.langData, props?.selected_lang, 'shikoProjektet')}</a>
              </div>
            </div>
            <div>
              <img src={SliderImg3} className=" images_homepage d-block w-100" alt="..." />
              <div className="container" >
                <h1 className='ImageDescription col-md-6 col-5 ' data-aos="fade-right" data-aos-duration="1500" dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'CilesiInovacionDheZgjidhjeDuhur')}` }}></h1>
                <div className="lokacioni" data-aos="fade-right" data-aos-duration="1500" >
                  <div className="d-flex">
                    <h4 className='emri'>{Translations(props?.langData, props?.selected_lang, 'projekti')}</h4>
                    <h4 className='emriNderteses'> &nbsp;{Translations(props?.langData, props?.selected_lang, 'PallatiAkullitNameLabel')} </h4>
                  </div>
                  <h4 className='emriNderteses ms-2'><i className="fa fa-location-dot" />&nbsp; {Translations(props?.langData, props?.selected_lang, 'AstanaNameLabel')}</h4>
                </div>
                <a to={"/projects"} className='shikoProjektin' data-aos-duration="3000" > {Translations(props?.langData, props?.selected_lang, 'shikoProjektet')}</a>
              </div>
            </div>
          </Slider>
        </div>
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////// SECOND PART OF PAGE ///////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}

        <div className="slick_mobile_slider ">
          <h1 className=' col-10 mx-auto prorduketTitle pt-3 pb-3'>{Translations(props?.langData, props?.selected_lang, 'produkteTeKualitetitTeLarte')}</h1>
          <Slider {...slickSettings}>
            <div>
              <div className="card col-md-3 col-11 mx-auto border-0">
                <img className="card-img-top " alt="Alumni Project" src={AluminProdukt} />
                <div className="description mt-4">
                  <h5 className=" name-hide cardTitle">{Translations(props?.langData, props?.selected_lang, 'produkteNgaAlumini')}</h5>
                  <p className="card-text ">{Translations(props?.langData, props?.selected_lang, 'pershkrimiProdukteveTeAluminit')}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card col-md-3 col-11 mx-auto border-0">
                <img className="card-img-top" src={PVCimg} />
                <div className="description mt-4">
                  <h5 className=" name-hide cardTitle">PVC</h5>
                  <p className="card-text ">{Translations(props?.langData, props?.selected_lang, 'tekstiProduktevePVC')}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card col-md-3 col-11 mx-auto border-0">
                <img className="card-img-top " src={SpiderGlassIMG} />
                <div className="description mt-4">
                  <h5 className=" name-hide cardTitle">{Translations(props?.langData, props?.selected_lang, 'produkteNgaXhami')} </h5>
                  <p className="card-text ">{Translations(props?.langData, props?.selected_lang, 'tekstiProdukteveNgaXhami')}</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="container">
          <div className="materialet_punuese_container">
            <div className="col-md-12">
              <div className="materialet_punuese">
                <h1 className='porduketTitle pt-5 pb-5'>{Translations(props?.langData, props?.selected_lang, 'produkteTeKualitetitTeLarte')}</h1>
                <div className="aranzhoCardat pb-5 row " >
                  <Link to={"/products/alumin"} className="card col-md-3 col-12 "
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="500"
                    data-aos-offset="0"
                  >
                    <img className="card-img-top " alt="Alumni Project" src={AluminProdukt} />
                    <div className="description">
                      <h5 className=" name-hide cardTitle">{Translations(props?.langData, props?.selected_lang, 'produkteNgaAlumini')}</h5>
                      <p className="card-text ">{Translations(props?.langData, props?.selected_lang, 'pershkrimiProdukteveTeAluminit')}</p>
                    </div>
                  </Link>

                  <Link to={"/products/PVC"} className="card col-md-3 col-12 "
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="500"
                    data-aos-offset="0">
                    <img className="card-img-top" src={PVCimg} />
                    <div className="description">
                      <h5 className=" name-hide cardTitle">PVC</h5>
                      <p className="card-text ">{Translations(props?.langData, props?.selected_lang, 'tekstiProduktevePVC')}</p>
                    </div>
                  </Link>

                  <Link to={"/products/glass"} className="card col-md-3 col-12 "
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="500"
                    data-aos-offset="0">
                    <img className="card-img-top " src={SpiderGlassIMG} />
                    <div className="description">
                      <h5 className=" name-hide cardTitle">{Translations(props?.langData, props?.selected_lang, 'produkteNgaXhami')} </h5>
                      <p className="card-text ">{Translations(props?.langData, props?.selected_lang, 'tekstiProdukteveNgaXhami')}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}


        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////// MATERIALI PUNUES ///////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        <div className=" descriptionOfWork ">
          <div className="row m-0">
            <div className="col-md-6 col-12 image_background ">
              {/* <div className="circle1">
                <div className="d-flex">
                  <p className='numri1'>1</p>
                  <p className='glass_text  glass_text1'> {Translations(props?.langData, props?.selected_lang, 'zgjedhTekstiImazhi')} <strong> &nbsp; {Translations(props?.langData, props?.selected_lang, 'PROFILINTekstiImazhi')}</strong></p>
                </div>
              </div>
              <div className="circle2">
                <div className="d-flex">
                  <p className='numri2'>2</p>
                  <p className='glass_text glass_text2'> {Translations(props?.langData, props?.selected_lang, 'zgjedhTekstiImazhi')} <strong> &nbsp;{Translations(props?.langData, props?.selected_lang, 'XHAMINTekstiImazhi')}</strong></p>
                </div>
              </div>
              <div className="circle3">
                <div className="d-flex">
                  <p className='numri3'>3</p>
                  <p className='glass_text glass_text3'> {Translations(props?.langData, props?.selected_lang, 'zgjedhTekstiImazhi')} <strong> &nbsp;{Translations(props?.langData, props?.selected_lang, 'NgjyrenTekstiImazhi')}</strong></p>

                </div>
              </div> */}
              {/* {console.log('homepagePropsLanguage', props?.selected_lang)} */}
              {props?.selected_lang == "AL" ?
                <img className='pershkrimiXhamitPVC img-fluid col-6 col-12' src={ZgjedhShqip} alt="Glass Description" />
                : props?.selected_lang == "EN" ?
                  <img className='pershkrimiXhamitPVC img-fluid col-6 col-12 ' src={ZgjedhEN} alt="Glass Description" />
                  :
                  <img className='pershkrimiXhamitPVC img-fluid col-6 col-12 ' src={ZgjedhShqip} alt="Glass Description" />
              }
              {/* <img className='pershkrimiXhamitPVC col-6 col-12' src={imageDescription} alt="Glass Description" /> */}
            </div>
            <div className="col-md-6 image_description_background">
              <div className="container mt-5">
                <p className='profile_description_title mt-4' dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'ProjektoDritarënTëndeNëTreHapa')}` }}></p>
                <p className='profile_description_pharagraph col-md-7' dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'TekstiProjektimiDritares')}` }}></p>
                <a className='profile_project_button' href="/order">  {Translations(props?.langData, props?.selected_lang, 'ProjektoTekstiKrijoImazhin')} </a>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}




        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////// SLIDERI WITH Z-INDEX //////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}

        <div className="col-12 SliderDiv">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className='titulliSlider col-md-md-8'>{Translations(props?.langData, props?.selected_lang, 'PlanifikimiDheRealizimiDeriNfund')}</p>
                <p className='pershkrimiSlider col-md-10'>{Translations(props?.langData, props?.selected_lang, 'PershkrimiTekSlideriKompleks')}
                </p>
              </div>
              <div className="col-md-6 parent_complex_slider_div">
                <div className="image-wrapper ">
                  <div className="">
                    {/* <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 0 && imageIndex < 15 ? 1 : 0 }} src={img1} alt="SliderIMG1" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 15 && imageIndex < 30 ? 1 : 0 }} src={img2} alt="SliderIMG2" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 30 && imageIndex < 45 ? 1 : 0 }} src={img3} alt="SliderIMG2" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 45 && imageIndex < 60 ? 1 : 0 }} src={img6} alt="SliderIMG3" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 60 && imageIndex < 75 ? 1 : 0 }} src={img5} alt="SliderIMG2" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 75 && imageIndex < 90 ? 1 : 0 }} src={img7} alt="SliderIMG4" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 90 && imageIndex < 105 ? 1 : 0 }} src={img8} alt="SliderIMG5" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 105 && imageIndex < 120 ? 1 : 0 }} src={img9} alt="SliderIMG6" />
                    <img className="complexSliderIMG img-fluid col-md-12" style={{ opacity: imageIndex > 120 && imageIndex < 135 ? 1 : 0 }} src={img10} alt="SliderIMG6" /> */}
                    <Swiper {...params}
                      modules={[EffectCards]}
                      effect={"cards"}
                      onSwiper={(swiper) => console.log('swiper', swiper)}
                      onSlideChange={(e) => console.log('slide change', e)}
                      swipeable ={true}
                      className="mySwiper"  >
                      {SliderImages.map((el, index) => (
                        <SwiperSlide>
                          <div key={index}>
                            <img loading="lazy" className="complexSliderIMG img-fluid col-md-12" src={el?.img} alt={`Slide ${index}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="selector_style">
                  <input
                    type="range"
                    min="0"
                    max="40"
                    step="0.25"
                    value={activeIndex}
                    onChange={handleChange}
                  />
                  < p className="drag_and_discover_text  col-md-4 m-0">{Translations(props?.langData, props?.selected_lang, 'dragAndDiscoverSliderTekst')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////// IMAZHI ME TEKST /////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}

        <div className="col-md-12 imazhiPrishtineDiv">
          <img className='imazhiPrishtines' src={imagePrishtina} alt="" />
          <img className='imazhiPrishtinesMobile img-fluid' src={imagePrishtinaMobile} alt="" />
          <div className="pershkrimiPrishtine col-md-4 ">
            <p className='TitulliPrishtine col-md-10'>{Translations(props?.langData, props?.selected_lang, 'benifitetEdritareveTeKualitetitTeLarte')}</p>
            <hr className='vizaNdarese col-md-10' />
            <ul>
              <li>{Translations(props?.langData, props?.selected_lang, 'rriteVlerenShtepiake')}</li>
              <li>{Translations(props?.langData, props?.selected_lang, 'rritjaSigurinShpise')}</li>
              <li>{Translations(props?.langData, props?.selected_lang, 'reduktoPluhurinDheAlergjite')}</li>
              <li>{Translations(props?.langData, props?.selected_lang, 'RritKomoditetinNeShtepi')}</li>
              <li>{Translations(props?.langData, props?.selected_lang, 'ImprovedEnergyEfficiency')}</li>
              <li>{Translations(props?.langData, props?.selected_lang, 'reduktoZhurmen')}</li>
              <li>{Translations(props?.langData, props?.selected_lang, 'zgjedhjeMeMirembajtjeTeUlet')}</li>
            </ul>
          </div>
        </div>


        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}


        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////// PROJEKTET E REALIZUARA /////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}


        <div className="container  mt-5 projektetErealizuara">
          <h1 className='titulliProjekteve' dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'projektetErealizuara')}` }}></h1>
          <p className='pershkrimiProjekteveTeRealizuara' dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'tekstiPerProjektetErealizuara')}` }}></p>
          <div className="row">
            {slicedGalley?.map((el) => {
              return (

                <Link data-aos="fade-right" data-aos-duration="1000" className=" col-md-6 col-12 singleCard" to={el?.pageUniqueURL}
                >
                  <div className='imazhi'
                    style={{ backgroundImage: `url(.${el?.bg_img})` }}
                  />
                  <div className="image_info ">
                    <h5 className="cardTitle mb-5">{el?.obijektiName}</h5>
                    <div className="cardText mb-3 ">
                      <i className="fas fa-map-marker-alt locationMarker " aria-hidden="true" />{el?.location}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>


        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}




        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////// PARTNERET /////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}


        <div className="container mt-5 mb-5 partneretTane">
          {ourPartners.map((el, index) => {
            return (
              <img data-aos="fade-right" data-aos-duration="1000" src={el?.img_src} alt={el.title} />
            )
          })}
        </div>
      </div>
    </>
  )
}


const mapStateToProps = state => {
  return {
    selected_lang: state.data.selected_lang,
    langData: state.data.langData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLangData: () => dispatch(setLangData()),
    setSelectedLang: (lang) => dispatch(setSelectedLang(lang))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
