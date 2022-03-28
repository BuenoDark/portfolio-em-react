import "./intro.css"
import Me from "../../img/me.png"

const Intro = () =>{
    return (
        <div className="intro" id ='intro'>
        <div className="in">
            <div className="in-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Olá, eu sou</h2>
                    <h2 className="i-name">Wesley Bueno</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">DBA</div>
                            <div className="i-title-item">Streamer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eum a vel numquam, mollitia, magnam velit cupiditate commodi 
                        culpa accusamus dolores enim maxime dolore aperiam eius molestiae 
                        distinctio. Vitae, dolorem perferendis!
                    </p>
                </div>
            </div>
            <div className="in-right" >
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
        </div>
    )
}

export default Intro