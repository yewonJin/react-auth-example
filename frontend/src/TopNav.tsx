import { useNavigate } from 'react-router-dom';

export default function TopNav() {
   const navigate = useNavigate();

   return (
      <div className="w-full h-20 bg-neutral-800 text-neutral-300">
         <div className="w-[600px] h-full mx-auto flex gap-20 items-center">

            <span className="cursor-pointer hover:text-white" onClick={() => navigate('/local/dashboard')}>
               로컬 스토리지
            </span>
            <span className="cursor-pointer hover:text-white" onClick={() => navigate('/session/dashboard')}>
               세션 스토리지
            </span>
            <span className="cursor-pointer hover:text-white" onClick={() => navigate('/cookie/dashboard')}>
               쿠키
            </span> 
         </div>
      </div>
   );
}
