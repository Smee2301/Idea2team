import React from 'react';
import { files } from '../../data/dummyData';
import Button from '../common/Button';

const FileUpload = () => {
    return (
        <div className="file-sharing">
            <div className="file-header">
                <h3>📁 Project Files</h3>
                <Button variant="primary" size="sm">+ Upload</Button>
            </div>
            <div className="file-list">
                {files.map(file => (
                    <div className="file-item" key={file.id}>
                        <div className="file-icon">{file.icon}</div>
                        <div className="file-info">
                            <p className="file-name">{file.name}</p>
                            <p className="file-meta">{file.size}</p>
                        </div>
                        <button className="file-download">↓</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUpload;
