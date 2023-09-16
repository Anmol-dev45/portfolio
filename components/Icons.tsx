import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
const Icons = () => {
    return (
        <div className="flex items-center gap-6 text-4xl w-fit">
            <AiFillLinkedin  className="rounded-full"/>
            <AiFillGithub />
            <AiFillFacebook className="rounded-full"/>
            <AiFillInstagram />
        </div>
    )
}

export default Icons