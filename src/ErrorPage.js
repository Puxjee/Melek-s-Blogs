import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ErrorPage = () => {
    return ( <div className="not-found">
        <h2>Sorry</h2>
        <p> Page Not Found !</p>
        <Link to = "/">Go back to homepage?</Link>
    </div> );
}
 
export default ErrorPage;