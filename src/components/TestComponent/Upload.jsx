import React from 'react';
import axios from './../../api/axios';

function Upload (props) {
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        
        try {
            await axios({
                method: "post",
                url: "/upload",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });
            //console.log(response);
        } catch (error) {
            //console.log(error);
        }
    }

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
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
        </>
    )
}

export default Upload