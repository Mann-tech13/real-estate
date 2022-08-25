import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import "../styles/product.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import Img1 from "../images/img1.png"
import Img2 from "../images/img2.jpg"
import Img3 from "../images/img3.jpg"
import Img4 from "../images/img4.jpg"
import Img5 from "../images/img5.jpg"
import Img6 from "../images/img6.jpg"
import Img7 from "../images/img7.jpg"
import Img8 from "../images/img8.jpg"
import Img9 from "../images/img9.jpg"
import Img10 from "../images/img10.jpg"


function Product() {

  // const options = {
  //   method: 'GET',
  //   url: 'https://bayut.p.rapidapi.com/agencies/list',
  //   params: {query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en'},
  //   headers: {
  //     'X-RapidAPI-Key': '5182f24adcmsh95a5bfed385303dp104125jsnd9ca2b9a7921',
  //     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  //   }
  // };
  // const [property, setproperty] = useState([])

  // useEffect(() => {
  //   axios.request(options).then(response =>{
  //     console.log(response)

  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // })
  
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [search, setSearch] = useState("")
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);
  const [price, setPrice] = useState("")
  const [property, setProperty] = useState("")

  useEffect(() => {
    const list = [
      {path: Img1, cost: "$2999", period: "/month", place: "Middletown", address: "282 E Main ST, NY", type: "Bungalow", bed: "4BHK", bathroom: "4", area: "6x9.75m"},
      {path: Img2, cost: "$2500", period: "/month", place: "Newburgh", address: "165 LATTINTOWN, NY", type: "Bungalow", bed: "5BHK", bathroom: "5", area: "7x9.35m"},
      {path: Img3, cost: "$3500", period: "/month", place: "Rome", address: "7363 KOEING, NY", type: "Bungalow", bed: "4BHK", bathroom: "4", area: "7x8.75m"},
      {path: Img4, cost: "$4599", period: "/month", place: "Kingston", address: "80 SAINT JAMES, NY", type: "Bungalow", bed: "6BHK", bathroom: "7", area: "8x10.75m"},
      {path: Img5, cost: "$3999", period: "/month", place: "Kingston", address: "SEVEN GREENS, NY", type: "Bungalow", bed: "5BHK", bathroom: "4", area: "5x9.55m"},
      {path: Img6, cost: "$999", period: "/month", place: "Newburgh", address: "88 OAK, NY", type: "Flat", bed: "3BHK", bathroom: "2", area: "3x5.75m"},
      {path: Img7, cost: "$1499", period: "/month", place: "Rome", address: "5401 BARLETT, NY", type: "Flat", bed: "2BHK", bathroom: "2", area: "4x5.75m"},
      {path: Img8, cost: "$2199", period: "/month", place: "Middletown", address: "25 INDUSTRIAL PARK, NY", type: "Flat", bed: "3BHK", bathroom: "3", area: "3x5.95m"},
      {path: Img9, cost: "$899", period: "/month", place: "Newburgh", address: "302 PARR MIDOW, NY", type: "Flat", bed: "2BHK", bathroom: "2", area: "2x4.15m"},
      {path: Img10, cost: "$2222", period: "/month", place: "Rome", address: "2699 Green Valley Highland Lake, NY", type: "Flat", bed: "1BHK", bathroom: "1", area: "2x2.65m"},
    ];
    setData(list)
    setSearchData(list)
  }, [])
  
  const handleSearch = () => {
    const filterData = data.filter(x => x.place == (search == "" ? x.place : search))
    setSearchData(filterData)
  }

  const filteredSearchOperation = () => {
    // console.log(property)
    const filterData1 = data.filter(x => parseInt(x.cost.substring(1)) <= (price == "None" ? parseInt(x.cost.substring(1)) : parseInt(price.substring(1))))
    const filterData2 = filterData1.filter(x => x.type == (property == "None" ? x.type : property))
    setSearchData(filterData2)
  }

  return (
    <div className="product">

      <div className="heading">
        <h1 className='headingcontent'>Search Properties for Rent</h1>
        <input className='search' placeholder='Eg: Rome' onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="filterBar">
        <div className="location">
          <p className="subcontent">Location</p>
          <p className="content">New York, USA</p>
        </div>
        <div className="Timeline">
          <p className="subcontent">When</p>
          <p className="content"><DatePicker selected={date} className="datetime" onChange={handleChange} /></p>
        </div>
        <div className="Range">
          <p className="subcontent">Upto Price</p>
          <select name="" id="" className="price" onChange={(e) => setPrice(e.target.value)}>
            <option value="None">None</option>
            <option value="$500">$500</option>
            <option value="$2500">$2500</option>
            <option value="$3500">$3500</option>
            <option value="$5000+">$5000</option>
          </select>
        </div>
        <div className="propertyType" >
          <p className="subcontent">Property Type</p>
          <select name="" id="" className="property" onChange={(e) => setProperty(e.target.value)}>
            <option value="None">None</option>
            <option value="Flat">Flat</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>
        <div className="filteredSearch">
          <input type="button" value="Search" onClick={filteredSearchOperation} className="filteredval"/>
        </div>
      </div>

      <div className="imgs">
        {
          searchData && searchData.length > 0 ? 
          searchData.map(item => 
            <div className='block-card'>
              <img src={item.path} className="propertyImg" alt="" />
              <div>
              <p> <span>{item.cost}</span>{item.period}</p>
              <p className='head'>{item.place}</p>
              <p className='headcontent'>{item.address}</p>
              <br />  
              <hr />
              <div className="info">
                <div className="bed"><BedIcon/> &nbsp; {item.bed}</div>
                <div className="bathroom"><ShowerIcon/> &nbsp; {item.bathroom}</div>
                <div className="bed"><CropSquareIcon/> &nbsp; {item.area}</div>
              </div>
              </div>
            </div>
            ) : "No data"
        }
      </div>
    </div>
  )
}

export default Product