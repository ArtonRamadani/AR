import React, { useEffect, useState } from 'react'
import "./porosia.scss"
import dritareKafe from '../../images/windowOptions/ngjyra/dritare-kafe.png'
import dritareBardhe from '../../images/windowOptions/ngjyra/dritare-bardh.png'
import dritareAntracid from '../../images/windowOptions/ngjyra/dritare-antracid.png'
import dritareAntracid_Bardhe from '../../images/windowOptions/ngjyra/dritare-bardh-antracid.png'

import dritareNjeKaheshe from '../../images/windowOptions/newOptionsDesign/dritare-nje-kraheshe.svg'
import dereDyKraheshe from '../../images/windowOptions/newOptionsDesign/dritare-dy-kraheshe.svg'
import njeKraheshe from '../../images/windowOptions/newOptionsDesign/dere-nje-kraheshe.svg'
import dyKraheshe from '../../images/windowOptions/newOptionsDesign/dere-dy-kraheshe.svg'
import Rreshqitese from '../../images/windowOptions/newOptionsDesign/dere-rreshqitese.svg'
import statike from '../../images/windowOptions/newOptionsDesign/dere-dritare-fikse.svg'
import shucoMVB from '../../images/products/M-technologie-PVC-Product-2.png'
import roletaMbi from '../../images/windowOptions/roletaMbi.png'
import roletaAnash from '../../images/windowOptions/roletaAnash.png'
import roletaVeneciane from '../../images/windowOptions/roletaVeneciane.png'
import ngjyraBardhZi from '../../images/windowOptions/ngjyra/bardhZi.png'
import ourPartners from "../../DB/partneret"
import axios from '../../axios'
import { toast } from 'react-toastify'
import Translations from '../../components/translations/translations';
import { setLangData, setSelectedLang } from "../../redux/Functions/actions";
import { connect } from 'react-redux';

