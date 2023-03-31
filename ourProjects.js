import { useState } from 'react';
import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import pageData from "../../DB/singlePageData.json";
import "./ourProjects.scss"

import { setLangData, setSelectedLang } from "../../redux/Functions/actions";
import Translations from '../../components/translations/translations';
import { connect } from 'react-redux';



const OurProjects = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    getFiltersFromDB();
  }, [window.location.reload])

  const [shouldShowFilters, setShouldShowFilters] = useState("hideFilters")
  const [filteredData, setFilteredData] = useState("")
  const [filterOptions, setFilterOptions] = useState([])

  function getFiltersFromDB() {
    setFilterOptions([...new Set(pageData.map((el) => el.lloji_biznesit))])
  }
  // const map = new Map(Object.entries(filterOptions))
  // console.log('mapRamadani', map)
  function showFilter() {
    setShouldShowFilters('showFilters');
    if (shouldShowFilters == "showFilters") {
      setShouldShowFilters("hideFilters");
    }
  }
  function filterProjects(e) {
    setFilteredData(pageData.filter((el) => el?.lloji_biznesit == e));
  }
  // console.log('filteredData', filteredData?.length)
  return (
    <div className="container ">
      <div className=" allProjects">
        <div className="tekstiProjekteveTengjashme">
          <div className="row">
            <h1 className='titulliProjekteve col-12'> {Translations(props?.langData, props?.selected_lang, 'projektetErealizuara')}</h1>
            <div className="row ">

              <p className='filter col-6'>
                <button onClick={showFilter}>
                  <i className="fas fa-light fa-sliders filter_icon" />  {Translations(props?.langData, props?.selected_lang, 'FiltroLabel')}
                </button>
              </p>
              <p className='numrimiProjekteve col-6'>{Translations(props?.langData, props?.selected_lang, 'ShowingLabel')}: {filteredData?.length !== 0 ? filteredData?.length : pageData?.length} {Translations(props?.langData, props?.selected_lang, 'ProjekteLabel')}</p>
            </div>
            <div className={"container " + shouldShowFilters}>
              <hr className='vijaNdarese col-12' />
              <div className="d-flex flex-wrap">
                {shouldShowFilters == "showFilters" ? filterOptions.map((el) =>
                  <button className=' filter_buttons' onClick={() => { filterProjects(el) }}> 
                  {Translations(props?.langData, props?.selected_lang, el)}
                  {/* {el} */}
                  </button>
                )
                  :
                  ""
                }
              </div>
            </div>

          </div>
        </div>
        <div className="row mt-4">
          {filteredData !== "" ?
            filteredData?.map((el) => {
              return (
                <Link data-aos="fade-right" data-aos-duration="1000" className=" col-md-6 col-12 singleCard" to={el?.pageUniqueURL}>
                  <div className='' style={{ backgroundImage: `url(${el?.bg_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "415px" }} />
                  <div className="image_info">
                    <h5 className="cardTitle mb-5">{el?.obijektiName}</h5>
                    <div className="cardText mb-3 ">
                      <i className="fas fa-map-marker-alt  " aria-hidden="true" /> &nbsp;
                      {Translations(props?.langData, props?.selected_lang, el?.location)}
                    </div>
                  </div>
                </Link>
              )
            })
            :
            pageData?.map((el) => {
              return (
                <Link data-aos="fade-right" data-aos-duration="1000" className=" col-md-6 col-12 singleCard" to={el?.pageUniqueURL}>
                  <div className='' style={{ backgroundImage: `url(${el?.bg_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "415px" }} />
                  <div className="image_info">
                    <h5 className="cardTitle mb-5">{el?.obijektiName}</h5>
                    <div className="cardText mb-3 ">
                      <i className="fas fa-map-marker-alt  " aria-hidden="true" /> &nbsp;
                      {Translations(props?.langData, props?.selected_lang, el?.location)}
                      
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
        <hr className='vijaNdarese col-12 mb-4 mt-2' />
      </div>

    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OurProjects);
