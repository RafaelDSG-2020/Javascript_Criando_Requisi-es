import { conecta_API } from "./Conecta_API.js";

const lista = document.querySelector("[data-lista]");

export default function Constroi_Card(titulo , descricao , url , imagem)
{
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = 
    `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `
    return video;
}

async function Listando_Videos()
{
    try
    {
        const lista_API = await conecta_API.lista_Videos();
        lista_API.forEach(element => 
    
            lista.appendChild(Constroi_Card
            (
                element.titulo,
                element.descricao,
                element.url,
                element.imagem
            )));    
    } 
    catch 
    {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a Lista de Videos </h2>`
    }
    
}




Listando_Videos();