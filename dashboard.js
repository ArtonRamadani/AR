import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loggMeIN,
  rmAuth,
  toggleMenu,
} from "../../../redux/Functions/actions";
import { PageStyle, PageTitleStyle, PageContainer,SaveButtonModal,PageNav, LinkStyle } from "../../../styles/MainLayout";
import { Cases, CaseBoxes, CaseBox, ShowMoreButton, CasesButton, CaseButton , CasesResponsiveBlock} from "../../../styles/Dashboard";
import Search from "../../search/search";
import { StyledForm, StyledToolboxMenu } from "../../../styles/Form";
import axios from "./../../../axios";


const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [listView, setListView] = useState(true);
  const [cases, setCases] = useState();
  const [filtered, setFiltered] = useState();
  // const [isOpen, setIsOpen] = useState(false);
  const today = new Date();
  const todaySliced =  today?.toISOString()?.slice(0,10);
  const threeMonthAgo = today.setMonth(today.getMonth() - 3);
  const threeMonthAgoSliced = new Date(threeMonthAgo)?.toISOString()?.slice(0,10);
  
  const [fromDate, setFromDate] = useState(threeMonthAgoSliced);
  const [toDate, setToDate] = useState(todaySliced);
  const [reports, setReports] = useState({});


const getDashboardCases = () => {
  axios.get('dashboard/'+ fromDate + '/' + toDate).then(response => {
    console.log('dashboardCases',response.data);
    setCases(response.data);
    setFiltered(response.data);
  }).catch(err => {
    console.log(err);
  })
}


