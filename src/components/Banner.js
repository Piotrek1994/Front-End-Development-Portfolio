import React from 'react'
// images
import Image from '../assets/avatar.png'
//icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
//type animation
import { TypeAnimation } from 'react-type-animation'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

const Banner = () => {
	return (
		<section className='section' id='home'>
			<div className='container mx-auto'>
				<div>
					{/* text */}
					<div>
						<h1>
							PIOTR <span>PRUS</span>
						</h1>
						<div>
							<span>I am a</span>
							<TypeAnimation sequence={['Developer', 2000, 'Designer', 2000, 'YouTuber', 2000]} speed={50} className='text-accent'/>
						</div>
					</div>
					{/* text */}
					<div>
						<img src={Image} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
