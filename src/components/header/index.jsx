import styles from './header.module.css';

const Header = ({logo, navItems}) => {
 
    return(
<header className={styles.header}>
        <div className={styles.logo}>
          <h1>{logo.name}</h1>
          <span>🌟</span>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
             <a key={index} href={item.link} className={styles.active}>
            {item.name}  
          </a>
          ))}
         
        
        </nav>

        <div className={styles.userActions}>
          <button className={styles.notificationBtn}>🔔</button>
          <button className={styles.userAvatar}>
            <img src="https://i.pravatar.cc/150?img=3" alt="Your profile" />
          </button>
        </div>
      </header>
    )
}

export default Header;