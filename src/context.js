import React, { useState, useEffect } from "react"
const Context = React.createContext()

function ContextProvider({ children }) {

  const [allData, setAllData] = useState([""])
  const [loading, setLoading] = useState(true)
  const [commentsData, setCommentsData] = useState([""])
  const [loadingcommentsData, setLoadingcommentsData] = useState(true)
  const [mangaData, setMangaData] = useState([""])
  const [loadingMangaData, setLoadingMangaData] = useState(true)
  const [radomAnime, setRadomAnime] = useState([""])
  const [loadingRadomAnive,setLoadingRandomAnime] = useState(true)
  const [recommendations, setRecommendation] = useState([""])
  const [loadingRecommedations, setLoadingRecommedation] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/api/v1/anime");
      const json = await data.json();
      setAllData(json)
      setLoading(false)
    }
    fetchData()
      .catch(console.error);
  }, [])
  useEffect(() => {
    setLoadingcommentsData(true)
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/api/v1/news");
      const json = await data.json();
      setCommentsData(json)
      setLoadingcommentsData(false)
    }
    fetchData()
      .catch(console.error);
  }, [])
  useEffect(() => {
    setLoadingMangaData(true)
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/api/v1/manga");
      const json = await data.json();
      setMangaData(json)
      setLoadingMangaData(false)
     
    }
    setTimeout(() => {
      fetchData()
      .catch(console.error);
    }, 2000);
   
  }, [])

  useEffect(() => {
    setLoadingRandomAnime(true)
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/api/v1/randomAnime");
      const json = await data.json();
      setRadomAnime(json)
      setLoadingRandomAnime(false)

    }
    setTimeout(() => {
      fetchData()
      .catch(console.error);
    }, 1000);
    
  }, [])
  useEffect(() => {
    setLoadingRecommedation(true)
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/api/v1/recommondation");
      const json = await data.json();
      setRecommendation(json)
      setLoadingRecommedation(false)
    }
    setTimeout(() => {
      fetchData().catch(console.error);
    }, 5000);

  }, [])
  // 
  return (
    <Context.Provider
      value={{
        allData,
        loading,
        commentsData,
        mangaData,
        loadingMangaData,
        loadingcommentsData,
        recommendations,
        loadingRecommedations,
        radomAnime,
        loadingRadomAnive
      }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }