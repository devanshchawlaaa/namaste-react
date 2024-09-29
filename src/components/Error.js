import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    console.log('error is ', error);
    const {status, statusText} = error;
    return(
        <div>
            <h1>OOOPS</h1>
            <h2>Something went wrong</h2>
            <h3>{status} : {statusText}</h3>
        </div>
    )
}

export default Error;