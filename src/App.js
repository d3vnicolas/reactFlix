import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeatureMovie from './components/FeaturedMovie';

const AppMain = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando lista total

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    }

    loadAll();
  }, []);

  return (

    <div className="page">

      {featuredData &&
        <FeatureMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>

  )
}

export default AppMain;