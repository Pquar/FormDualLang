import { type NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Enviar: NextPage = () => {
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
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-[2rem]">{language === "pt" ? "Enviar Produto":"Send Product"}</h1>
              <label className="text-2xl font-bold rounded-lg"> {language === "pt" ? "Nome": "Name"}</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder={language === "pt" ? "Nome": "Name"}
                className="p-2 text-lg text-black rounded-lg"
                />
              
              <label className="text-2xl font-bold">{language === "pt" ? "Subtitulo" : "Subtitle"}</label>
              <input
                {...register("subtitle", { required: true })}
                type="text"
                placeholder={language === "pt" ? "Subtitulo" : "Subtitle"}
                className="p-2 text-lg text-black rounded-lg " 
                />
              
              <label className="text-2xl font-bold">{language === "pt" ? "Descrição": "Description"}</label>
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder={language === "pt" ? "Descrição": "Description"}
                className="p-2 text-lg text-black rounded-lg"
                />
              <label className="text-2xl font-bold">{language === "pt" ? "Preço": "Price"}</label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder={language === "pt" ? "Preço": "Price"}
                className="p-2 text-lg text-black rounded-lg"
                />
              <button type="submit" className="bg-red-600 text-2xl font-bold rounded-lg">
              {language === "pt" ? "Enviar": "Submit"}
              </button>
            </form>
</>
 );
};

export default Enviar;