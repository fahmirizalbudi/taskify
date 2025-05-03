import styles from './button.module.css'

type Button = {
    onClick?: () => void,
    children: React.ReactNode,
    width?: string,
    height?: string,
    color?: string,
    bgColor?: string,
    radius?: string,
    topOffset?: string,
    bottomOffset?: string,
    startOffset?: string,
    endOffset?: string,
}

const Button = (button: Button) => {
    return (
        <button className={styles.button} onClick={button.onClick} style={{ 
            width: button.width ?? "100px",
            height: button.height ?? "30px",
            color: button.color ?? "#fff",
            backgroundColor: button.bgColor ?? "#000",
            borderRadius: button.radius ?? "0"
         }}><span style={{ 
            top: button.topOffset ?? "",
            bottom: button.bottomOffset ?? "",
            left: button.startOffset ?? "",
            right: button.endOffset ?? ""
          }}>{button.children}</span></button>
    )
}

export default Button