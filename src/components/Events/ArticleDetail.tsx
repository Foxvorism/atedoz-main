"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import axios from "axios";

export default function ArticleDetail({ id }: { id: number }) {
  const [article, setArticle] = useState({
    id: 0,
    judul: "",
    content: "",
    thumbnail: "",
    updated_at: "",
  });

  const fetchArticleById = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/articles/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //   if (response.data) {
      setArticle({
        id: response.data.id,
        judul: response.data.judul || "",
        thumbnail: response.data.thumbnail || "",
        content: response.data.content || "",
        updated_at: response.data.updated_at || "",
      });
      console.log(response.data);
      //   } else {
      //     Swal.fire({
      //       icon: "error",
      //       title: "Data tidak ditemukan",
      //       text: "Pricelist ID tidak sesuai.",
      //       showConfirmButton: true,
      //     });
      //   }
    } catch (error) {
      //   handleError(error);
      console.log(error);
    }
  };

  //   const handleError = (error: any) => {
  //     if (axios.isAxiosError(error) && error.response?.status === 401) {
  //       Swal.fire({
  //         icon: "error",
  //         title: error.response.data.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       localStorage.removeItem("token");
  //       window.location.href = "/signin";
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "An error occurred",
  //         text: "Please try again later.",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   };

  function formatTanggalIndo(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";

    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  useEffect(() => {
    fetchArticleById();
    console.log("UPDATED_AT RAW:", article.updated_at);
  }, [id]);

  return (
    <>
      <div className="px-30 py-20">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold mb-3">{article.judul}</h2>
          <h2 className="text-lg font-normal text-gray-800/50">
            {formatTanggalIndo(article.updated_at)}
          </h2>
        </div>

        <div className="flex justify-center items-center mb-10">
          <Image
            layout="intrinsic" // Menggunakan layout intrinsic agar width menyesuaikan dengan height
            width={300} // Tentukan lebar gambar sebagai referensi rasio
            height={0}
            src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${article.thumbnail}`}
            alt={article.thumbnail}
            className="aspect-video rounded-xl w-[50%] h-full object-cover cursor-pointer"
          />
        </div>

        <div className="text-center mx-16">
          <p className="text-lg font-medium">{article.content}</p>
        </div>
      </div>
    </>
  );
}
