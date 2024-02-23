import { FriendListItem } from './FriendListItem/FriendListItem';
import style from './FriendList.module.css';

export const FriendList = (
    { friends }
) => {
    return (
        <ul className={style.friendList}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem data={friend} />
                </li>))}
        </ul>
    );
};