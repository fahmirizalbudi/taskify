import styles from './layout.module.css'

type Layout = {
    children: React.ReactNode
}

const Layout = (layout: Layout) => {
    return <main className={styles.layout}>{layout.children}</main>
}

export default Layout