import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    variant: 'primary' | 'secondary';
    // rounded: '5px' | 'rounded';
}

const Button: React.FC<Props> = ({ children, variant }) => {
    const className = "block px-[35px] py-[10px] md:py-[12px] w-fit rounded-full text-base md:text-lg leading-[30px]"
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
// Button.defaultProps = {
//     rounded: 'rounded',
// };

export default Button;
