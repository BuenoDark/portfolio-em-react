import "./intro.css"
import Me from "../../img/me.png"

const Intro = () =>{
    return (
        <header> 
        <svg  class= "waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path  class="waves-1 "fill="#0099ff" fill-opacity="1" d="M0,64L0,64L110.8,64L110.8,160L221.5,160L221.5,256L332.3,256L332.3,96L443.1,96L443.1,64L553.8,64L553.8,288L664.6,288L664.6,32L775.4,32L775.4,128L886.2,128L886.2,224L996.9,224L996.9,64L1107.7,64L1107.7,224L1218.5,224L1218.5,96L1329.2,96L1329.2,32L1440,32L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"></path>
            <path  class="waves-2 "fill="#000b76" fill-opacity="1" d="M0,192L0,96L102.9,96L102.9,32L205.7,32L205.7,96L308.6,96L308.6,224L411.4,224L411.4,128L514.3,128L514.3,32L617.1,32L617.1,224L720,224L720,128L822.9,128L822.9,288L925.7,288L925.7,288L1028.6,288L1028.6,256L1131.4,256L1131.4,256L1234.3,256L1234.3,96L1337.1,96L1337.1,320L1440,320L1440,320L1337.1,320L1337.1,320L1234.3,320L1234.3,320L1131.4,320L1131.4,320L1028.6,320L1028.6,320L925.7,320L925.7,320L822.9,320L822.9,320L720,320L720,320L617.1,320L617.1,320L514.3,320L514.3,320L411.4,320L411.4,320L308.6,320L308.6,320L205.7,320L205.7,320L102.9,320L102.9,320L0,320L0,320Z"></path>
            <path  class="waves-3 "fill="#a2d9ff" fill-opacity="1" d="M0,160L0,160L96,160L96,320L192,320L192,224L288,224L288,96L384,96L384,64L480,64L480,224L576,224L576,288L672,288L672,32L768,32L768,224L864,224L864,256L960,256L960,256L1056,256L1056,224L1152,224L1152,128L1248,128L1248,128L1344,128L1344,32L1440,32L1440,320L1344,320L1344,320L1248,320L1248,320L1152,320L1152,320L1056,320L1056,320L960,320L960,320L864,320L864,320L768,320L768,320L672,320L672,320L576,320L576,320L480,320L480,320L384,320L384,320L288,320L288,320L192,320L192,320L96,320L96,320L0,320L0,320Z"></path>
            </svg>
   
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
        </header>
    )
}

export default Intro