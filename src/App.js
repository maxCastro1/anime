
  import React from 'react';
  import './App.css';
  import { Routes , Route } from 'react-router-dom'
  import Body from './components/body';
  import Main from './components/main';
  import Anime from './components/Anime';
  import Manga from './components/Manga';
  import About from './components/About';
  import ContactUs from './components/contact-us';
  import Search from './components/search';
  import Discover from './components/Discover';
  import SingleAnime from './components/Pages1/singleAnime';
  import SingleManga from './components/Pages1/singleManga';
  function App() {
    return (
     <>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route index element={<Main />}/>
          <Route path='/Discover' element={<Discover />} />
          <Route path='/Manga' element={<Manga />} />
          <Route path='/Anime' element={<Anime />} />
          <Route path='/About' element={<About />} />
          <Route path='/ContactUs' element={< ContactUs/>}/>
          <Route path='/Search/:searchId' element={<Search />}/>
          <Route path='/searchSingleAnime/:searchId' element={<SingleAnime />}/>
          <Route path='/searchSingleManga/:searchId' element={<SingleManga />}/>
        </Route>
      </Routes>
    </>
    )
  }



  export default App;
  