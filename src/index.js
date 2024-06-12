import ReactDOM from "react-dom/client";
import StudentCard from "./studentcard";

const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(
        <>
        <StudentCard name = "Sita"/>
    
        <StudentCard name = "Aabha" />
        </>
    )