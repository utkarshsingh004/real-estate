import Alert from "../../Body/Alert/Alert";
import Search from "../../Body/Search/Search";
import Services from "../../Body/Services/Services";
import { loginExport } from "../../verification/Login/Login";

function Body() {
    let result = loginExport(); // Ensure it's a boolean

    console.log("Login Status:", result); // Debugging

    return (
        <>
            <Search />
            <Alert tok={result} />
            <Services />
        </>
    );
}

export default Body;
