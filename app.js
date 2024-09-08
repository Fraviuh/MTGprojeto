function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo").value

    if (campoPesquisa == "") {
        section.innerHTML = "Sem resultados"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                    <p class="descricao-meta">${dado.tipo}; ${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações clique aqui</a>
            </div>
        `;
        }        
        
    }

    if (!resultados) {
        resultados = "<p> Nada foi Encontrado </p>"
    }

    section.innerHTML = resultados
}

