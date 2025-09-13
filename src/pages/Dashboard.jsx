import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Circles } from "react-loader-spinner"; 
import "./Dashboard.css";


const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formSubmissions"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (loading) {
    return (
      <div className="dashboard loader-container">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p>Loading quotes...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Submitted Quotes</h1>
      {quotes.length === 0 ? (
        <p>No quotes found.</p>
      ) : (
        <table className="quotes-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Project Type</th>
              <th>Location</th>
              <th>Area</th>
              <th>Timeline</th>
              <th>Budget</th>
              <th>Description</th>
              <th>Requirements</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((q) => (
              <tr key={q.id}>
                <td>{q.name}</td>
                <td>{q.email}</td>
                <td>{q.phone}</td>
                <td>{q.company || "-"}</td>
                <td>{q.projectType}</td>
                <td>{q.location}</td>
                <td>{q.area}</td>
                <td>{q.timeline || "-"}</td>
                <td>{q.budget || "-"}</td>
                <td>{q.description}</td>
                <td>
                  {q.requirements && q.requirements.length > 0
                    ? q.requirements.join(", ")
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
