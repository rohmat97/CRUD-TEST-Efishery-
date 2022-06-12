import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingAdd from '../components/Comodity/LoadingAdd';
import { store } from '../services/Lotties'
import { useNavigate } from 'react-router-dom';
import SuccessAdd from '../components/Comodity/SuccessAdd';


const DropDownProvince = ({ header, Area, setData, data, active, setactive, disable }) => (
    <div className='m-4 flex flex-row'>
      <button
        id="dropdownRightStartButton"
        data-dropdown-toggle="dropdownRightStart"
        data-dropdown-placement="right-start"
        className="w-40 h-12 mb-3 text-white bg-[#C4A484] hover:bg-[#C4A484]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-[#C4A484] dark:hover:bg-[#C4A484] dark:focus:ring-blue-800"
        type="button"
        disabled={disable}
        onClick={()=>setactive(!active)}
        >
         {data?data:`Choose ${header}` }
        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd">
          </path>
        </svg>
      </button>
      {
        active && 
        <div id="dropdownRightStart" className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 overflow-y-scroll ml-4">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 max-h-64" aria-labelledby="dropdownRightStartButton">
            {
              Area.map((data,i) =>{
              return (        
                <li onClick={()=> {
                  setData(data)
                  setactive(false)
                }} key={i}>
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{data}</a>
                </li>
              )  
              })
            }
  
          </ul>
        </div>
      }
      
    </div>
  )
  
  const AlertFillMessage  =() =>(
    <div role="alert" className='max-w-xl m-auto my-12'>
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Problems
        </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>Please Fill the form before you submit</p>
      </div>
    </div>
  )

const EditComodity = (props) => {
  const { editData } = props
  const navigate = useNavigate();
  const [commodity, setcommodity] = useState(editData.komoditas)
  const [province, setprovince] = useState(editData.area_provinsi)
  const [city, setCity] = useState(editData.area_kota)
  const [price, setprice] = useState(editData.price)
  const [size, setsize] = useState(editData.size)
  const [Area, setArea] = useState([])
  const [listProvince, setlistProvince] = useState([])
  const [listCity, setlistCity] = useState([])

  const [activeProvince, setactiveProvince] = useState(false)
  const [activeCity, setactiveCity] = useState(false)
  const [erroForm, seterroForm] = useState(false)
  const [onSubmit, setonSubmit] = useState(false)
  const [successAdd, setsuccessAdd] = useState(false)

  const PostAddComodity = () => {
    // console.log(city, province,commodity,price,size)
    setonSubmit(true)
    if(city && province && commodity && price && size ){
        console.log('editData', editData)
        axios.put(process.env.REACT_APP_API_URL+'/list', {
            "condition": {
                "uuid": editData.uuid
            },
            "set": {
                "area_kota": city,
                "area_provinsi": province,
                "komoditas": commodity,
                "price": parseInt(price),
                "size": parseInt(size),
                "uuid": editData.uuid
              },
            })
            .then(data =>{
                console.log('data', data)
                  setTimeout(() => {
                    // clear state
                    setCity()
                    setprovince()
                    setcommodity()
                    setprice()
                    setsize()
                    // update state
                    setonSubmit(false)
                    setsuccessAdd(true)
                    setTimeout(() => {
                      setsuccessAdd(false)
                      navigate('/')
                    }, 2500);
                    // nav to root
                  }, 1000);
                })
                .catch(err =>{
                    console.log('err', err)
                  setonSubmit(false)
                  alert('Something problem here')
                  // console.log('err', err)
                })
    //   store
    //     .edit("list", {
    //         "condition": {
    //             "uuid": editData.uuid
    //         },
    //         "set": {
    //             "area_kota": city,
    //             "area_provinsi": province,
    //             "komoditas": commodity,
    //             "price": parseInt(price),
    //             "size": parseInt(size),
    //             "uuid": editData.uuid
    //           },
    //         })
        //    .then(data =>{
        //     console.log('data', data)
        //       setTimeout(() => {
        //         // clear state
        //         setCity()
        //         setprovince()
        //         setcommodity()
        //         setprice()
        //         setsize()
        //         // update state
        //         setonSubmit(false)
        //         setsuccessAdd(true)
        //         setTimeout(() => {
        //           setsuccessAdd(false)
        //           navigate('/')
        //         }, 2500);
        //         // nav to root
        //       }, 1000);
        //     })
        //     .catch(err =>{
        //         console.log('err', err)
        //       setonSubmit(false)
        //       alert('Something problem here')
        //       // console.log('err', err)
        //     })
    }else{
      seterroForm(true)
      setonSubmit(false)
      setTimeout(() => {
        seterroForm(false)
      }, 2500);
    }
 
  }


  const getAPIArea = () => {
    store.read("option_area").then( async data => {
      setArea(data)
      let provinsi = []
      await data.map(dat => provinsi.push(dat.province))
      setlistProvince([...new Set(provinsi)])
    });
  }

  useEffect(() => {
    getAPIArea()
  }, [])

  useEffect(() => {
  //  console.log('listProvince', listProvince)
  if(province){
    let filter = Area.filter(data => data.province === province)
    let kota = filter.map(data => data.city)
    setlistCity([...new Set(kota)])
  }
  }, [province])
  
  return (
    <div className="px-8 py-12 h-screen w-full">
      {erroForm && <AlertFillMessage />}
      {onSubmit && <LoadingAdd />}
      {successAdd && <SuccessAdd />}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  mx-auto sm:max-w-xl">
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Commodity
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            id="Commodity"
            onChange={payload => setcommodity(payload.target.value)}
            value={commodity}
            placeholder="Commodity"
          />
        </div>
        <DropDownProvince header={'Province'} Area={listProvince} data={province} setData={setprovince} active={activeProvince} setactive={setactiveProvince}/>
        <DropDownProvince header={'City'} Area={listCity} data={city} setData={setCity} active={activeCity} setactive={setactiveCity} disable={!province && true}/>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            How Much
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="number"
            id="How Much"
            onChange={payload => setsize(payload.target.value)}
            value={size}
            placeholder="How Much"
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="number"
            id="Price"
            onChange={payload => setprice(payload.target.value)}
            value={price}
            placeholder="Price"
          />
        </div>
        <li className="flex-1 mr-2" onClick={() => PostAddComodity()}>
          <a className="text-center block border border-[#C4A484] rounded py-2 px-4 bg-[#D3D3D3] hover:bg-[#C4A484] text-white" >Submit</a>
        </li>
      </form>
    </div>
  )
}

export default EditComodity