import { type NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
type Props = {
  lang: "en" | "pt";
};
const Pegar: NextPage<Props> = ({lang}) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-[2rem]">
          {lang === "pt" ? "Pegar Produtos" : "Get Produts"}
        </h1>
        <label className="rounded-lg text-2xl font-bold">
          {" "}
          {lang === "pt" ? "id" : "id"}
        </label>
        <input
          {...register("id", { required: true })}
          type="text"
          placeholder={lang === "pt" ? "id" : "id"}
          className="rounded-lg p-2 text-lg text-black"
        />

        <button
          type="submit"
          className="rounded-lg bg-red-600 text-2xl font-bold"
        >
          {lang === "pt" ? "Enviar" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Pegar;
