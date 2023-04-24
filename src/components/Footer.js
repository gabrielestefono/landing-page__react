import style from '../styles/footer.module.css';

export default ()=>{
    return(
        <footer className={style.footer}>
            <div className={style.footerLink} id={style.facebook}></div>
            <div className={style.footerLink} id={style.twitter}></div>
            <div className={style.footerLink} id={style.instagram}></div>
        </footer>
    )
}