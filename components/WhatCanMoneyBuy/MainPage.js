import Image from "next/image"
import MainComponent from "./MainComponent"
import Corner from "../../public/assets/corner-decoration.jpg"
import CommonLogo from "../CommonLogo"
export default function MainPage() {
    return (
        <section className="h-screen" id="wcmby">
            <div className="body dark-background ">
                <div className="outer-border">
                    <div className="mid-border">
                        <div className="inner-border">
                            <Image
                                className="corner-decoration corner-left-top"
                                src={Corner}
                                alt="corner-decoration"
                                width={300}
                                height={300}
                            />
                            <Image
                                className="corner-decoration corner-right-top"
                                src={Corner}
                                alt="corner-decoration"
                                width={300}
                                height={300}
                            />
                            <Image
                                className="corner-decoration corner-right-bottom"
                                src={Corner}
                                alt="corner-decoration"
                                width={300}
                                height={300}
                            />
                            <Image
                                className="corner-decoration corner-left-bottom"
                                src={Corner}
                                alt="corner-decoration"
                                width={300}
                                height={300}
                            />
                            <MainComponent />
                            <CommonLogo/>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
