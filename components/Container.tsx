import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    variant: 'primary' | 'secondary';
}

const Container: React.FC<Props> = ({ children, variant }) => {
    const variants = {
        "primary": <div className="container px-2 md:px-[160px] py-4 mx-auto">
            {children}
        </div>,
        "secondary": <div className="container px-2 md:px-[255px] py-4 mx-auto">
            {children}
        </div>
    }

    return variants[variant]
};

export default Container;
