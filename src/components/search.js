import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Research from "./Pages1/research";

const Search = () => {

  const [datas, setdata] = useState("")
  const [loading, setLoading] = useState(true)

  const { searchId } = useParams();
  var result = searchId.slice(1);
  console.log(result)

  useEffect(() => {
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/search/:${result}`);
      setdata(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
handleSubmit()
  }, [result])
  useEffect(() => {
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/searchAnime/:${result}`);
      setdata(response.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
handleSubmit()
  }, [result])



  return (
    <div className="search-cont">
      {loading && <h1>Loading...</h1>}
      <div className='anime-cont'>
             {!loading &&  (<Research prop={datas} loading={loading}/>)}
        </div>
    
    </div>
  )
}

export default Search