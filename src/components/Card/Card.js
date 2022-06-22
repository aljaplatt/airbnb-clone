import React from 'react';
import css from './Card.module.css';
import cardImg from '../../img/katie-zaferes.png';
import starImg from '../../img/star.png';

const Card = () => {
	return (
		<div className={css.card}>
			<img className={css.cardImg} src={cardImg} alt="An experience" />
			<div className={css.cardStats}>
				<img className={css.cardStar} src={starImg} alt="star" />
				<span>5.0</span>
				<span>(6)</span>
				<span>USA</span>
			</div>
			<p>Life lessons with Katie Zaferes</p>
			<p><span className={css.cardBold}>From $136</span>/ person</p>
		</div>
	);
};

export default Card;
