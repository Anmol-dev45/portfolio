import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'tersery';
    // rounded: '5px' | 'rounded';
}

const Button: React.FC<Props> = ({ children, variant }) => {
    const className = "block px-8 py-3  w-fit rounded-full text-base md:text-lg"
    const variants = {
        "primary": <div className={`bg-primary text-white ${className}`}>
            {children}
        </div>,
        "secondary": <div className={`text-primary bg-transparent border-2 border-primary ${className}`}>
            {children}
        </div>,
        "tersery":<div className={`bg-primary text-white h-full text-center py-3 rounded-[5px]`}>
        {children}
    </div>
    }

    return variants[variant]
};
// Button.defaultProps = {
//     rounded: 'rounded',
// };

export default Button;
