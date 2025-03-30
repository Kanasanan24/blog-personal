import Topbar from './components/Topbar';
import Footer from './components/Footer';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense, lazy, useState, StrictMode } from 'react';


import './index.css';

// pages
const App = lazy(() => import("./App"));
const Blogs = lazy(() => import("./pages/Blogs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const BlogList = lazy(() => import("./pages/BlogList"));

const Root = () => {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");

  return (
    <BrowserRouter>
      <Topbar theme={theme} setTheme={setTheme} />
      <Suspense fallback={<div className="preload"><div className='loader'></div></div>}>
        <StrictMode>
          <Routes>
            <Route path="/" element={<App theme={theme} setTheme={setTheme} />}></Route>
            <Route path="/blogs" element={<Blogs theme={theme} setTheme={setTheme} />}></Route>
            <Route path="/blogs/:slug" element={<BlogDetail theme={theme} setTheme={setTheme} />}></Route>
            <Route path="/categories/:category" element={<BlogList theme={theme} setTheme={setTheme} />}></Route>
            <Route path="*" element={<NotFound theme={theme} setTheme={setTheme} />}></Route>
          </Routes>
        </StrictMode>
      </Suspense>
      <Footer theme={theme} setTheme={setTheme}/>
    </BrowserRouter>
  );
}


createRoot(document.getElementById('root')!).render(<Root />);