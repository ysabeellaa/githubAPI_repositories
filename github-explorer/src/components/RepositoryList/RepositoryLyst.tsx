import { useState, useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import style from "./repositoryList.module.scss"
import {IRepositoryItem} from "../RepositoryItem/RepositoryItem";

//https://api.github.com/users/ysabeellaa/repos

export function RepositoryList(){
    //é preciso informar ao TypeScript o tipo dos objetos que serão armazenados no array
    const [repositories, setRepositories] = useState<IRepositoryItem[]>([]);


    // faz uma aquisição a API com o método fetch que faz uma requisição a uma API e retorna uam promise que é tartada com o método then (a resposta é convertida em json e depois o data é salvo na variável de repositorios)

    useEffect (() =>{
        fetch('https://api.github.com/users/ysabeellaa/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);


    return(
        <section className={style.sectionList}>
            <h1>Lista de repositórios</h1>
            {/* percorrer os repositorios e para cada repositorio será retornado um repositorio item */}
            <ul>
                {repositories.map(repository =>(
                    <RepositoryItem repository={repository} key={repository.name}/>
                ))}

            </ul>
        </section>
    )

}