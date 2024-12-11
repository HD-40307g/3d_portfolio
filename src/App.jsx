import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, Footer} from './components';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<Home />}  />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    );
};

export default App;
