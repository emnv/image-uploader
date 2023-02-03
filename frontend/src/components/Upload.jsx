import axios from 'axios';
import React, { useState } from 'react';

const Upload = () => {

    const [images, setImages] = useState("");
    const [message, setMessage] = useState("");

    const uploadFile = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('images', images)
            await axios.post("http://localhost:8080/upload", formData, {
            }).then(res => {
                console.log(res);
                setMessage(res.data);
            })
        } catch (error) {
            if (error.response) {
            }
        }
    }

    return (
        <div>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={uploadFile} encType="multipart/form-data">
                            <div className="field has-addons">
                                <div className="control">
                                    <div className="file has-name">
                                        <label className="file-label">
                                            <input
                                                className="file-input"
                                                type="file"
                                                onChange={(e) => setImages(e.target.files[0])}
                                                multiple
                                            />
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <i className="fas fa-upload"></i>
                                                </span>
                                                <span className="file-label">
                                                    Choose a file…
                                                </span>
                                            </span>
                                            <span className="file-name">
                                                Upload image
                                            </span>
                                        </label>
                                    </div>                        </div>
                                <div className="control">
                                    <button type="submit" className='button is-primary'>Upload</button>
                                </div>
                            </div>

                            {message && <div className="notification is-primary">{message}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload