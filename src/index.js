import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function StudentCard(name){
    return(
        <>
        <h1>hello!</h1>
        </>
    )
    }
    
    root.render(
        <>
        <StudentCard name = "Sita"/>
    
        <StudentCard name = "Aabha" />
        </>
    )