import { type NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Deletar: NextPage = () => {
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
          {language === "pt" ? "deletar" : "delete"}
        </h1>
        <label className="rounded-lg text-2xl font-bold">
          {" "}
          {language === "pt" ? "id" : "id"}
        </label>
        <input
          {...register("id", { required: true })}
          type="text"
          placeholder={language === "pt" ? "id" : "id"}
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

export default Deletar;
