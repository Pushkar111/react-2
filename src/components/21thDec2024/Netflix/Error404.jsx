// import React from "react";
// import "../../../assets/css/Error404.css";
// import { Link } from "react-router-dom";

// export const Error404 = () => {
//     return (
//         <div className="page-not-found">
//             <div className="content">
//                 <Link to="/styled/Home">
//                     <button style={{ fontFamily: "revert-layer", fontSize: "100%" }}>
//                         <Link to="/home">Netflix Home</Link>
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };
import React from "react";
import "../../../assets/css/Error404.css";
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <div className="page-not-found">
            <div className="content">
                <Link to="/home">
                    <button>
                        Netflix Home
                    </button>
                </Link>
            </div>
        </div>
    );
};