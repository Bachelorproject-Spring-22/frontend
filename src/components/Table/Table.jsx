import React from "react";
import PropTypes from 'prop-types';
import './table.css';

function Table({ data, caption }) {
    const sorted = data.sort((a, b) => (a.player.totalScore < b.player.totalScore) ? 1 : ((b.player.totalScore < a.player.totalScore) ? -1 : 0));

    return (
        <table className='table-board'>
            <caption>{caption}</caption>
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
                    <tr key={user.player._id}>
                        <td>{user.rank} {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : null}</td>
                        <td>{user.player._id}</td>
                        <td>{user.player.totalScore.toLocaleString()}</td>
                        <td>{user.player.quizzesAttended}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    caption: PropTypes.string.isRequired,
    data: PropTypes.array
};

export default Table;