const statusFilter = (e) => {
  e.preventDefault();
  var casesFiltered = [];
  console.log('tValue', e.target.value);
  if( e.target.value >= 1) {
    cases.map(el => {
      let stat_id = el?.emergency_statuses?.slice(-1)[0]?.status_id ;
      console.log('elem', stat_id);
      if(stat_id === Number(e.target.value)) {
        console.log('elemIn', stat_id);
        casesFiltered.push(el);
      }
    
    });
    // const casesFiltered = cases?.filter(el => {
    // const lastEmergencyStatus = el.emergency_statuses.find(
    //   status => status.status_id
    //   );
    //   return lastEmergencyStatus?.status_id === Number(e.target.value);
    //   });
    
    console.log('filtered1', casesFiltered);
    // console.log('filtered', filter);
    setFiltered(casesFiltered);
  } else {
    // let filter = await cases.filter(el => el?.emergency_statuses?.slice(-1)[0]?.status_id === 0);
    setFiltered(cases);
  }
  // console.log('filtered0', filter);
 

}

  useEffect(()=>{
    getDashboardCases();
  },[fromDate,toDate]);
  console.log("props", props)

  return (
    <>


                        <StyledToolboxMenu type={'filter'} isMenuOpen={props?.menu}>
                            <div className="button-group">
                                <label><span>Filtro</span></label>
                                <select onChange={statusFilter}>
                                <option value={0} > Te gjitha rastet </option>
                                <option value={3} > Nivel i ulët i urgjencës </option>
                                <option value={2} > Nivel mesatar urgjence </option>
                                <option value={1} > Nevojë për intervenim urgjent</option>
                                </select>
                            </div>
                            <div className="button-group">
                                <div  className="button-selector" >
                                    <button onClick={(e)=>{e.preventDefault();setListView(true);}}className={ listView && `active`} ><i className="fa fa-list " /> </button>
                                    <button onClick={(e)=>{e.preventDefault();setListView(false);}}className={ !listView && `active`} ><i className="fa fa-th" /> </button>
                                </div>
                            </div>
                            <div className="button-group">
                                <label><span>nga data</span></label>
                                    <input type="date"  defaultValue={fromDate} onChange={(e)=>{e.preventDefault(); setFromDate(e.target.value)}}></input>
                            </div>
                            <div className="button-group">
                                <label><span>deri në datën</span></label>
                                    <input type="date" defaultValue={toDate} onChange={(e)=>{e.preventDefault(); setToDate(e.target.value)}} ></input>
                            </div>
                            {/* <div className="button-group">
                                <button className="search">Kërko</button>
                            </div> */}
                            
                        </StyledToolboxMenu>
             
                        
    <PageStyle isMenuOpen={props?.menu}>
      <PageTitleStyle>Dashboard</PageTitleStyle>
      <Search />
      <PageContainer isMenuOpen={props?.menu} dashboardContentResponsive >
        
        
          {activeTab === 0 &&

            
filtered && filtered?.map((el) => {
              return(
            <>
             <Cases type={listView ? 'list' : 'grid'} status={el?.emergency_statuses?.slice(-1)[0]?.status_id} ResponsiveCases>
              <LinkStyle to={`/caseInfo/${el?.id}/${el?.p_id}`}> <CaseButton status={'high'} >Shiqo Rastin </CaseButton> </LinkStyle>
              <h5><span><i className="fa fa-calendar"></i> {el.document_date} | </span> <span><i className="fa fa-user"></i> {el.person.name + ' ' + el.person.surname} |  </span> <span> <i className="fa-solid fa-building-ngo"></i>{' ' + el?.institutions[0]?.name_al} | Statusi: {el?.emergency_statuses[0]?.status?.name_al} </span></h5>
              <hr />
              <CasesResponsiveBlock>

                <h5>Klasifikimi: {el?.case_categories.filter(elem => elem.type === "CaseCategory")?.map(elem => {return elem?.category?.name_al + ' ,'})}</h5>
                <h5>Sherbimet: {el?.case_categories.filter(elem => elem.type !== "CaseCategory")?.map(elem => {return elem?.category?.name_al + ' ,'})}</h5>
                <h5>Krijuar Nga: {el?.user?.name}</h5>
              </CasesResponsiveBlock>
            </Cases>


              </>
              )  
            }
            )
          }


          {activeTab === 1 &&
            <Cases type={listView ? 'list' : 'grid'} status={'mid'} >
                 <LinkStyle to={"/caseInfo"}> <CaseButton status={'mid'} >Shiqo Rastin </CaseButton> </LinkStyle>
              <h5><span><i className="fa fa-calendar"></i> 28.01.2023 | </span> <span><i className="fa fa-user"></i> Nazmije Gashi |  </span> <span> <i className="fa-solid fa-building-ngo"></i> Handikos | Statusi: Ndjeshmeri e larte </span></h5>
              <hr />
              <CasesResponsiveBlock>

                <h5>Klasifikimi: Nene Vetushqyese, Nene Vetushqyese</h5>
                <h5>Sherbimet: Psikologjike, Fizioterapeutike</h5>
                <h5>Perditesimi i Fundit: Shaban Polluzha</h5>
              </CasesResponsiveBlock>
            </Cases>
          }
          {activeTab === 2 &&
            <Cases type={listView ? 'list' : 'grid'} status={'low'} >
              <LinkStyle to={"/caseInfo"}> <CaseButton status={'low'} >Shiqo Rastin </CaseButton> </LinkStyle>
              <h5><span><i className="fa fa-calendar"></i> 28.01.2023 | </span> <span><i className="fa fa-user"></i> Nazmije Gashi |  </span> <span> <i className="fa-solid fa-building-ngo"></i> Handikos | Statusi: Ndjeshmeri e larte </span></h5>
              <hr />
              <CasesResponsiveBlock>

                <h5>Klasifikimi: Nene Vetushqyese, Nene Vetushqyese</h5>
                <h5>Sherbimet: Psikologjike, Fizioterapeutike</h5>
                <h5>Perditesimi i Fundit: Shaban Polluzha</h5>
              </CasesResponsiveBlock>
            </Cases>
          }
          {activeTab === 3 &&
            <Cases type={listView ? 'list' : 'grid'} status={'high'}>
             <LinkStyle to={"/caseInfo"}> <CaseButton status={'high'} >Shiqo Rastin </CaseButton> </LinkStyle>
              <h5><span><i className="fa fa-calendar"></i> 28.01.2023 | </span> <span><i className="fa fa-user"></i> Nazmije Gashi |  </span> <span> <i className="fa-solid fa-building-ngo"></i> Handikos | Statusi: Ndjeshmeri e larte </span></h5>
              <hr />
              <CasesResponsiveBlock>

                <h5>Klasifikimi: Nene Vetushqyese, Nene Vetushqyese</h5>
                <h5>Sherbimet: Psikologjike, Fizioterapeutike</h5>
                <h5>Perditesimi i Fundit: Shaban Polluzha</h5>
              </CasesResponsiveBlock>
            </Cases>
          }
        </PageContainer>
      </PageStyle>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.data.lang,
    langData: state.data.langData,
    isLoading: state.data.isLoading,
    loggedIn: state.data.loggedIn,
    menu: state.data.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggMeIN: () => dispatch(loggMeIN()),
    rmAuth: () => dispatch(rmAuth()),
    toggleMenu: () => dispatch(toggleMenu()),
    // loadingOff: () => dispatch(loadingOff()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
