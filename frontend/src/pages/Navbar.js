import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';
import './Navbar.css';
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import Dropdown from 'rsuite/Dropdown';
import  IconButton from 'rsuite/IconButton';
import { IconContext } from "react-icons";
import 'rsuite/dist/rsuite.min.css';
import PrfoileIcon from '@mui/icons-material/Person'
import PageIcon from '@rsuite/icons/Edit';
import DetailIcon from '@rsuite/icons/Detail';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import Wallet from '@mui/icons-material/Wallet';
import Logout from '@mui/icons-material/Logout'
import Password from '@mui/icons-material/Password';
import Globe from '@rsuite/icons/Global';
import PlusIcon from '@rsuite/icons/Plus';
import { useNavigate } from 'react-router-dom';
import {
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillContainer
} from "react-icons/ai";
import './Button.css';


import 'react-country-dropdown/dist/index.css'




const renderIconButton = (props, ref) => {
  return (
    <IconButton {...props} ref={ref} icon={<Globe />} circle appearance="text-light" />
  );
};

function Navbar() {
  const [age, setAge] = React.useState('');
  const [click, setClick] = useState(false);
 
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);
  


  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleSubmit = async () => {
    // e.preventDefault();
     
     const preview = {country};
 
     const response = await fetch(`/selectcountry/`,{
       method: "PATCH",
       body: JSON.stringify(preview),
       headers: {
         "Content-Type": "application/json",
         'Accept': 'application/json'
       },
     });
     // console.log("mans")
     const json = await response.json();
     console.log("e7m")
     if (!response.ok) {
       setError(json.error);
     }
     if (response.ok) {
       setCountry("")
       setError(null);
       
     }
     console.log(country);
 //setCountry(e);
   };

  

  return (
    <>
     <nav className='navbar1'>
        <div className='navbar-container1'>
          <Link to='/' className='navbar-logo1' onClick={closeMobileMenu}>
            University Portal
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon1' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active1' : 'nav-menu1'}>
            <li className='nav-item1'>
              <Link to='/home' className='nav-links1' title='Home' onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg>
              </Link>
            </li>
           
            <li className='nav-item1'>
              <Link
                to='/aboutus' title='About Us'
                className='nav-links1'
                onClick={closeMobileMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
</svg>
              </Link>
              
            </li>
            <li className='nav-item1'>
              <Link
                to="/login"
                className='nav-links1' title='LogIn'
                onClick={closeMobileMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
              </Link>
            </li>
            <li className='nav-item1'>
              <Link to="/sign-up" title='SignUp'
                className='nav-links1'
                onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg>
              </Link>
              </li>

            
          </ul>
          <div  className="dropdowng1"  
      value={country}>
              <Dropdown   renderToggle={renderIconButton}>
                <div className="dr1"  >
                <Dropdown.Item  value="Afghanistan" onClick={() =>handleSubmit()& setCountry("Afghanistan")} > Afghanistan
                </Dropdown.Item>
                <Dropdown.Item value="Aland Islands" onClick={() =>handleSubmit()& setCountry("Aland Islands")}>Åland Islands
                </Dropdown.Item>
                <Dropdown.Item value="Albania" onClick={() =>handleSubmit()& setCountry("Albania")}>Albania
                </Dropdown.Item>
                <Dropdown.Item value="Algeria" onClick={() =>handleSubmit()& setCountry("Algeria")}>Algeria
                </Dropdown.Item>
                <Dropdown.Item  value="American Samoa" onClick={() =>handleSubmit()& setCountry("American Samoa")}>American Samoa
                </Dropdown.Item>
                <Dropdown.Item   value="Andorra" onClick={() =>handleSubmit()& setCountry("Andorra")}>Andorra
                </Dropdown.Item>
                <Dropdown.Item value="Angola" onClick={() =>handleSubmit()& setCountry("Angola")}>Angola
                </Dropdown.Item>
                <Dropdown.Item  value="Anguilla" onClick={() =>handleSubmit()& setCountry("Anguilla")}>Anguilla 
                </Dropdown.Item>
                <Dropdown.Item value="Antigua and Barbuda" onClick={() =>handleSubmit()& setCountry("Antigua & Barbuda")}>Antigua & Barbuda
                </Dropdown.Item>
                <Dropdown.Item  value="Argentina" onClick={() =>handleSubmit()& setCountry("Argentina")}>Argentina
                </Dropdown.Item>
                <Dropdown.Item value="Armenia" onClick={() =>handleSubmit()& setCountry("Armenia")}>Armenia
                </Dropdown.Item>
                <Dropdown.Item value="Aruba" onClick={() =>handleSubmit()& setCountry("Aruba")}>Aruba
                </Dropdown.Item>
                <Dropdown.Item value="Australia" onClick={() =>handleSubmit()& setCountry("Australia")}>Australia
                </Dropdown.Item>
                <Dropdown.Item  value="Austria" onClick={() =>handleSubmit()& setCountry("Austria")}>Austria
                </Dropdown.Item>
                <Dropdown.Item value="Azerbaijan" onClick={() =>handleSubmit()& setCountry("Azerbaijan")}>Azerbaijan
                </Dropdown.Item>
                <Dropdown.Item  value="Bahamas" onClick={() =>handleSubmit()& setCountry("Bahamas")}>Bahamas
                </Dropdown.Item>
                <Dropdown.Item value="Bahrain" onClick={() =>handleSubmit()& setCountry("Bahrain")}>Bahrain
                </Dropdown.Item>
                <Dropdown.Item  value="Bangladesh" onClick={() =>handleSubmit()& setCountry("Bangladesh")}>Bangladesh
                </Dropdown.Item>
                <Dropdown.Item value="Barbados" onClick={() =>handleSubmit()& setCountry("Barbados")}>Barbados
                </Dropdown.Item>
                <Dropdown.Item  value="Belarus" onClick={() =>handleSubmit()& setCountry("Belarus")}>Belarus
                </Dropdown.Item>
                <Dropdown.Item  value="Belgium" onClick={() =>handleSubmit()& setCountry("Belgium")}>Belgium
                </Dropdown.Item>
                <Dropdown.Item  value="Belize" onClick={() =>handleSubmit()& setCountry("Belize")}>Belize
                </Dropdown.Item>
                <Dropdown.Item  value="Benin">Benin
                </Dropdown.Item>
                <Dropdown.Item  value="Bermuda" onClick={() =>handleSubmit()& setCountry("Bermuda")}>Bermuda
                </Dropdown.Item>
                <Dropdown.Item  value="Bhutan" onClick={() =>handleSubmit()& setCountry("Bhutan")}>Bhutan
                </Dropdown.Item>
                <Dropdown.Item  value="Bolivia" onClick={() =>handleSubmit()& setCountry("Bolivia")}>Bolivia
                </Dropdown.Item>
                <Dropdown.Item  value="Bosnia and Herzegovina" onClick={() =>handleSubmit()& setCountry("Bosnia & Herzegovina")}>Bosnia & Herzegovina
                </Dropdown.Item>
                <Dropdown.Item value="Botswana" onClick={() =>handleSubmit()& setCountry("Botswana")}>Botswana
                </Dropdown.Item>
                <Dropdown.Item  value="Bouvet Island" onClick={() =>handleSubmit()& setCountry("Bouvet Island")}>Bouvet Island
                </Dropdown.Item>
                <Dropdown.Item  value="Brazil" onClick={() =>handleSubmit()& setCountry("Brazil")}>Brazil
                </Dropdown.Item>
                <Dropdown.Item  value="British Indian Ocean Territory" onClick={() =>handleSubmit()& setCountry("British Indian Ocean Territory")}>British Indian Ocean Territory
                </Dropdown.Item>
                <Dropdown.Item  value="Brunei Darussalam" onClick={() =>handleSubmit()& setCountry("Brunei")}>Brunei
                </Dropdown.Item>
                <Dropdown.Item  value="Bulgaria" onClick={() =>handleSubmit()& setCountry("Bulgaria")}>Bulgaria
                </Dropdown.Item>
                <Dropdown.Item  value="Burkina Faso" onClick={() =>handleSubmit()& setCountry("Burkina Faso")}>Burkina Faso
                </Dropdown.Item>
                <Dropdown.Item   value="Cambodia" onClick={() =>handleSubmit()& setCountry("Cambodia")}>Cambodia
                </Dropdown.Item>
                <Dropdown.Item  value="Cameroon" onClick={() =>handleSubmit()& setCountry("Cameroon")}>Cameroon
                </Dropdown.Item>
                <Dropdown.Item  value="Canada" onClick={() =>handleSubmit()& setCountry("Canada")}>Canada
                </Dropdown.Item>
                <Dropdown.Item  value="Cape Verde" onClick={() =>handleSubmit()& setCountry("Cape Verde")}>Cape Verde
                </Dropdown.Item>
                <Dropdown.Item  value="Cayman Islands" onClick={() =>handleSubmit()& setCountry("Cayman Islands")}>Cayman Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Central African Republic" onClick={() =>handleSubmit()& setCountry("Central African Republic")}>Central African Republic
                </Dropdown.Item>
                <Dropdown.Item value="Chad" onClick={() =>handleSubmit()& setCountry("Chad")}>Chad
                </Dropdown.Item>
                <Dropdown.Item  value="Chile" onClick={() =>handleSubmit()& setCountry("Chile")}>Chile
                </Dropdown.Item>
                <Dropdown.Item  value="China" onClick={() =>handleSubmit()& setCountry("China")}>China
                </Dropdown.Item>
                <Dropdown.Item   value="Christmas Island" onClick={() =>handleSubmit()& setCountry("Christmas Island")}>Christmas Island
                </Dropdown.Item>
                <Dropdown.Item     value="Colombia" onClick={() =>handleSubmit()& setCountry("Colombia")}>Colombia
                </Dropdown.Item>
                <Dropdown.Item value="Comoros" onClick={() =>handleSubmit()& setCountry("Comoros")}>Comoros
                </Dropdown.Item>
                <Dropdown.Item    value="Congo" onClick={() =>handleSubmit()& setCountry("Congo")}>Congo
                </Dropdown.Item>
                <Dropdown.Item  value="Cook Islands" onClick={() =>handleSubmit()& setCountry("Cook Islands")}>Cook Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Costa Rica" onClick={() =>handleSubmit()& setCountry("Costa Rica")}>Costa Rica
                </Dropdown.Item>
                <Dropdown.Item  value="Cote D'Ivoire" onClick={() =>handleSubmit()& setCountry("Côte d’Ivoire")}>Côte d’Ivoire
                </Dropdown.Item>
                <Dropdown.Item  value="Croatia" onClick={() =>handleSubmit()& setCountry("Croatia")}>Croatia
                </Dropdown.Item>
                <Dropdown.Item value="Cuba" onClick={() =>handleSubmit()& setCountry("Cuba")}>Cuba
                </Dropdown.Item>
                <Dropdown.Item  value="Curacao" onClick={() =>handleSubmit()& setCountry("Curaçao")}>Curaçao
                </Dropdown.Item>
                <Dropdown.Item  value="Cyprus" onClick={() =>handleSubmit()& setCountry("Cyprus")}>Cyprus
                </Dropdown.Item>
                <Dropdown.Item  value="Czech Republic" onClick={() =>handleSubmit()& setCountry("Czechia")}>Czechia
                </Dropdown.Item>
                <Dropdown.Item  value="Denmark" onClick={() =>handleSubmit()& setCountry("Denmark")}>Denmark
                </Dropdown.Item>
                <Dropdown.Item  value="Djibouti" onClick={() =>handleSubmit()& setCountry("Djibouti")}>Djibouti
                </Dropdown.Item>
                <Dropdown.Item   value="Dominican Republic" onClick={() =>handleSubmit()& setCountry("Dominican Republic")}>Dominican Republic
                </Dropdown.Item>
                <Dropdown.Item  value="Ecuador" onClick={() =>handleSubmit()& setCountry("Ecuador")}>Ecuador
                </Dropdown.Item>
                <Dropdown.Item   value="Egypt" onClick={() =>handleSubmit()& setCountry("Egypt")}>Egypt
                </Dropdown.Item>
                <Dropdown.Item  value="El Salvador" onClick={() =>handleSubmit()& setCountry("El Salvador")}>El Salvador
                </Dropdown.Item>
                <Dropdown.Item  value="Equatorial Guinea" onClick={() =>handleSubmit()& setCountry("Equatorial Guinea")}>Equatorial Guinea
                </Dropdown.Item>
                <Dropdown.Item  value="Eritrea" onClick={() =>handleSubmit()& setCountry("Eritrea")}>Eritrea
                </Dropdown.Item>
                <Dropdown.Item  value="Estonia" onClick={() =>handleSubmit()& setCountry("Estonia")}>Estonia
                </Dropdown.Item>
                <Dropdown.Item  value="Ethiopia" onClick={() =>handleSubmit()& setCountry("Ethiopia")}>Ethiopia
                </Dropdown.Item>
                <Dropdown.Item value="Faroe Islands" onClick={() =>handleSubmit()& setCountry("Faroe Islands")}>Faroe Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Fiji" onClick={() =>handleSubmit()& setCountry("Fiji")}>Fiji
                </Dropdown.Item>
                <Dropdown.Item   value="Finland" onClick={() =>handleSubmit()& setCountry("Finland")}>Finland
                </Dropdown.Item>
                <Dropdown.Item  value="France" onClick={() =>handleSubmit()& setCountry("France")}>France
                </Dropdown.Item>
                <Dropdown.Item   value="French Guiana" onClick={() =>handleSubmit()& setCountry("French Guiana")}>French Guiana
                </Dropdown.Item>
                <Dropdown.Item  value="French Polynesia" onClick={() =>handleSubmit()& setCountry("French Polynesia")}>French Polynesia
                </Dropdown.Item>
                <Dropdown.Item   value="French Southern Territories" onClick={() =>handleSubmit()& setCountry("French Southern Territories")}>French Southern Territories
                </Dropdown.Item>
                <Dropdown.Item value="Gabon" onClick={() =>handleSubmit()& setCountry("Gabon")}>Gabon
                </Dropdown.Item>
                <Dropdown.Item value="Gambia" onClick={() =>handleSubmit()& setCountry("Gambia")}>Gambia
                </Dropdown.Item>
                <Dropdown.Item  value="Georgia" onClick={() =>handleSubmit()& setCountry("Georgia")}>Georgia
                </Dropdown.Item>
                <Dropdown.Item  value="Germany" onClick={() =>handleSubmit()& setCountry("Germany")}>Germany
                </Dropdown.Item>
                <Dropdown.Item  value="Ghana" onClick={() =>handleSubmit()& setCountry("Ghana")}>Ghana
                </Dropdown.Item>
                <Dropdown.Item   value="Gibraltar" onClick={() =>handleSubmit()& setCountry("Gibraltar")}>Gibraltar
                </Dropdown.Item>
                <Dropdown.Item  value="Greece" onClick={() =>handleSubmit()& setCountry("Greece")}>Greece
                </Dropdown.Item>
                <Dropdown.Item  value="Greenland" onClick={() =>handleSubmit()& setCountry("Greenland")}>Greenland
                </Dropdown.Item>
                <Dropdown.Item  value="Grenada" onClick={() =>handleSubmit()& setCountry("Grenada")}>Grenada
                </Dropdown.Item>
                <Dropdown.Item   value="Guadeloupe"> onClick={() =>handleSubmit()& setCountry("Guadeloupe")}Guadeloupe  
                </Dropdown.Item>
                <Dropdown.Item value="Guam" onClick={() =>handleSubmit()& setCountry("Guam")}>Guam
                </Dropdown.Item>
                <Dropdown.Item  value="Guatemala" onClick={() =>handleSubmit()& setCountry("Guatemala")}>Guatemala
                </Dropdown.Item>
                <Dropdown.Item  value="Guernsey" onClick={() =>handleSubmit()& setCountry("Guernsey")}>Guernsey
                </Dropdown.Item>
                <Dropdown.Item value="Guinea" onClick={() =>handleSubmit()& setCountry("Guinea")}>Guinea
                </Dropdown.Item>
                <Dropdown.Item  value="Guinea-Bissau" onClick={() =>handleSubmit()& setCountry("Guinea-Bissau")}>Guinea-Bissau
                </Dropdown.Item>
                <Dropdown.Item    value="Guyana" onClick={() =>handleSubmit()& setCountry("Guyana")}>Guyana
                </Dropdown.Item>
                <Dropdown.Item    value="Haiti" onClick={() =>handleSubmit()& setCountry("Haiti")}>Haiti
                </Dropdown.Item>
                <Dropdown.Item   value="Heard Island and Mcdonald Islands" onClick={() =>handleSubmit()& setCountry("Heard & McDonald Islands")}>Heard & McDonald Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Honduras" onClick={() =>handleSubmit()& setCountry("Honduras")}>Honduras
                </Dropdown.Item>
                <Dropdown.Item  value="Hong Kong" onClick={() =>handleSubmit()& setCountry("Hong Kong")}>Hong Kong
                </Dropdown.Item>
                <Dropdown.Item  value="Hungary" onClick={() =>handleSubmit()& setCountry("Hungary")}>Hungary
                </Dropdown.Item>
                <Dropdown.Item  value="Iceland" onClick={() =>handleSubmit()& setCountry("Iceland")}>Iceland
                </Dropdown.Item>
                <Dropdown.Item   value="India" onClick={() =>handleSubmit()& setCountry("India")}>India
                </Dropdown.Item>
                <Dropdown.Item   value="Indonesia" onClick={() =>handleSubmit()& setCountry("Indonesia")}>Indonesia
                </Dropdown.Item>
                <Dropdown.Item  value="Iran, Islamic Republic of" onClick={() =>handleSubmit()& setCountry("Iran")}>Iran
                </Dropdown.Item>
                <Dropdown.Item   value="Iraq" onClick={() =>handleSubmit()& setCountry("Iraq")}>Iraq
                </Dropdown.Item>
                <Dropdown.Item    value="Ireland" onClick={() =>handleSubmit()& setCountry("Ireland")}>Ireland
                </Dropdown.Item>
                <Dropdown.Item  value="Isle of Man" onClick={() =>handleSubmit()& setCountry("Isle of Man")}>Isle of Man
                </Dropdown.Item>
                <Dropdown.Item   value="Italy" onClick={() =>handleSubmit()& setCountry("Italy")}>Italy
                </Dropdown.Item>
                <Dropdown.Item   value="Jamaica" onClick={() =>handleSubmit()& setCountry("Jamaica")}>Jamaica
                </Dropdown.Item>
                <Dropdown.Item    value="Jersey" onClick={() =>handleSubmit()& setCountry("Jersey")}>Jersey
                </Dropdown.Item>
                <Dropdown.Item  value="Jordan" onClick={() =>handleSubmit()& setCountry("Jordan")}>Jordan
                </Dropdown.Item>
                <Dropdown.Item  value="Kazakhstan" onClick={() =>handleSubmit()& setCountry("Kazakhstan")}>Kazakhstan
                </Dropdown.Item>
                <Dropdown.Item  value="Kenya" onClick={() =>handleSubmit()& setCountry("Kenya")}>Kenya
                </Dropdown.Item>
                <Dropdown.Item  value="Kiribati" onClick={() =>handleSubmit()& setCountry("Kiribati")}>Kiribati
                </Dropdown.Item>
                <Dropdown.Item  value="North Korea" onClick={() =>handleSubmit()& setCountry("North Korea")}>North Korea
                </Dropdown.Item>
                <Dropdown.Item  value="South Korea" onClick={() =>handleSubmit()& setCountry("South Korea")}>South Korea
                </Dropdown.Item>
                <Dropdown.Item  value="Kosovo" onClick={() =>handleSubmit()& setCountry("Kosovo")}>Kosovo
                </Dropdown.Item>
                <Dropdown.Item  value="Kuwait" onClick={() =>handleSubmit()& setCountry("Kuwait")}>Kuwait
                </Dropdown.Item>
                <Dropdown.Item  value="Kyrgyzstan" onClick={() =>handleSubmit()& setCountry("Kyrgyzstan")}>Kyrgyzstan
                </Dropdown.Item>
                <Dropdown.Item  value="Laos" onClick={() =>handleSubmit()& setCountry("Laos")}>Laos
                </Dropdown.Item>
                <Dropdown.Item  value="Latvia" onClick={() =>handleSubmit()& setCountry("Latvia")}>Latvia
                </Dropdown.Item>
                <Dropdown.Item  value="Lebanon" onClick={() =>handleSubmit()& setCountry("Lebanon")}>Lebanon
                </Dropdown.Item>
                <Dropdown.Item  value="Lesotho" onClick={() =>handleSubmit()& setCountry("Lesotho")}>Lesotho
                </Dropdown.Item>
                <Dropdown.Item  value="Liberia" onClick={() =>handleSubmit()& setCountry("Liberia")}>Liberia
                </Dropdown.Item>
                <Dropdown.Item  value="Libya" onClick={() =>handleSubmit()& setCountry("Libya")}>Libya
                </Dropdown.Item>
                <Dropdown.Item  value="Liechtenstein" onClick={() =>handleSubmit()& setCountry("Liechtenstein")}>Liechtenstein
                </Dropdown.Item>
                <Dropdown.Item  value="Lithuania" onClick={() =>handleSubmit()& setCountry("Lithuania")}>Lithuania
                </Dropdown.Item>
                <Dropdown.Item  value="Luxembourg" onClick={() =>handleSubmit()& setCountry("Luxembourg")}>Luxembourg
                </Dropdown.Item>
                <Dropdown.Item  value="Macao" onClick={() =>handleSubmit()& setCountry("Macao")}>Macao
                </Dropdown.Item>
                <Dropdown.Item  value="North Macedonia" onClick={() =>handleSubmit()& setCountry("North Macedonia")}>North Macedonia
                </Dropdown.Item>
                <Dropdown.Item  value="Madagascar" onClick={() =>handleSubmit()& setCountry("Madagascar")}>Madagascar
                </Dropdown.Item>
                <Dropdown.Item  value="Malawi" onClick={() =>handleSubmit()& setCountry("Malawi")}>Malawi
                </Dropdown.Item>
                <Dropdown.Item  value="Malaysia" onClick={() =>handleSubmit()& setCountry("Malaysia")}>Malaysia
                </Dropdown.Item>
                <Dropdown.Item  value="Maldives" onClick={() =>handleSubmit()& setCountry("Maldives")}>Maldives
                </Dropdown.Item>
                <Dropdown.Item  value="Mali" onClick={() =>handleSubmit()& setCountry("Mali")}>Mali
                </Dropdown.Item>
                <Dropdown.Item  value="Malta" onClick={() =>handleSubmit()& setCountry("Malta")}>Malta
                </Dropdown.Item>
                <Dropdown.Item  value="Marshall Islands" onClick={() =>handleSubmit()& setCountry("Marshall Islands")}>Marshall Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Martinique" onClick={() =>handleSubmit()& setCountry("Martinique")}>Martinique
                </Dropdown.Item>
                <Dropdown.Item  value="Mauritania" onClick={() =>handleSubmit()& setCountry("Mauritania")}>Mauritania
                </Dropdown.Item>
                <Dropdown.Item  value="Mauritius" onClick={() =>handleSubmit()& setCountry("Mauritius")}>Mauritius
                </Dropdown.Item>
                <Dropdown.Item  value="Mayotte" onClick={() =>handleSubmit()& setCountry("Mayotte")}>Mayotte
                </Dropdown.Item>
                <Dropdown.Item  value="Mexico" onClick={() =>handleSubmit()& setCountry("Mexico")}>Mexico
                </Dropdown.Item>
                <Dropdown.Item  value="Micronesia" onClick={() =>handleSubmit()& setCountry("Micronesia")}>Micronesia
                </Dropdown.Item>
                <Dropdown.Item  value="Moldova" onClick={() =>handleSubmit()& setCountry("Moldova")}>Moldova
                </Dropdown.Item>
                <Dropdown.Item  value="Monaco" onClick={() =>handleSubmit()& setCountry("Monaco")}>Monaco
                </Dropdown.Item>
                <Dropdown.Item  value="Mongolia" onClick={() =>handleSubmit()& setCountry("Mongolia")}>Mongolia
                </Dropdown.Item>
                <Dropdown.Item  value="Montenegro" onClick={() =>handleSubmit()& setCountry("Montenegro")}>Montenegro
                </Dropdown.Item>
                <Dropdown.Item  value="Montserrat" onClick={() =>handleSubmit()& setCountry("Montserrat")}>Montserrat
                </Dropdown.Item>
                <Dropdown.Item  value="Morocco" onClick={() =>handleSubmit()& setCountry("Morocco")}>Morocco
                </Dropdown.Item>
                <Dropdown.Item  value="Mozambique" onClick={() =>handleSubmit()& setCountry("Mozambique")}>Mozambique
                </Dropdown.Item>
                <Dropdown.Item  value="Myanmar" onClick={() =>handleSubmit()& setCountry("Myanmar")}>Myanmar
                </Dropdown.Item>
                <Dropdown.Item  value="Namibia" onClick={() =>handleSubmit()& setCountry("Namibia")}>Namibia
                </Dropdown.Item>
                <Dropdown.Item  value="Nauru" onClick={() =>handleSubmit()& setCountry("Nauru")}>Nauru
                </Dropdown.Item>
                <Dropdown.Item  value="Nepal" onClick={() =>handleSubmit()& setCountry("Nepal")}>Nepal
                </Dropdown.Item>
                <Dropdown.Item  value="Netherlands" onClick={() =>handleSubmit()& setCountry("Netherlands")}>Netherlands
                </Dropdown.Item>
                <Dropdown.Item  value="New Caledonia" onClick={() =>handleSubmit()& setCountry("New Caledonia")}>New Caledonia
                </Dropdown.Item>
                <Dropdown.Item  value="New Zealand" onClick={() =>handleSubmit()& setCountry("New Zealand")}>New Zealand
                </Dropdown.Item>
                <Dropdown.Item  value="Nicaragua" onClick={() =>handleSubmit()& setCountry("Nicaragua")}>Nicaragua
                </Dropdown.Item>
                <Dropdown.Item  value="Niger" onClick={() =>handleSubmit()& setCountry("Niger")}>Niger
                </Dropdown.Item>
                <Dropdown.Item  value="Nigeria" onClick={() =>handleSubmit()& setCountry("Nigeria")}>Nigeria
                </Dropdown.Item>
                <Dropdown.Item  value="Niue" onClick={() =>handleSubmit()& setCountry("Niue")}>Niue
                </Dropdown.Item>
                <Dropdown.Item  value="Norfolk Island" onClick={() =>handleSubmit()& setCountry("Norfolk Island")}>Norfolk Island
                </Dropdown.Item>
                <Dropdown.Item  value="Northern Mariana Islands" onClick={() =>handleSubmit()& setCountry("Northern Mariana Islands")}>Northern Mariana Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Norway" onClick={() =>handleSubmit()& setCountry("Norway")}>Norway
                </Dropdown.Item>
                <Dropdown.Item  value="Oman" onClick={() =>handleSubmit()& setCountry("Oman")}>Oman
                </Dropdown.Item>
                <Dropdown.Item  value="Palau" onClick={() =>handleSubmit()& setCountry("Palau")}>Palau
                </Dropdown.Item>
                <Dropdown.Item  value="Panama" onClick={() =>handleSubmit()& setCountry("Panama")}>Panama
                </Dropdown.Item>
                <Dropdown.Item  value="Papua New Guinea" onClick={() =>handleSubmit()& setCountry("Papua New Guinea")}>Papua New Guinea
                </Dropdown.Item>
                <Dropdown.Item  value="Paraguay" onClick={() =>handleSubmit()& setCountry("Paraguay")}>Paraguay
                </Dropdown.Item>
                <Dropdown.Item  value="Peru" onClick={() =>handleSubmit()& setCountry("Peru")}>Peru
                </Dropdown.Item>
                <Dropdown.Item  value="Philippines" onClick={() =>handleSubmit()& setCountry("Philippines")}>Jordan
                </Dropdown.Item>
                <Dropdown.Item  value="Pitcairn Islands" onClick={() =>handleSubmit()& setCountry("Pitcairn Islands")}>Pitcairn Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Poland" onClick={() =>handleSubmit()& setCountry("Poland")}>Poland
                </Dropdown.Item>
                <Dropdown.Item  value="Portugal" onClick={() =>handleSubmit()& setCountry("Portugal")}>Portugal
                </Dropdown.Item>
                <Dropdown.Item  value="Puerto Rico" onClick={() =>handleSubmit()& setCountry("Puerto Rico")}>Puerto Rico
                </Dropdown.Item>
                <Dropdown.Item  value="Qatar" onClick={() =>handleSubmit()& setCountry("Qatar")}>Qatar
                </Dropdown.Item>
                <Dropdown.Item  value="Réunion" onClick={() =>handleSubmit()& setCountry("Aland Islands")}>Réunion
                </Dropdown.Item>
                <Dropdown.Item  value="Romania" onClick={() =>handleSubmit()& setCountry("Aland Islands")}>Romania
                </Dropdown.Item>
                <Dropdown.Item  value="Russia" onClick={() =>handleSubmit()& setCountry("Russia")}>Russia
                </Dropdown.Item>
                <Dropdown.Item  value="Rwanda" onClick={() =>handleSubmit()& setCountry("Rwanda")}>Rwanda
                </Dropdown.Item>
                <Dropdown.Item  value="Jordan" onClick={() =>handleSubmit()& setCountry("Aland Islands")}>Samoa
                </Dropdown.Item>
                <Dropdown.Item  value="Saudi Arabia" onClick={() =>handleSubmit()& setCountry("Saudi Arabia")}>Saudi Arabia
                </Dropdown.Item>
                <Dropdown.Item  value="Senegal" onClick={() =>handleSubmit()& setCountry("Aland Islands")}>Senegal
                </Dropdown.Item>
                <Dropdown.Item  value="Serbia" onClick={() =>handleSubmit()& setCountry("Serbia")}>Serbia
                </Dropdown.Item>
                <Dropdown.Item  value="Seychelles" onClick={() =>handleSubmit()& setCountry("Seychelles")}>Seychelles
                </Dropdown.Item>
                <Dropdown.Item  value="Sierra Leone" onClick={() =>handleSubmit()& setCountry("Sierra Leone")}>Sierra Leone
                </Dropdown.Item>
                <Dropdown.Item  value="Singapore" onClick={() =>handleSubmit()& setCountry("Singapore")}>Singapore
                </Dropdown.Item>
                <Dropdown.Item  value="Slovakia" onClick={() =>handleSubmit()& setCountry("Slovakia")}>Slovakia
                </Dropdown.Item>
                <Dropdown.Item  value="Slovenia" onClick={() =>handleSubmit()& setCountry("Slovenia")}>Slovenia
                </Dropdown.Item>
                <Dropdown.Item  value="Solomon Islands" onClick={() =>handleSubmit()& setCountry("Solomon Islands")}>Solomon Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Somalia" onClick={() =>handleSubmit()& setCountry("Somalia")}>Somalia
                </Dropdown.Item>
                <Dropdown.Item  value="Jordan" onClick={() =>handleSubmit()& setCountry("South Africa")}>South Africa
                </Dropdown.Item>
                <Dropdown.Item  value="South Sudan" onClick={() =>handleSubmit()& setCountry("South Sudan")}>South Sudan
                </Dropdown.Item>
                <Dropdown.Item  value="Spain" onClick={() =>handleSubmit()& setCountry("Sri Lanka")}>Sri Lanka
                </Dropdown.Item>
                <Dropdown.Item  value="Suriname" onClick={() =>handleSubmit()& setCountry("Suriname")}>Suriname
                </Dropdown.Item>
                <Dropdown.Item  value="Sweden" onClick={() =>handleSubmit()& setCountry("Sweden")}>Sweden
                </Dropdown.Item>
                <Dropdown.Item  value="Switzerland" onClick={() =>handleSubmit()& setCountry("Switzerland")}>Switzerland
                </Dropdown.Item>
                <Dropdown.Item  value="Syria" onClick={() =>handleSubmit()& setCountry("Syria")}>Syria
                </Dropdown.Item>
                <Dropdown.Item  value="Taiwan" onClick={() =>handleSubmit()& setCountry("Taiwan")}>Taiwan
                </Dropdown.Item>
                <Dropdown.Item  value="Tajikistan" onClick={() =>handleSubmit()& setCountry("Tajikistan")}>Tajikistan
                </Dropdown.Item>
                <Dropdown.Item  value="Tanzania" onClick={() =>handleSubmit()& setCountry("Tanzania")}>Tanzania
                </Dropdown.Item>
                <Dropdown.Item  value="Tunisia" onClick={() =>handleSubmit()& setCountry("Tunisia")}>Tunisia
                </Dropdown.Item>
                <Dropdown.Item  value="Turkey" onClick={() =>handleSubmit()& setCountry("Turkey")}>Turkey
                </Dropdown.Item>
                <Dropdown.Item  value="Turkmenistan" onClick={() =>handleSubmit()& setCountry("Turkmenistan")}>Turkmenistan
                </Dropdown.Item>
                <Dropdown.Item  value="Tuvalu" onClick={() =>handleSubmit()& setCountry("Tuvalu")}>Tuvalu
                </Dropdown.Item>
                <Dropdown.Item  value="Uganda" onClick={() =>handleSubmit()& setCountry("Uganda")}>Uganda
                </Dropdown.Item>
                <Dropdown.Item  value="Ukraine" onClick={() =>handleSubmit()& setCountry("Ukraine")}>Ukraine
                </Dropdown.Item>
                <Dropdown.Item  value="United Arab Emirates" onClick={() =>handleSubmit()& setCountry("United Arab Emirates")}>United Arab Emirates
                </Dropdown.Item>
                <Dropdown.Item  value="United Kingdom" onClick={() =>handleSubmit()& setCountry("United Kingdom")}>United Kingdom
                </Dropdown.Item>
                <Dropdown.Item  value="United States" onClick={() =>handleSubmit()& setCountry("United States")}> United States
                </Dropdown.Item>
                <Dropdown.Item  value="Uruguay" onClick={() =>handleSubmit()& setCountry("Uruguay")}>Uruguay
                </Dropdown.Item>
                <Dropdown.Item  value="Uzbekistan" onClick={() =>handleSubmit()& setCountry("Uzbekistan")}>Uzbekistan
                </Dropdown.Item>
                <Dropdown.Item  value="Vanuatu" onClick={() =>handleSubmit()& setCountry("Vanuatu")}>Vanuatu
                </Dropdown.Item>
                <Dropdown.Item  value="Venezuela" onClick={() =>handleSubmit()& setCountry("Venezuela")}>Venezuela
                </Dropdown.Item>
                <Dropdown.Item  value="Vietnam " onClick={() =>handleSubmit()& setCountry("Vietnam")}>Vietnam
                </Dropdown.Item>
                <Dropdown.Item  value="British Virgin Islands" onClick={() =>handleSubmit()& setCountry("British Virgin Islands")}>British Virgin Islands
                </Dropdown.Item>
                <Dropdown.Item  value="Wallis & Futuna" onClick={() =>handleSubmit()& setCountry("Wallis & Futuna")}>Wallis & Futuna
                </Dropdown.Item>
                <Dropdown.Item  value="Western Sahara" onClick={() =>handleSubmit()& setCountry("Western Sahara")}>Uruguay
                </Dropdown.Item>
                <Dropdown.Item  value="Yemen" onClick={() =>handleSubmit()& setCountry("Yemen")}>Yemen
                </Dropdown.Item>
                <Dropdown.Item  value="Zambia" onClick={() =>handleSubmit()& setCountry("Zambia")}>Zambia
                </Dropdown.Item>
                <Dropdown.Item  value="Zimbabwe" onClick={() =>handleSubmit()& setCountry("Zimbabwe")}>Zimbabwe
                </Dropdown.Item>
        



                
                
                


                </div>
            </Dropdown>
            </div>
        </div>
       
      </nav>
                
    </>
  );
}

export default Navbar;

// import { Link } from 'react-router-dom'
// import {useNavigate } from 'react-router-dom';
// import { useState } from "react";
// const Navbar = () => {
//   const navigate=useNavigate();
//   const [error, setError] = useState(null);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//      //console.log({token})
//     const response = await fetch(`/logout`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setError(null);
//       navigate("/");
//       console.log(json);
//     }
//   };
//   return (
//     <header>
//       <div className="container">
//         <Link to="/">
//           <h1>University Portal</h1>
//         </Link>
//         <Link to="/home">
//           <p>Home</p>
//         </Link>
//         <Link to="/login">
//         <p>LOGIN </p>
//         </Link>
//         <Link to="/SignUp">
//         <p>Sign up </p>
//         </Link>
//         <form className="create" onSubmit={handleSubmit}>
//         <div className="button-container">
//       <button>Logout</button>
//       {error && <div className="error">{error}</div>}
//       </div>
//         </form>
//       </div>
//     </header>
//   )
// }

// export default Navbar