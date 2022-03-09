import React from "react";
import './table.css';

function Table({ data }) {
    //console.log(data);
    
    const sorted = data.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0))


    return (
        <table className='table-board'>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
            </thead>
            
            <tbody>
                {sorted.map((user, index) => (
                    <tr key={user.username}>
                        <td>{index + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.score.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;