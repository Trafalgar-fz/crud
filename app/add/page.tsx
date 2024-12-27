"use client";

import React, { useState } from 'react'

export default function AddPage() {
    // buat hook ("use state")
    const [getNPM, setNPM] = useState("");
    const [getNama, setNama] = useState("");
    const [getJurusan, setJurusan] = useState("");

    // buat fungsi untuk simpan data
    const setSave = () => {
        // alert(getNPM);
        // // jika seluruh data terisi
        // if(getNPM != "" && getNama != "" && getJurusan != ""){
        //     alert("Simpan");
        // }
        // // jika ada data yang tidak terisi
        // else {
        //     alert("Lengkapi Seluruh Data !");
        // }   
        
        // Ternary Operator
        (getNPM != "" && getNama != "" && getJurusan != "")
        ? alert("Simpan")
        : [alert("Lengkapi Seluruh Data"),
          alert("Gagal")]

    }
    return (
        <div>
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className="">NPM</div>
                <div className="col-span-3">
                <input
                        type="text"
                        placeholder="NPM"
                        className="input input-bordered input-info w-full"
                        onChange={(e) => {setNPM(e.target.value)}}
                        
                        />  
                </div>
                <div className="col-start-1">Nama Mahasiswa</div>
                <div className="col-span-3">
                <input
                        type="text"
                        placeholder="Nama Mahasiswa"
                        className="input input-bordered input-info w-full" 
                        onChange={(e) => {setNama(e.target.value)}}
                        />
                </div>
                <div className="col-start-1">Jurusan</div>
                <div className="col-span-3">
                <select defaultValue={""} className="select select-success w-full"
                 onChange={(e) => {setJurusan(e.target.value)}}
                >
                <option value={""} disabled>Pilih Jurusan Mahasiswa</option>
                <option value={"Informatika"}>Informatika</option>
                <option value={"Sistem Informasi"}>Sistem Informasi</option>
                <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
                <option value={"Teknik Komputer"}>Teknik Komputer</option>
                </select>
                </div>
                <div className="col-start-2 col-span-2"></div>
                <button className="btn btn-active btn-primary mr-2px w-28"onClick={setSave}>Simpan</button>
                <button className="btn btn-active btn-secondary ml-2px w-28">Batal</button>
                
                {/* <div className="">NPM</div> */}
                {/* <div className="">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-info w-full max-w-xs" />
                </div> */}

            </div>

            
        </div>
    )
  }
