async function lista_Videos()
{
    const conexao = await fetch("http://localhost:3000/videos");
    const conexao_Convertida = await conexao.json();
    console.log(conexao_Convertida);

    return conexao_Convertida;
}

async function Cria_Video(titulo , descricao , url , imagem)
{
    const conexao = await fetch("http://localhost:3000/videos",
    {
        method:"POST",
        headers:
        {
            "Content-type": "application/json"
        },
        body: JSON.stringify
        ({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem            
        })
        
    });
    if(!conexao.ok)
    {
        throw new Error("Não foi possivel enviar o vídeo");
    }
    const Conexao_Convertida = await conexao.json();
    return Conexao_Convertida;
}


async function Busca_Videos(Palavra_Chave)
{
    const conexao = await fetch(`http://localhost:3000/videos?q=${Palavra_Chave}`);
    const Conexao_convertida = await conexao.json();
    return Conexao_convertida;
}

export const conecta_API = 
{
    lista_Videos,
    Cria_Video,
    Busca_Videos,
}

