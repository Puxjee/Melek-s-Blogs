import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:3001/blogs")

    return (
        <div className="home">
            {isPending && <div>Loading...</div> }
            {error && <div style={{color: "red"}}>Error: {error}</div>}
           {blogs && <BlogList blogs = {blogs} title = "All blogs:"/>}
        </div> );
}
 
export default Home;