import React from 'react'
import styles from "./breadCrumbs.module.scss"
import { useLocation } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'

function BreadCrumbs(routes) {
  const location=useLocation();
  const breadcrumbs = useBreadcrumbs(routes.rout);
  return (
    <nav>
    {breadcrumbs.map(({ match, breadcrumb }) => (
    <Link
      key={match.url}
      to={match.pathname}
      className={match.pathname === location.pathname ? styles.active : styles.notActive}
      >
      {breadcrumb} <span className={styles.slash}>/</span>
    </Link>
    ))}
    </nav>
  )
}



export default BreadCrumbs
