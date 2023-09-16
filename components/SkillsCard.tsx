import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const SkillsCard: React.FC<Props> = ({ children }) => {
  return (
    <div className='aspect-square rounded-2xl w-[165px] bg-light grid place-items-center text-6xl'>
        {children}
    </div>
  )
};

export default SkillsCard;
