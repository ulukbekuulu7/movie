import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { ApyKey } from '../../../ApyKey';
import axios from 'axios';

const Films = () => {
	const [films,setFilms] = useState([])
	const {personID} = useParams()
	function getFilms() {
		axios(
			`https://api.themoviedb.org/3/person/${personID}/movie_credits?api_key=${ApyKey}&language=en-US`
		).then((res) => {
			console.log(res);
			setFilms(res.data.cast)
		});
	}
	useEffect(() => {
		getFilms()
	},[])
	console.log(films);
	return (
		<div id='film'>
			<div className='container'>
				<div className='film'>
					 {
						films.map((el) => (
								<div className='films-img'>
								<NavLink to={`/movie/movie-info/${el.id}`}>
										<img style={{width:"200px", height:"300px", borderRadius:"30px" ,padding:"20px"}} src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.backdrop_path}`} alt="" />
								</NavLink>
								</div> 
						))
					 }
				</div>
			</div>
			
		</div>
	);
};

export default Films;