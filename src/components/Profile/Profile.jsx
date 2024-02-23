import style from './Profile.module.css';

const Profile = ({
    image,
    name,
    tag,
    location,
    stats: { followers, views, likes },
}) => {
    return (
        <div className={style.profileCard}>
            <div className={style.profileInfo}>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p className={style.nameTitle}>{name}</p>
                <p className={style.nameInfo}>@{tag}</p>
                <p className={style.nameInfo}>{location}</p>
            </div>

            <ul className={style.statusList}>
                <li className={style.statusListItem}>
                    <span className={style.statusListItemTitle}>Followers</span>
                    <span className={style.statusListItemAmount}>{followers}</span>
                </li>
                <li className={style.statusListItem}>
                    <span className={style.statusListItemTitle}>Views</span>
                    <span className={style.statusListItemAmount}>{views}</span>
                </li>
                <li className={style.statusListItem}>
                    <span className={style.statusListItemTitle}>Likes</span>
                    <span className={style.statusListItemAmount}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;