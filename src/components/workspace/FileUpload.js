import React from 'react';
import { files } from '../../data/dummyData';

const FileUpload = () => {
    return (
        <div className="file-upload-section">
            <h3>📎 Files</h3>
            <div className="file-dropzone">
                <div className="file-dropzone-icon">☁️</div>
                <p>Drag & drop files here, or <span className="browse-link">browse</span></p>
                <p style={{ fontSize: '12px', marginTop: '4px', color: 'var(--gray-400)' }}>PNG, JPG, PDF, DOC up to 10MB</p>
            </div>
            <div className="file-list">
                {files.map(file => (
                    <div className="file-item" key={file.id}>
                        <span className="file-item-icon">{file.icon}</span>
                        <div className="file-item-info">
                            <p className="file-item-name">{file.name}</p>
                            <p className="file-item-size">{file.size}</p>
                        </div>
                        <button className="file-item-action">✕</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUpload;
