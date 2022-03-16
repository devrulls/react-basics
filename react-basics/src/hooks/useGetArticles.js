import {useState, useEffect} from 'react';

const useGetArticles = () => {
    const [articles, loadArticles] = useState([]);
    const [loading, showLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            loadArticles([                               //*ici nous faisons une simulation de la connexion à une base de données -- aqui hacemos una simulation de la conexion a una base de datos
                {
                    id: 1,
                    title:'titre du premier article'
                },
                {
                    id: 2,
                    title:'titre du deuxième article'
                },
                {
                    id: 3,
                    title:'titre du troisième article'
                }
            ])
            showLoading(false);
        },3000);
    }, []);
    return [articles, loading];
}
 
export default useGetArticles;

