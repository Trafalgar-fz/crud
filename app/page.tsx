"use client"

import { faPencil, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getData, setUpdateStatus } from './models/mahasiswa'

export default function RootPage() {
  // buat hook ("use state")
  const [getValue, setValue] = useState({})

  // buat fungsi "fetch data"
  async function fetchData() {
    setValue(await getData());
  }

  // buat hook ("use effect")
  useEffect(() => {
    // panggil fungsi "fetch data"
    fetchData();
  }, [])

  // buat fungsi delete
  // parameter formal
  function setDelete(npm: string, nama: string) {
    // alert("Data berhasil dihapus!");
    if(confirm(`Data Mahasiswa : ${npm} - ${nama} \nIngin Di Hapus ?`) == true)
    {
       setUpdateStatus(npm)
       alert(`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus`);
       //reload data
       location.reload();
    } 
    // else {
    //   alert("Tombol Cancel");
    // }

  }

  return (
    <>
      <title>Data Mahasiswa</title>
      {/* menu tambah data mahasiswa */}
      <nav className='mb-5 flex justify-end text-center'>
        <button className="btn btn-outline btn-success">
          <Link href={"/add"}>
            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
            Add Data
          </Link>
        </button>
      </nav>
      {/* tampilkan data mahasiswa */}
      <table className='w-full'>
        <thead>
          <tr className='bg-slate-300 h-10'>
            <th className='w-10% border border-slate-600'>Aksi</th>
            <th className='w-10% border border-slate-600'>Npm</th>
            <th className='w-50% border border-slate-600'>Nama</th>
            <th className='w-30% border border-slate-600'>Jurusan</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>{data.npm} - {data.nama} - {data.jurusan}</div>
            // </div>
            <tr key={index}>
            <td className="text-center border border-slate-600 p-2">
              {/* Edit Icon */}
              <Link 
                href={`/edit/${btoa(data.npm)}`} 
                className="bg-green-600 text-white px-2.5 py-1 rounded-md mr-1 text-sm" 
                title="Edit"
              >
                <FontAwesomeIcon icon={faPencil} />
              </Link>
          
              {/* Delete Icon */}
              <button
                className="bg-red-600 text-white px-2.5 py-1 rounded-md ml-1 text-sm"
                title="Delete"
                onClick={() => setDelete(data.npm, data.nama)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
            <td className="text-center border border-slate-600">{data.npm}</td>
            <td className="text-left border border-slate-600 px-2.5">{data.nama}</td>
            <td className="text-center border border-slate-600">{data.jurusan}</td>
          </tr>
          
        ))}
      </tbody>
    </table>

    {/* {mahasiswa?.npm} */}
    </>
  )


  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })

  
}
