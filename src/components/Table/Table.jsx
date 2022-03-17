import React from "react";
import './table.css';

function Table({ data }) {
    const sorted = data.sort((a,b) => (a.course.totalScore < b.course.totalScore) ? 1 : ((b.course.totalScore < a.course.totalScore) ? -1 : 0));
    
    return (
        <table className='table-board'>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                    <th>Attended</th>
                </tr>
            </thead>
            
            <tbody>
                {sorted.map((user) => (
                    <tr key={user.course._id}>
                        <td>{user.rank}</td>
                        <td>{user.course._id}</td>
                        <td>{user.course.totalScore.toLocaleString()}</td>
                        <td>{user.course.quizzesAttended}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;