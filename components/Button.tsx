import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    variant: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({ children, variant }) => {
    const className = "px-[35px] py-[12px] w-fit rounded-[5px] text-base md:text-lg leading-[30px]"
    const variants = {
        "primary": <div className={`bg-primary text-white ${className}`}>
            {children}
        </div>,
        "secondary": <div className={`text-primary bg-transparent border-2 border-primary ${className}`}>
            {children}
        </div>
    }

    return variants[variant]
};

export default Button;
