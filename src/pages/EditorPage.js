import React, { useState } from 'react';
import Client from '../components/Client';

const EditorPage = () => {

    const [clients, setClients] = useState([
        { socketId: 1, username: 'Viraj' },
        { socketId: 2, username: 'Ram' },
        { socketId: 3, username: 'Shyam' },
        { socketId: 4, username: 'Ghanshyam' },
        { socketId: 5, username: 'Krish' },
    ]);

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/code-sync.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <Client
                                key={client.socketId}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>

                <button className="btn copyBtn">
                    Copy ROOM ID
                </button>

                <button className="btn leaveBtn">
                    Leave
                </button>
            </div>

            <div className="editorWrap">
                Editor goes here
            </div>
        </div>
    );
}

export default EditorPage;