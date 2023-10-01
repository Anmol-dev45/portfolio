import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  variant: "primary" | "secondary";
}

const Container: React.FC<Props> = ({ children, variant }) => {
  const variants = {
    primary: (
      <div className="container px-2 lg:px-[140px] py-3 mx-auto">
        {children}
      </div>
    ),
    secondary: (
      <div className="container px-2 md:px-32 lg:px-[235px] py-3 mx-auto">
        {children}
      </div>
    ),
  };

  return variants[variant];
};

export default Container;
