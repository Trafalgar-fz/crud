"use server"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); //buat variabel "prisma"

// fungsi tampil data
export async function getData() {
  // buat variabel "mahasiswa" untuk menampilkan data mahasiswa
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
      // jurusan: "informatika",
      // jurusan: {
      // startsWith: "Sistem"
      // endsWith: "Tika"
      // contains: "tem"
      // }
    },
  });

  return mahasiswa;
}

// buat fungsi (arrow function) untuk update status
// export async function setUpdateStatus()
export const setUpdateStatus = async(npm: string) =>
{
    // buat variabel "mahasiswa" untuk ubah data mahasiswa dari Y >> N
  await prisma.tb_mahasiswa.updateMany({
    where: {
      npm: npm,
    },
    data: {
      status: "N",
    },
  });

}
// buat fungsi untuk cek data mahasiswa ("npm")
export const checkData = async(npm: string) => {
  const check = await prisma.tb_mahasiswa.findMany({
    select: {
      id: true,
    },
    where: {
      npm: npm
    }
  });

  return check;
}