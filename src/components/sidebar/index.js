import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaStar } from "react-icons/fa6"

const Sidebar = () => {

    return (
        <aside className="m-2 p-2 flex flex-col gap-6">
            <div className="bg-slate-600 p-2 rounded-md flex flex-col align-center">
                
                <StaticImage src="https://res.cloudinary.com/wnhollington/image/upload/e_improve,e_sharpen/f_auto/q_auto/v1699606613/e1eqadzarq4bjsapvwgy.webp" alt="W. Neal Hollington, Esq." className="rounded-md"/>
                
                <h3 className="text-white text-center text-2xl my-6">Contact Now for Legal Help</h3>
                
                <Link to="/schedule-consultation" className="bg-gray-200 text-gray-800 text-md sm:text-lg font-bold p-4 rounded-lg text-center">Schedule Your Free Consultation</Link>

            </div>

            <div className="bg-slate-600 p-2 rounded-md flex flex-col items-center gap-2">
                
                <div className="flex flex-row gap-1">
                    <FaStar size={25} fill={"white"}/>
                    <FaStar size={25} fill={"white"}/>
                    <FaStar size={25} fill={"white"}/>
                    <FaStar size={25} fill={"white"}/>
                    <FaStar size={25} fill={"white"}/>
                </div>

                <h3 className="text-white text-center text-2xl my-2">Client Reviews</h3>

                <p className="text-white text-xl max-w-[400px]">I appreciate all of the hard work that you have put into completing my case. I am very grateful to you. Before I contacted you, I was hopeless. I have no words to express my gratitude to you. - <span className="text-2xl">Emilia</span></p>

            </div>
        </aside>
    )
}

export default Sidebar

