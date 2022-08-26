import React from "react";

export default function FileUpload(){
    return (
        <div className="form-container-parent">
            <div className="form-container">
                <form>
                    <label for='file-upload' className="file-upload">Upload Now</label>
                    <input id='file-upload' type='file' style={{display: "none"}}/>
                </form>
            </div>
        </div>
    )
}