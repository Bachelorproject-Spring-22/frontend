import React from "react";
import './table.css';

function Table({ data }) {
    const sorted = data.sort((a,b) => (a.totalScore < b.totalScore) ? 1 : ((b.totalScore < a.totalScore) ? -1 : 0))


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
                {sorted.map((user, index) => (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user._id}</td>
                        <td>{user.totalScore.toLocaleString()}</td>
                        <td>{user.quizzesAttended}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;