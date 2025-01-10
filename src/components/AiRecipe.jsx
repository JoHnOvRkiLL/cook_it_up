import ReactMarkdown from "react-markdown";

function AiRecipe(props){
    return (
        <section className="ai-recipe-container">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    );
}

export default AiRecipe;