import { conecta_API } from "./Conecta_API.js";
import Constroi_Card from "./Mostrar_Videos.js";

const Pesquisador = document.querySelector(".cabecalho__pesquisar");

//console.log(Pesquisador);

async function Busca_Videos(Event)
{
    Event.preventDefault();
    const Buscador = document.querySelector("[data-pesquisa]").value;
    const busca = await conecta_API.Busca_Videos(Buscador);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild)
    {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => 
    {
        lista.appendChild(Constroi_Card
            (element.titulo, element.descricao, element.url,element.imagem))    
    });

    if(busca.length == 0)
    {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Video Procurado não Existe!</h2> `
    }
}


Pesquisador.addEventListener("click", Event =>{Busca_Videos(Event)})