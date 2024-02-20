import { Link } from "react-router-dom"
import styles from "./button.module.css"

export const Button = ({href, children}:{href: string, children: React.ReactNode}) => {
  return (
    <Link  className={styles.button} to={href}>{children}</Link>
  )
}
