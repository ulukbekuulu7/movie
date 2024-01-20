import { Route, Routes } from "react-router-dom";

import Detail from "./components/pages/DetailPage";
import Header from "./components/Header";
import Home from "./components/Home";
import NowPlaying from "./components/NowPlaying";
import Person from "./components/pages/Person";
import Popular from "./components/Popular";
import Search from "./components/pages/Search";
import TopRated from "./components/TopRated";
import { useState } from "react";

function App() {
  const [dark,setDark] = useState(false)
  return (
		<div
			className='App'
			style={{
				background: dark ? '#122848 ' : '',
        minHeight:"100vh"
			}}
		>
			<Header dark={dark} setDark={setDark} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Popular' element={<Popular />} />
				<Route path='/TopRated' element={<TopRated />} />
				<Route path='/NowPlaying' element={<NowPlaying />} />
				<Route path='/movie/movie-info/:movieId' element={<Detail />} />
				<Route path='/person/person-info/:personID' element={<Person />} />
				<Route path='/search/search-movie/:movieSearch' element={<Search />} />
			</Routes>
		</div>
	)
}

export default App;
