// import { Link } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
// export const Navbar = () => {
//     const [cookies, setCookies] = useCookies(["access_token"]);
//     const navigate=useNavigate()
//     const logout = () => {
//         setCookies("access_token", "");
//         window.localStorage.removeItem("userID");
//         navigate("/auth");

//     }
//     return <div className="navbar">
//         <Link to="/">Home</Link>
        
//         <Link to="/create-recipe">Create Recipe</Link>
//         {!cookies.access_token ? (<Link to="/auth">Login/Register</Link>) : (<>
//             <Link to="/saved-recipes">Saved Recipe</Link>
//             <button onClick={logout}>Logout</button>
//         </>)}
        

//     </div>
   
// }
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    };

    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center w-full">
            <div>
                <Link to="/" className="text-xl font-bold">Home</Link>
                <Link to="/create-recipe" className="ml-4">Create Recipe</Link>
            </div>
            <div>
                {!cookies.access_token ? (
                    <Link to="/auth" className="ml-4">Login/Register</Link>
                ) : (
                    <>
                        <Link to="/saved-recipes" className="ml-4">Saved Recipe</Link>
                        <button
                            onClick={logout}
                            className="ml-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
