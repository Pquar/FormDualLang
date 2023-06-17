import { type NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
type Props = {
  lang: "en" | "pt";
};
const Enviar: NextPage<Props> = ({lang}) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
<form
              onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                >
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-[2rem]">{lang === "pt" ? "Enviar Produto":"Send Product"}</h1>
              <label className="text-2xl font-bold rounded-lg"> {lang === "pt" ? "Nome": "Name"}</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder={lang === "pt" ? "Nome": "Name"}
                className="p-2 text-lg text-black rounded-lg"
                />
              
              <label className="text-2xl font-bold">{lang === "pt" ? "Subtitulo" : "Subtitle"}</label>
              <input
                {...register("subtitle", { required: true })}
                type="text"
                placeholder={lang === "pt" ? "Subtitulo" : "Subtitle"}
                className="p-2 text-lg text-black rounded-lg " 
                />
              
              <label className="text-2xl font-bold">{lang === "pt" ? "Descrição": "Description"}</label>
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder={lang === "pt" ? "Descrição": "Description"}
                className="p-2 text-lg text-black rounded-lg"
                />
              <label className="text-2xl font-bold">{lang === "pt" ? "Preço": "Price"}</label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder={lang === "pt" ? "Preço": "Price"}
                className="p-2 text-lg text-black rounded-lg"
                />
              <button type="submit" className="bg-red-600 text-2xl font-bold rounded-lg">
              {lang === "pt" ? "Enviar": "Submit"}
              </button>
            </form>
</>
 );
};

export default Enviar;