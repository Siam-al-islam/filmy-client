import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="space-y-3 mt-14 lg:mt-52">
            <h1 className="text-center text-4xl font-semibold">{error.status}</h1>
            <h3 className="text-center text-xl">{error.statusText}</h3>
            <p className="text-red-500 text-center">{error.data}</p>
            <div className="text-center">
                <Link to="/"><button className="btn btn-wide text-white bg-purple-500">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;