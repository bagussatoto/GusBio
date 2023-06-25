import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="flex w-full lg:flex-row lg:justify-between items-center container-fluid">
        <div className="lg:w-6/12">
          <h2 className="text-5xl font-bold leading-normal">
          Semuanya. Dalam satu, tautan sederhana dalam bio.
          </h2>
          <p className="text-lg mt-5 text-gray-500">
          Bergabunglah dengan 35 juta+ orang yang menggunakan untuk tautan mereka di Bio. Satu tautan ke
          membantu Anda membagikan semua yang Anda buat, kuratori dan jual dari Anda
          Instagram, Tiktok, Twitter, YouTube dan profil media sosial lainnya.
          </p>
          <div className="flex space-x-5 mt-8">
            <Link href={"/admin/auth/login"} className="btn btn-primary px-10">
              Masuk sekarang
            </Link>
            <Link
              href={"/admin/auth/register"}
              className="btn  btn-outline px-10"
            >
              Mendaftar
            </Link>
          </div>
        </div>
        <div className="lg:w-6/12  justify-end hidden lg:flex">
          <Image
            src={"/bg.png"}
            height={500}
            width={500}
            alt="Hero Image"
            className="mt-20"
          />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return page;
};

export default Home;
