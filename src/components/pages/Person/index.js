import React, { useEffect, useState } from 'react'

import { ApyKey } from '../../../ApyKey'
import Films from '../Films'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Person = () => {
	const [person, setPerson] = useState({})
	const { personID } = useParams()
	const [text,setText]= useState(0);
	function getPerson() {
		axios(
			`https://api.themoviedb.org/3/person/${personID}?api_key=${ApyKey}&languge=en-US`
		).then(res => {
			setPerson(res.data)
		})
	}
	console.log(person)
	useEffect(() => {
		getPerson()
	}, [])
	const getText = (textOn) => {
      if (text === 0 ) {
		return setText(textOn.length)
	}else {
		return setText(0)
	}
	}
	let {
      profile_path,birthday,name,place_of_birth,also_know_as,deathday,biography
	} = person
	return (
		<>
			<div id='person'>
				<div className='container'>
					<div className='person'>
						<div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
							<img
							style={{
								borderRadius:"15px",
								margin:"20px 20px"
							}}
								src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
								alt=''
							/>
							<div>
								<h1 style={{
									fontSize:"30px",color:"#fff",
									fontWeight:"600", margin:"20px 0"

								}}>
									{name} <br/> <span style={{
										fontSize:"18px",fontWeight:"500",
										margin:"20px 0 ",color:"#fff"
									}}>({birthday})</span>
								</h1>
								<h2 style={{
									color:"#fff",
								}}>{place_of_birth}</h2>
								<h3>{also_know_as}</h3>
							</div>
						</div>

						<p style={{color:"#fff",fontSize:"20px",fontWeight:"500"}}>biography</p>
						<h5 style={{color:"#fff",fontSize:"16px",fontWeight:"100"}}>{biography?.slice(0, text)}</h5>
						<span
							style={{ cursor: 'pointer', background: 'green', color: '#fff' }}
							onClick={() => {
								getText(biography)
							}}
						>
							{text === 0 ? 'читать дальше >>' : '<< закрыть'}
						</span>
					</div>
				</div>
			</div>
			<Films />
		</>
	)
}

export default Person