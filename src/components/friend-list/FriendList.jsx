import css from './Friend-list.module.css'

const FriendList = ({ friends }) => {

    return (
      <div className={css.friendsContainer}>
        <ul className={css.friendList}>
          {friends.map(({ id, avatar, name, isOnline }) => (
            <li className={css.item} key={id}>
              <img className={css.avatar} src={avatar} alt={`${name}'s avatar`} width="68" />
              <p className={css.name}>{name}</p>
              {isOnline ? <span className={css.statusActive}>Online</span> : <span className={css.status}>Offline</span>}
  
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default FriendList;