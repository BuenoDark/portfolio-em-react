import "./about.css"
import Award from "../../img/awards.jpg"

const About = () => {
    return (
        <div className="About">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://technewsbrasil.com.br/wp-content/uploads/2021/11/equipamentos-streamer-1200x900.jpg" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Sobre mim</h1>
                <p className="-a-sub">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sunt, commodi aut blanditiis porro dolor</p>
                <p className="a-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia? Voluptate, veritatis similique. Labore reiciendis quos dicta alias provident sequi repellat architecto, qui voluptatum omnis asperiores aliquid dolore, eveniet commodi.</p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-awards-texts">
                        <h4 className="a-awards-title"> The Game Awards 2021</h4>
                        <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet impedit numquam. Vero sint inventore laborum et expedita quisquam magni quos dignissimos est!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About