import style from './postCard.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const PostCard = ({ image, firstName, lastName, writeup, avatar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={style.cardContainer}>
      <img src={image} alt="image" className={style.cardImage} />
      <div>
        <p className={style.name}>
          {firstName} {lastName}
        </p>
        <p>{writeup}</p>
      </div>
    </div>
  );
};
