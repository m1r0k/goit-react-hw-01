import style from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = (
    {
        avatar,
        name,
        isOnline
    }
) => {
    const isOnlineSts = clsx(style.isOnlineStatus,
        isOnline ? style.friendIsOnline : style.friendIsOffline);
    return (
        <div className={style.friendItem}>
            <img className={style.friendAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={style.friendName}>{name}</p>
            <p className={isOnlineSts}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};