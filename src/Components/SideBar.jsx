import styles from './SideBar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'
export default function SideBar() {
  return (
      <div className={styles.sidebar}>
          <Logo/>
          <AppNav />
        <Outlet/>
         
          <footer className={styles.footer}>
              <p className={styles.copyright}>
                  &copy; copy right{new Date().getFullYear()}by worldWise Inc.
              </p>
          </footer>
          </div>
  )
}
