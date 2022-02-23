import React from 'react';
import axios from 'axios';
import { fetchData } from './axios';

function Upload (props) {
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        
        try {
            const response = await axios({
                method: "post",
                url: "/upload",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const displayData = async (e) => {
        const res = await fetchData();
        console.log(res);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='upload'>Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={handleFileSelect}
                />
                <input type="submit" value="Upload File" />
            </form>

            <button onClick={displayData}>Fetch</button>
        </>
    )
}

export default Upload