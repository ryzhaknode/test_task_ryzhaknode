import React, {Suspense} from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import tabs from './tabs.json'
import {DummyTable} from "./pages/DummyTable/DummyTable.async";
import {DummyChart} from "./pages/DummyChart/DummyChart.async";
import {DummyList} from "./pages/DummyList/DummyList.async";

function App() {
    return (
        <Router>
            <div className="App">
                <nav
                    className='navigation'
                >
                    {tabs.sort((a, b) => a.order - b.order).map(tab => (
                        <Link
                            className='link'
                            key={tab.id}
                            to={`/${tab.id}`}
                        >
                            {tab.title}
                        </Link>
                    ))}
                </nav>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/dummyTable" element={<DummyTable/>}/>
                        <Route path="/dummyChart" element={<DummyChart/>}/>
                        <Route path="/dummyList" element={<DummyList/>}/>
                        <Route path="/" element={<DummyList/>}/>
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;