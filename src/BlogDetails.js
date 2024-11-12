import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom"

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, error, isPending} = useFetch("http://localhost:3001/blogs/" + id)
    const history = useHistory()
    const handleDelete = () => {
        fetch("http://localhost:3001/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push("/")
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div style={{color: "red"}}>Error: {error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;