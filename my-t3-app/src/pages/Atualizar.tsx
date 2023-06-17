import { type NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Atualizar: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [language, setLanguage] = useState<"en" | "pt">("en");
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
          {language === "pt" ? "Atualizar" : "Update"}
        </h1>
        
        <input
          {...register("en", { required: true })}
          type="text"
          placeholder={language === "pt" ? "lang" : "lang"}
          className="rounded-lg p-2 text-lg text-black"
          value={language === "pt" ? "pt" : "en"}
          hidden
        />
        <label className="rounded-lg text-2xl font-bold">
          {language === "pt" ? "id" : "id"}
        </label>
        <input
          {...register("id", { required: true })}
          type="text"
          placeholder={language === "pt" ? "id" : "id"}
          className="rounded-lg p-2 text-lg text-black"
        />
        <label className="rounded-lg text-2xl font-bold">
        
          {language === "pt" ? "Nome" : "Name"}
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder={language === "pt" ? "Nome" : "Name"}
          className="rounded-lg p-2 text-lg text-black"
        />

        <label className="text-2xl font-bold">
          {language === "pt" ? "Subtitulo" : "Subtitle"}
        </label>
        <input
          {...register("subtitle", { required: true })}
          type="text"
          placeholder={language === "pt" ? "Subtitulo" : "Subtitle"}
          className="rounded-lg p-2 text-lg text-black "
        />

        <label className="text-2xl font-bold">
          {language === "pt" ? "Descrição" : "Description"}
        </label>
        <input
          {...register("description", { required: true })}
          type="text"
          placeholder={language === "pt" ? "Descrição" : "Description"}
          className="rounded-lg p-2 text-lg text-black"
        />
        <label className="text-2xl font-bold">
          {language === "pt" ? "Preço" : "Price"}
        </label>
        <input
          {...register("price", { required: true })}
          type="number"
          placeholder={language === "pt" ? "Preço" : "Price"}
          className="rounded-lg p-2 text-lg text-black"
        />
        <button
          type="submit"
          className="rounded-lg bg-red-600 text-2xl font-bold"
        >
          {language === "pt" ? "Enviar" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Atualizar;
