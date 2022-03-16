
import styled from 'styled-components';
import useGetArticles from '../hooks/useGetArticles';


const Blog = () => {
    const[articles,loading] = useGetArticles();
    return (  
        <ContainerBlog>
            <Title>Blog</Title>
            {loading ? 
            <p>Loading...</p>
            :
            <div>
                {articles.map((article) =>{
                    return <Article key={article.id}>{article.title}</Article>
                })}
            </div>
            }

        </ContainerBlog>
    );
}

const ContainerBlog = styled.div`
margin: 40px 0 20px 0;
` 
const Title = styled.h2`
margin-bottom: 10px;
` 
const Article = styled.p`
padding: 10px 0;
margin-bottom: 10px;
border-bottom: 1px solid #44a559;
` 
export default Blog;