import React, { useState } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor'
import { language } from '../../src/atoms';
import { useRecoilState } from 'recoil';

const EditorPage = () => {

    const [lang, setLang] = useRecoilState(language);

    const [clients, setClients] = useState([
        { socketId: 1, username: 'Viraj' },
        { socketId: 2, username: 'Ram' },
        { socketId: 3, username: 'Shyam' },
        { socketId: 4, username: 'Tony' },
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

                <label>
                    Select Language:
                    <select value={lang} onChange={(e) => {setLang(e.target.value); window.location.reload();}} className="seLang">
                        <option value="clike">C / C++ / C#</option>
                        <option value="css">CSS</option>
                        <option value="dart">Dart</option>
                        <option value="django">Django</option>
                        <option value="dockerfile">Dockerfile</option>
                        <option value="go">Go</option>
                        <option value="htmlmixed">HTML-mixed</option>
                        <option value="javascript">JavaScript</option>
                        <option value="jsx">JSX</option>
                        <option value="markdown">Markdown</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="r">R</option>
                        <option value="rust">Rust</option>
                        <option value="ruby">Ruby</option>
                        <option value="sass">Sass</option>
                        <option value="shell">Shell</option>
                        <option value="sql">SQL</option>
                        <option value="swift">Swift</option>
                        <option value="xml">XML</option>
                        <option value="yaml">yaml</option>
                    </select>
                </label>

                <button className="btn copyBtn">
                    Copy ROOM ID
                </button>

                <button className="btn leaveBtn">
                    Leave
                </button>
            </div>

            <div className="editorWrap">
                <Editor />
            </div>
        </div>
    );
}

export default EditorPage;