import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
const Icons = () => {
    const className = "hover:text-dark duration-150"
    return (
        <div className="flex items-center gap-6 text-4xl text-dark hover:text-gray-600 duration-150">
            <AiFillLinkedin className={`rounded-full ${className}`} />
            <AiFillGithub className={className} />
            <AiFillFacebook className={`rounded-full ${className}`} />
            <AiFillInstagram className={className} />
        </div>
    )
}

export default Icons