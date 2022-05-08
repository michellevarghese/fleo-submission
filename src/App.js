import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import profile from "./Profile";
import Profile from "./Profile";
import { Form, Search } from 'semantic-ui-react';
import grid from "./utils";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [profiles, setprofiles] = useState([]);
  const [language, setSearchLanguage] = useState('Javascript');
  const [qdata, setQdata] = useState([]);
  const [flag, setFlag] = useState(1);

  console.log("i ammm getting called");
  useEffect(() => {
    if (loading) return;
    if (flag == 1) {
      setQdata(data)
      console.log("yo", qdata)
      setprofiles(data[page]);
      setFlag(0);
    }
    else {
      setprofiles(qdata[page]);
    }
    console.log("type", typeof (data))

  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    if (page === qdata.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page === 0) {
      setPage(qdata.length - 1);
    } else {
      setPage(page - 1);
    }
  };

 

  const handleSearch = (e) => {
    setSearchLanguage(e.target.value);

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(language)
    if(language==''){
      const url = `https://api.github.com/search/repositories?q=language:${language}`;

    }else{

    }
          const url = `https://api.github.com/search/repositories?q=language:${language}`;

    const response = await fetch(url);
    const da = await response.json();
    const it = da.items
    console.log(it);
    const g = grid(it)
    setQdata(grid(da.items));
    setPage(0)
    setprofiles(g[page]);

  };


  const handleSort = async (e) => {
    e.preventDefault()
    console.log(language)
    const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;
    const response = await fetch(url);
    const da = await response.json();
    const it = da.items
    const g = grid(it)
    //data=data.items;
    setQdata(grid(da.items));
    setPage(0)
    setprofiles(g[page]);
    console.log(profiles)

  };


  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Github"}</h1>
        <div className="underline"></div>
      </div>
   
      <div className="contain">
        <form class="search-bar" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Language" name="q" onChange={handleSearch} />
          <button type="submit" onClick={handleSubmit}><img src="images/search.png" /></button>
        </form>


        <form class="" onSubmit={handleSort}>

          <button class="mybutton" type="submit" onClick={handleSort}>
            Sort by Stars
          </button>
        </form>
      </div>
     
      <section className="profiles">
        <div className="container">
          {profiles.map((profile) => {
            return <Profile key={profile.id} {...profile} />;
          })}
        </div>
        <div className="btn-container">
          <button className="btn next-btn" onClick={() => prevPage()}>
            {!loading ? "Previous" : null}
          </button>
          {loading
            ? null
            : qdata.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null
                    }`}
                  onClick={() => {
                    handlePage(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          <button className="btn next-btn" onClick={() => nextPage()}>
            {!loading ? "Next" : null}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
