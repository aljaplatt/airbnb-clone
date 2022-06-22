import React from 'react';
import heroImg from '../../img/photo-grid.png';
import css from './Hero.module.css';

const Hero = () => {
	return (
		<section className={css.heroContainer}>
			<h1 className={css.heroTitle}>Online Experiences</h1>
			<p className={css.heroText}>
				Join unique interactive activities led by one-of-a-kind
				hosts-all without leaving home
			</p>
			<div className={css.imgContainer}>
				<img
					className={css.heroImg}
					src={heroImg}
					alt="photos of various experiences"
				/>
			</div>
		</section>
	);
};

export default Hero;
