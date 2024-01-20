import React, { useEffect, useState } from 'react'

import { ApyKey } from '../../ApyKey'
import MovieCard from '../pages/MovieCard'
import axios from 'axios'

const NowPlaying = () => {
	const [playing, setPlaying] = useState([])
	function getPlaying() {
		axios(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApyKey}&languge=en-US&page=1`
		).then(res => {
			setPlaying(res.data.results)
		})
	}
	useEffect(() => {
		getPlaying()
	}, [])
	return (
		<div id='playing'>
			<div className='container'>
				<div className='playing'>
					{playing.map(el => (
						<MovieCard el={el} />
					))}
				</div>
			</div>
		</div>
	)
}

export default NowPlaying
