import { TfiEmail } from "react-icons/tfi"


const CTA = () => {
    return (
        <div className="cta min_width">
            <span>Open for freelance or full-time roles</span>
            <h2>Do you think I could be a good fit <br /> for your next project?</h2>
            <p>I'm currently looking for new opportunities to grow my <br /> skills. Let's chat if you are interseted!</p>
            <button className="purple_btn" >
                <TfiEmail size={19} />
                Get In Touch
            </button>
        </div>
    )
}

export default CTA