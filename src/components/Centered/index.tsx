import styles from './centered.module.css'

type Centered = {
  children: React.ReactNode
}

const Centered = (centered: Centered) => {
  return (
    <div className={styles.centered}>
      {centered.children}
    </div>
  )
}

export default Centered
