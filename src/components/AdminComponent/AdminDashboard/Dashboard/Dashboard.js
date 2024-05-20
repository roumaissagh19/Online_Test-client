import"./Dashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

    const [exam, setExam] = useState("Updating...");
    const [question, setQuestion] = useState("Updating...");
    const [user, setUser] = useState("Updating...");

    useEffect(() => {
        async function getAllExam() {
            let value = await axios.get("# ");
            setExam("We have total " + value.data.length + " exam");
        }
        getAllExam();


        async function getAllQuestions() {
            let value = await axios.get("#");
            setQuestion("We have total " + value.data.length + " question");
        }
        getAllQuestions();


        async function getAllUsers() {
            let value = await axios.get("#");
            setUser("We have total " + value.data.length + " user");
        }
        getAllUsers();
    }, []);

    const navigate = useNavigate();

    function showExam() {
        navigate(" /Exam");
    }

    function showQuestions() {
        navigate("/AdminDashboard/Question");
    }

    function showUsers() {
        navigate("/AdminDashboard/StudentList");
    }


    return (
        <>
          
< div className="dashboard-container"> 
            <div className="info-container">
                <p>{exam}</p>
                <button onClick={showExam}>View Details</button>
            </div>

            <div className="info-container">
                <p>{question}</p>
                <button onClick={showQuestions}>View Details</button>
            </div>

            <div className="info-container">
                <p>{user}</p>
                <button onClick={showUsers}>View Details</button>
            </div>
            
 </div>
        </>
    );
}

export default Dashboard;
