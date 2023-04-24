import style from '../styles/leftside.module.css';
import img from '../img/illustration-mockups.png'

export default ()=>{
    return (
        <>
            <section className={style.leftSide}>
                <img src={img} alt="Ilustração de websites" className={style.leftSideImg}/>
            </section>
        </>
    )
}