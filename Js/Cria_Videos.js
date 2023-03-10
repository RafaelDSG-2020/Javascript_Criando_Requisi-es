import { conecta_API } from "./Conecta_API.js";

const Form = document.querySelector("[data-formulario]");

async function Cria_Videos(Event)
{
    Event.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    const descricao = Math.floor(Math.random() * 10).toString();

    try 
    {
        await conecta_API.Cria_Video(titulo , descricao , url , imagem);

        window.location.href = "../pages/envio-concluido.html";    
    } 
    catch (error)
    {
        alert(error);
    }
    
    

}

Form.addEventListener("submit", Event => {Cria_Videos(Event)});
