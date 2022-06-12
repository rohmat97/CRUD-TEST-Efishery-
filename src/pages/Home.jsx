import React, { useEffect, useMemo, useState } from 'react'
import Table from '../components/Home/Table'  // new

import axios from 'axios';
import Modals from '../components/Home/Modals';
import LoadingState from '../components/Home/LoadingState';
import { store } from '../services/Lotties';
import DeleteSuccess from '../components/Home/DeleteSuccess';
const Home = (props) => {
    const { seteditData , editData} = props
    const [listData, setlistData] = useState([])
    const [limit, setlimit] = useState([])
    const [DeleteActive, setDeleteActive] = useState(false)
    const [deleteSuccess, setdeleteSuccess] = useState(false)
    const [paramsDelete, setparamsDelete] = useState()
    const [loading, setloading] = useState(true)
    const columns = useMemo(() => [
        {
            Header: "Commodity",
            accessor: 'komoditas',
        },
        {
            Header: "Province",
            accessor: 'area_provinsi',
        },
        {
            Header: "City",
            accessor: 'area_kota',
        },
        {
            Header: "Price",
            accessor: 'price',
        },
        {
            Header: "Date Added",
            accessor: 'tgl_parsed',
        },
        {
            Header: "Action",
            accessor: 'action',
        },
    ], [])


    const getAPILimit = () => {
        store.read("option_size").then(data => {
            // console.log(data);
            setlimit(data)
        });
        // axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size')
        //     .then(res => setlimit(res.data))
    }

    const getAPIListData = (limit, offset) => {
        store.read("list").then(data => {
            // console.log(data);
            setlistData(data.filter(data => data.uuid))
        });
        // axios.get(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list`)
        //     .then(res => setlistData(res.data.filter(data => data.uuid)))
    }

    const deleteAPIData = (payload) => {
        const { uuid } = payload
        const params = {
            "condition": {
                "uuid": uuid
            }
        }
        axios.delete(`${process.env.REACT_APP_API_URL}/list`, { data: params })
            .then(async () => {
                await setdeleteSuccess(true)
                await getAPIListData()
                setTimeout(() => {
                    setdeleteSuccess(false)
                }, 2000);
            })
        // idk why not working use this
        // store.delete("list", {
        //     search: params
        //   })
        //   .then(async () => {
        //     await setdeleteSuccess(true)
        //     await getAPIListData()
        //     setTimeout(() => {
        //         setdeleteSuccess(false)
        //     }, 2000);
        //   })
    }
    useEffect(() => {
        getAPILimit()
        getAPIListData()
    }, [])



    useEffect(() => {
        if (listData.length > 11 && limit.length > 1) {
            setTimeout(() => {
                setloading(false)
            }, 1000);
        }
    }, [listData, limit])
    
    return (
        <div className="min-h-screen text-gray-900">
            {
                loading && <LoadingState />
            }
            {
                DeleteActive && <Modals params={paramsDelete} setDeleteActive={setDeleteActive} deleteAPIData={deleteAPIData} setparamsDelete={setparamsDelete} />
            }
            {
                deleteSuccess && <DeleteSuccess />
            }
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="mt-6">
                    <Table columns={columns} data={listData} limit={limit} setparamsDelete={setparamsDelete} setDeleteActive={setDeleteActive} seteditData={seteditData} />
                </div>
            </main>
        </div>
    )
}

export default Home