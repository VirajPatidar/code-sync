import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { RecoilRoot } from "recoil";
import GithubCorner from 'react-github-corner';

function App() {

    return (
        <>
            <div>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/editor/:roomId"
                            element={<EditorPage />}
                        ></Route>
                    </Routes>
                </RecoilRoot>
            </BrowserRouter>
            <GithubCorner href="https://github.com/VirajPatidar/code-sync" target="_blank" rel="noopener noreferrer" />
        </>
    );
}

export default App;