import articles from "./data/articles.json"

function List() {
    return ( 
        <>
            {/* En utilisant .map lister les articles depuis le fichier json dans data
            titre - auteur - contenu
            Ne pas oublier les keys */}

            {articles.map(article => (
                <ul key={article.id}>
                    <li>{article.titre}</li>
                    <li>{article.auteur}</li>
                    <li>{article.date}</li>
                    <li>{article.contenu}</li>
                </ul>
            ))}
        </>
    );
}

export default List; 