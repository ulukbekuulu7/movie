import React, { useEffect, useState } from 'react'

import { ApyKey } from '../../ApyKey'
import MovieCard from '../pages/MovieCard'
import axios from 'axios'

const TopRated = () => {
	const [rated, setRated] = useState([])
	function getRated() {
		axios(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApyKey}&languge=en-US&page=1`
		).then(res => {
			setRated(res.data.results)
		})
	}
	useEffect(() => {
		getRated()
	}, [])
	return (
		<div id='rated'>
			<div className='container'>
				<div className='rated'>
					{rated.map(el => (
						<MovieCard el={el} />
					))}
				</div>
			</div>
		</div>
	)
}

export default TopRated