// console.log('window_data', window_data)
const Porosia = (props) => {
    console.log('Orderprops', props)
    const [ngjyra, setNgjyra] = useState("Kafe")
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    // const [color, setColor] = useState();
    const [initialOrderState, setInitialOrderState] = useState([{ gjatesia: "", gjeresia: "", sasia: "", selected_color: "", lloji_dritares: "", roletat: "" }]);
    const [costumer, setCostumer] = useState({ name_surname: "", address: "", city: "", email: "", phone_number: "" });
    // console.log('length, ', initialOrderState)
    const handleCostumer = (e, dataType) => {
        // e.preventDefault();
        let currentState = costumer;
        if (dataType === 'nameSurname') {
            let assignEmriMbiemri = Object.assign(currentState);
            assignEmriMbiemri.name_surname = e.target.value;
        }
        if (dataType === 'address') {
            let assignAddress = Object.assign(currentState);
            assignAddress.address = e.target.value;
        }
        if (dataType === 'city') {
            let assignCity = Object.assign(currentState);
            assignCity.city = e.target.value;
        }
        if (dataType === 'phone') {
            let assignPhoneNumber = Object.assign(currentState);
            assignPhoneNumber.phone_number = e.target.value;
        }
        if (dataType === 'email') {
            let assignEmail = Object.assign(currentState);
            assignEmail.email = e.target.value;
        }
        console.log('COSTUMER', costumer)
    };
    function selectWindowType(e, index, windowType) {
        console.log('lloji dritares', e, index, windowType)
        // e.preventDefault();
        let currentState = initialOrderState;

        // console.log('lloji dritares i zgjedhur', e?.target.value)
        if (windowType === 'dritareNjeKaheshe') {
            let assignEmail = Object.assign(currentState);
            assignEmail[index].lloji_dritares = "Dritare Nje Kaheshe";
        }
        if (windowType === 'dritareDyKaheshe') {
            let assignEmail = Object.assign(currentState);
            assignEmail[index].lloji_dritares = "Dritare Dy Kaheshe";
        }
        if (windowType === 'dereNjeKraheshe') {
            let assignEmail = Object.assign(currentState);
            assignEmail[index].lloji_dritares = "Dere Nje Kaheshe";
        }
        if (windowType === 'dereDyKrahëshe') {
            let assignEmail = Object.assign(currentState);
            assignEmail[index].lloji_dritares = "Dere Dy Krahëshe";
        }
        if (windowType === 'dereStatike') {
            let assignEmail = Object.assign(currentState);
            assignEmail[index].lloji_dritares = "Dere Statike";
        }
        if (windowType === 'dereRreshqitese') {
            let assignEmail = Object.assign(currentState);
            assignEmail[index].lloji_dritares = "Dere Rreshqitese";
        }
    }
    function selectColor(e, index, selectedColor) {
        // e.preventDefault();
        // console.log('index', index, selectedColor)
        let currentState = initialOrderState;

        // console.log('lloji dritares i zgjedhur', e?.target.value)
        if (selectedColor === 'Bardh') {
            let assignColor = Object.assign(currentState);
            assignColor[index].selected_color = "Bardh";
            setNgjyra("Bardh");

        }
        if (selectedColor === 'Kafe') {
            let assignColor = Object.assign(currentState);
            assignColor[index].selected_color = "Kafe";
            setNgjyra("Kafe")

        }
        if (selectedColor === 'Antracid') {
            let assignColor = Object.assign(currentState);
            assignColor[index].selected_color = "Antracid";
            setNgjyra("Antracid")

        }
        if (selectedColor === 'Antracid-dhe-Zi') {
            let assignColor = Object.assign(currentState);
            assignColor[index].selected_color = "Antracid dhe Zi";
            setNgjyra("Antracid-dhe-Zi")

        }
    }
    console.log('lloji dritares i zgjedhur', initialOrderState)
    const addOrder = () => {
        window.scrollTo(0, 5)
        setInitialOrderState(oldstate => [...oldstate, { gjatesia: "", gjeresia: "", sasia: "", selected_color: "", lloji_dritares: "", roletat: "" }]);

    }

    function selectWindowBlindsType(e, index, blindsType) {
        // console.log('lloji roletave i zgjedhur', e?.target.roleta)
        let currentState = initialOrderState;

        console.log('lloji dritares i zgjedhur', e?.target.value)
        if (blindsType === 'roletaMbi') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].roletat = "Roleta Mbi";
        }
        if (blindsType === 'roletaAnash') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].roletat = "Roleta Anash";
        }
        if (blindsType === 'roletaVeneciane') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].roletat = "Roleta Veneciane";
        }
        if (blindsType === 'paRoleta') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].roletat = "Pa Roleta";
        }
        // console.log("zgjedhjaRoletave", currentState)
    }
    function setDimenzionet(e, index, dimensionsType) {
        console.log('lloji roletave i zgjedhur', e?.target.roleta)
        let currentState = initialOrderState;

        // console.log('dimenzionet', e?.target.value)
        if (dimensionsType === 'gjatesia') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].gjatesia = e?.target.value;

        }
        if (dimensionsType === 'gjeresia') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].gjeresia = e?.target.value;

        }
        if (dimensionsType === 'sasia') {
            let assignBlinds = Object.assign(currentState);
            assignBlinds[index].sasia = e?.target.value;

        }
        // console.log("zgjedhjaDimenzioneve", currentState)
    }

    const submitData = async (e) => {
        e.preventDefault();
        let data = {
            costumer: costumer,
            orders: initialOrderState,
        };
        await axios
            .post("/api/general/orders/post_new_order", data)
            .then((res) => {
                // console.log('response', res)
                e.target.reset();
                window.scrollTo(0, 5)
                toast.success('Porosia juaj është pranuar, do ju kontaktojmë sa më shpejtë!');

            })
            .catch((err) => {
                console.log("error incoming", err);
                toast.error('Kishte një problem gjatë kryerjes së porosisë, ju lutem provoni prap më vonë!');
            });
    }
    // console.log('initialOrderState', initialOrderState)
    // console.log('costumer', costumer)

    const ordersToMap = initialOrderState.slice(0, -1);

    // console.log('initialOrderStateinitialOrderState', ordersToMap)
    return (
        <div className='porosia'>
            <div className="container">
                {/* {console.log("initialOrderState.length ", initialOrderState)} */}

                {
                    initialOrderState.length < 2 ?
                        initialOrderState.map((el, index) => {
                            return (
                                <form onSubmit={submitData}>
                                    {/* {console.log('firstEL', el, index)} */}
                                    <div className="colorSelect row">
                                        <div className="col-md-7 col-12 leftContent">
                                            <p className='title' dangerouslySetInnerHTML={{ __html: `${Translations(props?.langData, props?.selected_lang, 'NdertoDritarenNeMinutLabel')}` }} />
                                            <p className='paragrafi'>Varësisht nga nevojat tuaja, me anë të vizualizimit në 3D ti mund të ndertosh dritaren tënde duke zgjedhur profilin, ngjyren, dimenzionet e te gjitha cka duhet per te bere porosine.</p>
                                            <h5 className='mt-5 mb-4'>1. Profili</h5>
                                            <div className="imgContent">
                                                <img src={shucoMVB} alt=" " className='profili' />
                                                <p className='mt-2'>  Shuco MV8 </p>
                                            </div>
                                            <h5 className='mt-4'>2. Ngjyra</h5>

                                            <div className=" mt-4 col-xl-6 col-md-8 col-sm-12  ">
                                                <div className="row ngjyrat_e_dritareve ">
                                                    <div className="col-2 col-sm-1 color_selector">
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Bardh") }} className="mx-auto whiteColor" id="Bardhë" name="radio" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                Bardhë
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-1 color_selector">
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Kafe") }} className="mx-auto brownDiv" id="Kafe" name="radio" value="kafe" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                Kafe
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-1 color_selector">
                                                        <div className="WHITE_antracid_div"></div>
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Antracid") }} className="mx-auto antracidDiv" id="Antracid" name="radio" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                Antracid
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-1 color_selector">

                                                        <label className="white_antracid_divv" htmlFor="testBardhZi" style={{ backgroundImage: `url(${ngjyraBardhZi})` }} />
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Antracid-dhe-Zi") }} className="mx-auto white_antracid_div" value="AntracidDheBardh" id="testBardhZi" name="radio" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                &nbsp; Antracid &nbsp; Bardhë
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-5 col-12 rightContent">
                                {console.log('ngjyrangjyrangjyrangjyrangjyra',ngjyra)
}                                            {ngjyra == "Bardh" ?

                                                <img src={dritareBardhe} alt=" " className='dritare1  img-fluid' /> :
                                                ngjyra == "kafe" ?
                                                    <img src={dritareKafe} alt=" " className='dritare1  img-fluid' />
                                                    :
                                                ngjyra == "Antracid" ?
                                                    <img src={dritareAntracid} alt=" " className='dritare1  img-fluid' />
                                                    :
                                                ngjyra == "Antracid-dhe-Zi" ?
                                                    <img src={dritareAntracid_Bardhe} className='dritare1  img-fluid' />
                                                    :
                                                    <img src={dritareKafe} alt=" " className='dritare1  img-fluid' />

                                            }
                                        </div>
                                    </div>
                                    <hr className='vijaNdarese' />

                                    <div className="windowTypes">
                                        <h5>3. Lloji</h5>
                                        <div className="col-12 window_selector">

                                            <div className="row displace_windows_evenly pt-4">
                                                <div className="paretn_window_type mb-5 col-xl-3 col-md-5 col-6">
                                                    <input onChange={(e) => { selectWindowType(e, index, "dritareNjeKaheshe") }} type="radio" name="Lloji" id="dritareNjeKaheshe" className="window_radio_button" value="DritareNjeKraheshe" required />
                                                    <label htmlFor="dritareNjeKaheshe" className='tipet_e_dritareve test test1'>
                                                        <img src={dritareNjeKaheshe} alt=" " className='dritare_nje_kaheshe_option img-fluid' />
                                                        <p className='description_window_type_text'> Dritare një krahëshe</p>
                                                    </label>
                                                    <div className="checkmark" />
                                                </div>

                                                <div className="paretn_window_type mb-5 col-xl-2 col-md-6 col-6">
                                                    <input type="radio" name="Lloji" id="dritareDyKaheshe" className="window_radio_button" value="DereDyKraheshe" required onChange={(e) => { selectWindowType(e, index, "dritareDyKaheshe") }} />
                                                    <label htmlFor="dritareDyKaheshe" className='tipet_e_dritareve test '>
                                                        <img src={dereDyKraheshe} alt=" " className='dritare_nje_kaheshe_option img-fluid' />
                                                        <p className='description_window_type_text'> Dritare dy krahëshe</p>
                                                    </label>
                                                    <div className="checkmarkD2k" />
                                                </div>

                                                <div className="paretn_bigger_window_type mt-2 col-xl-2 col-md-6 col-6">
                                                    <input onChange={(e) => { selectWindowType(e, index, "dereNjeKraheshe") }} type="radio" name="Lloji" id="dereNjeKraheshe" className="window_radio_button" value="dereNjeKraheshe" required />
                                                    <label htmlFor="dereNjeKraheshe" className='tipet_e_dritareve'>
                                                        <img src={njeKraheshe} alt=" " className='dere_dy_kaheshe_option1 img-fluid' />
                                                        <p className='description_window_type_text'> Dere një krahëshe</p>
                                                    </label>
                                                    <div className="window_bigger_option_checkmark" />
                                                </div>

                                                <div className="paretn_bigger_window_type mt-2 col-xl-2 col-md-6 col-6">
                                                    <input onChange={(e) => { selectWindowType(e, index, "dereDyKrahëshe") }} type="radio" name="Lloji" id="dereDyKrahëshe" className="window_radio_button" value="dereDyKrahëshe" required />
                                                    <label htmlFor="dereDyKrahëshe" className='tipet_e_dritareve test1'>
                                                        <img src={dyKraheshe} alt=" " className='dere_dy_kaheshe_option2 img-fluid' />
                                                        <p className='description_window_type_text'> Dere dy krahëshe</p>
                                                    </label>
                                                    <div className="two_dors_window_option_checkmark" />
                                                </div>

                                                <div className="responsive_costum_style row mt-5">
                                                    <div className="paretn_window_type mb-5 col-xl-3 col-md-6 col-6">
                                                        <input onChange={(e) => { selectWindowType(e, index, "dereStatike") }} type="radio" name="Lloji" id="dereStatike" className="window_radio_button" value="dereStatike" required />
                                                        <label htmlFor="dereStatike" className='tipet_e_dritareve'>
                                                            <img src={statike} alt=" " className='dere_nje_kaheshe_option img-fluid' />
                                                            <p className='description_window_type_text'>Dere/dritare fikse</p>
                                                        </label>
                                                        <div className="window_bigger_option_checkmark2" />
                                                    </div>
                                                    <div className="paretn_window_type mb-5  col-xl-4 col-md-6 col-6">
                                                        <input onChange={(e) => { selectWindowType(e, index, "dereRreshqitese") }} type="radio" name="Lloji" id="dereRreshqitese" className="window_radio_button" value="dereRreshqitese" required />
                                                        <label htmlFor="dereRreshqitese" className='tipet_e_dritareve mt-0 test1'>
                                                            <img src={Rreshqitese} alt=" " className='dere_dy_kaheshe_option img-fluid' />
                                                            <p className='description_window_type_text'> Dere rreshqitese</p>
                                                        </label>
                                                        <div className="two_dors_window_option_checkmark2" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr className='vijaNdarese' />
                                    <div className="roletat">
                                        <h5>4. Roleta</h5>
                                        <div className="col-12 blinds_selector">
                                            <div className="row">
                                                <div className="roletat_mbi col-md-3 col-3">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "roletaMbi") }} name="roleta" type="radio" id="roletaMbi" className="blinds_radio_button" value="Roleta-Mbi" required />
                                                    <label htmlFor="roletaMbi" className='blinds_over '>
                                                        <img src={roletaMbi} alt="" className='blind_option_img img-fluid' />
                                                        <p className='description_blinds_text'>  Roleta Mbi</p>
                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                                <div className="roletat_mbi col-md-3 col-3">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "roletaAnash") }} name="roleta" type="radio" id="roletaAnash" className="blinds_radio_button" value="Roleta-Anash" required />
                                                    <label htmlFor="roletaAnash" className='blinds_over'>
                                                        <img src={roletaAnash} alt=" " className='blind_side_option img-fluid' />
                                                        <p className='description_blinds_text'>  Roleta Anash</p>

                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                                <div className="roletat_mbi col-md-3 col-3">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "roletaVeneciane") }} name="roleta" type="radio" id="roletaVeneciane" className="blinds_radio_button" value="Roleta-Veneciane" required />
                                                    <label htmlFor="roletaVeneciane" className='blinds_over'>
                                                        <img src={roletaVeneciane} alt=" " className='blind_veneciane_option img-fluid' />
                                                        <p className='description_blinds_text'>  Roleta Veneciane</p>

                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                                <div className="roletat_mbi col-md-3 col-3">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "paRoleta") }} name="roleta" type="radio" id="paRoleta" className="blinds_radio_button" value="Roleta-Veneciane" required />
                                                    <label htmlFor="paRoleta" className='blinds_over'>
                                                        <img src={roletaVeneciane} alt=" " className='blind_veneciane_option img-fluid' />
                                                        <p className='description_blinds_text'> Pa Roleta</p>

                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className='vijaNdareseRoleta' />
                                    <div className="dimensionetSasia row">
                                        <div className="col-xl-3 col-md-6 col-sm-6">
                                            <h5>5. Dimenzionet</h5>
                                            <div className="inputFields row">
                                                <div className=" col-6  inputContent">
                                                    <input onChange={(e) => { setDimenzionet(e, index, "gjatësia") }} placeholder="Gjatesia" type="number" name='window_height' id='window_height' required />
                                                    <span>cm</span>
                                                </div>
                                                <div className=" col-6  inputContent">
                                                    <input onChange={(e) => { setDimenzionet(e, index, "gjeresia") }} placeholder="Gjerësia" type="number" name='window_width' id='window_width' required />
                                                    <span>cm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-sm-6 text-start">
                                            <h5>6. Sasia</h5>
                                            <div className="inputFields row">
                                                <div className=" col-6  inputContent1">
                                                    <input onChange={(e) => { setDimenzionet(e, index, "sasia") }} type="number" name='quantity' id='quantity' required />
                                                    <span>copë</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='vijaNdareseSasia' />
                                    {/* <div className="col-8 add_order">
                                        <button onClick={addOrder} className=' mt-5 mb-5  add_new_order'>
                                            <span> + SHTO </span>
                                        </button>
                                    </div> */}
                                    {/* TE DHENAT E DERGUESIT TE POROSISE */}
                                    <div className="your_data col-12">
                                        <p className='informativ_text_for_user mt-5 col-12'>Për ta dërguar porosinë duhet ti plotësoni këto te dhëna</p>

                                        <div className="personal_data_input_fields col-12 mt-4">
                                            <div className=" row">
                                                <div className=" col-md-4 mb-5  inputContent ">
                                                    <input onChange={(e) => { handleCostumer(e, "nameSurname") }} type="text" required />
                                                    <span className='name_and_surname '>Emri dhe mbiemri</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "address") }} name="address" type="text" required />
                                                    <span className='name_and_surname '>Adresa</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "city") }} type="text" required />
                                                    <span className='name_and_surname '>Qyteti</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "phone") }} type="number" required
                                                    />
                                                    <span className='name_and_surname '>Numri telefonit</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "email") }} type="email" required />
                                                    <span className='name_and_surname '>E-mail</span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="send_order_and_button">
                                            <p className='send_to_contact_you_text  mb-5'>Dërgo porosinë, në do të ju kontaktojmë shumë shpejt për të diskutuar rreth detajeve të tjera!</p>

                                            <button className='send_this_order' type='submit'> Dërgo porosinë </button>
                                        </div>
                                    </div>
                                </form>
                            )
                        })
                        :
                        initialOrderState?.map((el, index) => {
                            // console.log('insideindex', index)
                            return (
                                <form onSubmit={submitData}>
                                    <div className="colorSelect row">
                                        {ordersToMap?.map((el) => {
                                            return (
                                                <div className="col-12 mt-5">
                                                    <div className="listing">
                                                        <div className="row border p-3 orders_listing">
                                                            <div className="col-md-3 ">
                                                                <div className="row">
                                                                    <p className="col-md-2 mt-auto mb-auto">
                                                                        1.
                                                                    </p>
                                                                    <div className="col-md-10">
                                                                        <img src={dereDyKraheshe} alt=" " className='dere_dy_kaheshe_option img-fluid' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9 mt-auto mb-auto">
                                                                <p className='selected_order'>{el?.lloji_dritares}</p>
                                                                <p> Shuco MV8, Ngjyrë {el?.ngjyra}, {el?.gjatesia}x{el?.gjeresia}cm, {el?.sasia} copë, {el?.roletat}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                    </p>
                                                </div>
                                            )

                                        })
                                        }

                                        <div className="col-md-7 col-12 leftContent">
                                            <p className='title'>Ndërto dritarën tënde në minut!</p>
                                            <p className='paragrafi'>Varësisht nga nevojat tuaja, me anë të vizualizimit në 3D ti mund të ndertosh dritaren tënde duke zgjedhur profilin, ngjyren, dimenzionet e te gjitha cka duhet per te bere porosine.</p>
                                            <h5 className='mt-5 mb-4'>1. Profili</h5>
                                            <div className="imgContent">
                                                <img src={shucoMVB} alt=" " className='profili' />
                                                <p className='mt-2'>  Shuco MV8 </p>
                                            </div>
                                            <h5 className='mt-4'>2. Ngjyra</h5>

                                            <div className=" mt-4 col-xl-6 col-md-8 col-sm-12  ">
                                                <div className="row ngjyrat_e_dritareve ">
                                                    <div className="col-2 col-sm-1 color_selector">
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Bardhë") }} className="mx-auto whiteColor" id="Bardhë" name="radio" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                Bardhë
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-1 color_selector">
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Kafe") }} className="mx-auto brownDiv" id="Kafe" name="radio" value="kafe" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                Kafe
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-1 color_selector">
                                                        <div className="WHITE_antracid_div"></div>
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Antracid") }} className="mx-auto antracidDiv" id="Antracid" name="radio" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                Antracid
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 col-sm-1 color_selector">

                                                        <label className="white_antracid_divv" htmlFor="testBardhZi" style={{ backgroundImage: `url(${ngjyraBardhZi})` }} />
                                                        <input type="radio" onClick={(e) => { selectColor(e, index, "Antracid-dhe-Zi") }} className="mx-auto white_antracid_div" value="AntracidDheBardh" id="testBardhZi" name="radio" />
                                                        <div className="checkmark">
                                                            <p className='color_desc'>
                                                                &nbsp; Antracid Bardhë
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-5 col-12 rightContent">
                                            <img src={dritareKafe} alt=" " className='dritare1  img-fluid' />
                                        </div>
                                    </div>
                                    <hr className='vijaNdarese' />

                                    <div className="windowTypes">
                                        <h5>3. Lloji</h5>
                                        <div className="col-12 window_selector">
                                            <div className="row displace_windows_evenly pt-4">
                                                <div className="paretn_window_type mb-5 col-xl-3 col-md-5 col-12">
                                                    <input onChange={(e) => { selectWindowType(e, index, "dritareNjeKaheshe") }} type="radio" name="Lloji" id="dritareNjeKaheshe" className="window_radio_button" value="DritareNjeKraheshe" required />
                                                    <label htmlFor="dritareNjeKaheshe" className='tipet_e_dritareve'>
                                                        <img src={dritareNjeKaheshe} alt=" " className='dritare_nje_kaheshe_option img-fluid' />
                                                        <p className='description_window_type_text'> Dritare një krahëshe</p>
                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                                <div className="paretn_window_type mb-5 col-xl-4 col-md-6 col-12">
                                                    <input type="radio" name="Lloji" id="dritareDyKaheshe" className="window_radio_button" value="dritareDyKaheshe" required onChange={(e) => { selectWindowType(e, index, "dritareDyKaheshe") }} />
                                                    <label htmlFor="dritareDyKaheshe" className='tipet_e_dritareve'>
                                                        <img src={dereDyKraheshe} alt=" " className='dere_dy_kaheshe_option img-fluid' />
                                                        <p className='description_window_type_text'> Dritare dy krahëshe</p>
                                                    </label>
                                                    <div className="checkmarkDritareDyKaheshe" />
                                                </div>
                                                <div className="paretn_bigger_window_type mt-2 col-xl-2 col-md-6 col-6">
                                                    <input onChange={(e) => { selectWindowType(e, index, "dereNjeKraheshe") }} type="radio" name="Lloji" id="dereNjeKraheshe" className="window_radio_button" value="dereNjeKraheshe" required />
                                                    <label htmlFor="dereNjeKraheshe" className='tipet_e_dritareve'>
                                                        <img src={njeKraheshe} alt=" " className='dere_nje_kaheshe_option img-fluid' />
                                                        <p className='description_window_type_text'> Dere një krahëshe</p>
                                                    </label>
                                                    <div className="window_bigger_option_checkmark" />
                                                </div>
                                                <div className="paretn_bigger_window_type mt-2 col-xl-2 col-md-6 col-6">
                                                    <input onChange={(e) => { selectWindowType(e, index, "testNdrron") }} type="radio" name="Lloji" id="dereStatike" className="window_radio_button" value="dereStatike" required />
                                                    <label htmlFor="dereStatike" className='tipet_e_dritareve'>
                                                        <img src={statike} alt=" " className='dere_nje_kaheshe_option img-fluid' />
                                                        <p className='description_window_type_text'>Dere/dritare fikse</p>
                                                    </label>
                                                    <div className="window_bigger_option_checkmark" />
                                                </div>
                                                <div className="responsive_costum_style row mt-5">
                                                    <div className="paretn_window_type mb-5 col-xl-4 col-md-6 col-12">
                                                        <input onChange={(e) => { selectWindowType(e, index, "dereDyKrahëshe") }} type="radio" name="Lloji" id="dereDyKrahëshe" className="window_radio_button" value="dereDyKrahëshe" required />
                                                        <label htmlFor="dereDyKrahëshe" className='tipet_e_dritareve'>
                                                            <img src={dyKraheshe} alt=" " className='dere_dy_kaheshe_option img-fluid' />
                                                            <p className='description_window_type_text'> Dere dy krahëshe</p>
                                                        </label>
                                                        <div className="two_dors_window_option_checkmark" />
                                                    </div>
                                                    <div className="paretn_window_type mb-5  col-xl-4 col-md-6 col-12">
                                                        <input onChange={(e) => { selectWindowType(e, index, "dereRreshqitese") }} type="radio" name="Lloji" id="dereRreshqitese" className="window_radio_button" value="dereRreshqitese" required />
                                                        <label htmlFor="dereRreshqitese" className='tipet_e_dritareve'>
                                                            <img src={Rreshqitese} alt=" " className='dere_dy_kaheshe_option img-fluid' />
                                                            <p className='description_window_type_text'> Dere rreshqitese</p>
                                                        </label>
                                                        <div className="two_dors_window_option_checkmark" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr className='vijaNdarese' />
                                    <div className="roletat">
                                        <h5>4. Roleta</h5>
                                        <div className="col-12 blinds_selector">
                                            <div className="row">
                                                <div className="roletat_mbi col-md-4 col-6">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "roletaMbi") }} name="roleta" type="radio" id="roletaMbi" className="blinds_radio_button" value="Roleta-Mbi" required />
                                                    <label htmlFor="roletaMbi" className='blinds_over '>
                                                        <img src={roletaMbi} alt=" " className='blind_option_img img-fluid' />
                                                        <p className='description_blinds_text'>  Roleta Mbi</p>
                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                                <div className="roletat_mbi col-md-4 col-6">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "roletaAnash") }} name="roleta" type="radio" id="roletaAnash" className="blinds_radio_button" value="Roleta-Anash" required />
                                                    <label htmlFor="roletaAnash" className='blinds_over'>
                                                        <img src={roletaAnash} alt=" " className='blind_side_option img-fluid' />
                                                        <p className='description_blinds_text'>  Roleta Anash</p>

                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                                <div className="roletat_mbi col-md-4 col-6">
                                                    <input onChange={(e) => { selectWindowBlindsType(e, index, "roletaVeneciane") }} name="roleta" type="radio" id="roletaVeneciane" className="blinds_radio_button" value="Roleta-Veneciane" required />
                                                    <label htmlFor="roletaVeneciane" className='blinds_over'>
                                                        <img src={roletaVeneciane} alt=" " className='blind_veneciane_option img-fluid' />
                                                        <p className='description_blinds_text'>  Roleta Veneciane</p>

                                                    </label>
                                                    <div className="checkmark" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className='vijaNdarese' />
                                    <div className="dimensionetSasia row">
                                        <div className="col-7">
                                            <h5>5. Dimenzionet</h5>
                                            <div className="inputFields row">
                                                <div className=" col-6 inputContent">
                                                    <input onChange={(e) => { setDimenzionet(e, index + 1, "gjatesia") }} type="number" name='window_height' id='window_height' required />
                                                    <span>cm</span>
                                                </div>
                                                <div className=" col-6 inputContent">
                                                    <input onChange={(e) => { setDimenzionet(e, index + 1, "gjeresia") }} type="number" name='window_width' id='window_width' required />
                                                    <span>cm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 text-start">
                                            <h5>6. Sasia</h5>
                                            <div className="inputFields row">
                                                <div className=" col-6 inputContent1">
                                                    <input onChange={(e) => { setDimenzionet(e, index + 1, "sasia") }} type="number" name='quantity' id='quantity' required />
                                                    <span>copë</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='vijaNdarese' />
                                    <div className="col-8 add_order">
                                        <button onClick={addOrder} className=' mt-5 mb-5  add_new_order'>
                                            <span> + SHTO </span>
                                        </button>
                                    </div>
                                    {/* TE DHENAT E DERGUESIT TE POROSISE */}
                                    <div className="your_data col-12">
                                        <p className='informativ_text_for_user mt-5 col-12'>Për ta dërguar porosinë duhet ti plotësoni këto te dhëna</p>

                                        <div className="personal_data_input_fields col-12 mt-4">
                                            <div className=" row">
                                                <div className=" col-md-4 mb-5  inputContent ">
                                                    <input onChange={(e) => { handleCostumer(e, "nameSurname") }} type="text" required />
                                                    <span className='name_and_surname '>Emri dhe mbiemri</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "address") }} name="address" type="text" required />
                                                    <span className='name_and_surname '>Adresa</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "city") }} type="text" required />
                                                    <span className='name_and_surname '>Qyteti</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "phone") }} type="number" required // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                                    />
                                                    <span className='name_and_surname '>Numri telefonit</span>

                                                </div>
                                                <div className=" col-md-4 mb-5  inputContent">
                                                    <input onChange={(e) => { handleCostumer(e, "email") }} type="email" required />
                                                    <span className='name_and_surname '>E-mail</span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="send_order_and_button">
                                            <p className='send_to_contact_you_text  mb-5'>Dërgo porosinë, në do të ju kontaktojmë shumë shpejt për të diskutuar rreth detajeve të tjera!</p>

                                            <button className='send_this_order' type='submit'> Dërgo POROSIË </button>
                                        </div>
                                    </div>
                                </form>
                            )
                        })
                }

            </div>
            <div className="col-12 mt-5 partneretTane">
                {ourPartners.map((el) => {
                    return (
                        <img src={el?.img_src} alt={el.title} />
                    )
                })}
            </div>
        </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(Porosia);
