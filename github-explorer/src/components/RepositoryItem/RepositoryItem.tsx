
// interface que possui uma propriedade chamada repository que é um objeto que possui as propriedades name, description e link
export interface IRepositoryItem{
    name: string;
    description: string;
    html_url: string;
}


//função RepositoryItem recebe um objeto como parâmetro, e esse objeto tem uma propriedade repository do tipo IRepositoryItem; indica que a função espera um objeto que tenha uma propriedade repository do tipo IRepositoryItem;  é uma desestruturação de objetos combinada com a definição do tipo da propriedade repository
export function RepositoryItem({repository}: {repository: IRepositoryItem}){
    return(
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Acessar Repositório</a>
        </li>
               
    )
}