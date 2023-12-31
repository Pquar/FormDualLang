import { type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import  Atualizar  from "./Atualizar";
import  Pegar from "./Pegar";
import  Deletar  from "./delete";
import  Enviar  from "./enviar";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const { register, handleSubmit } = useForm();
  const [activeForm, setActiveForm] = useState("form1");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  }
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  return (
    <>
      <Head>
        <title>Formulário</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <span className="text-[hsl(280,100%,70%)]">{language === "pt" ? "Pt-br" : "en"}</span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          {language === "pt" ? "Formulario para acessar os metodos dos Produtos": "Form to access the methods of Products"}
          </h1>
         <div className="flex flex-row gap-4 items-center justify-center">
            
            {activeForm === "Atualizar" && <Atualizar />}
             {activeForm === "Deletar" && <Deletar />}
              {activeForm === "Pegar" && <Pegar />}
              {activeForm === "Enviar" && <Enviar />}
            <div className="flex flex-col items-center justify-center gap-4">
            <button onClick={() => handleFormChange("Enviar")} className="rounded-lg bg-red-600 text-2xl font-bold">{language === "pt" ? "Enviar": "Submit"}</button>
            <button onClick={() => handleFormChange("Pegar")} className="rounded-lg bg-red-600 text-2xl font-bold">{language === "pt" ? "Atualizar": "Update"}</button>
            <button onClick={() => handleFormChange("Deletar")} className="rounded-lg bg-red-600 text-2xl font-bold">{language === "pt" ? "deletar": "delete"}</button>
            <button onClick={() => handleFormChange("Atualizar")} className="rounded-lg bg-red-600 text-2xl font-bold">{language === "pt" ? "Lista de Produtos": "list of Itens"}</button>
            </div>
        





            </div>
          <button onClick={toggleLanguage} className="text-white hover:underline">
            {language === "pt" ? "Switch to English" : "Alternar para Português"}
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
