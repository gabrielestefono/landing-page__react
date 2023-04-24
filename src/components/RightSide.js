import style from '../styles/rightside.module.css'

export default ()=>{
    return(
        <section className={style.description}>
            <h3 className={style.descriptionTitle}>Build The Community Your Fans Will Love</h3>
            <p className={style.descriptionText}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <button className={style.descriptionButton}>Register</button>
        </section>
    )
}