import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { useAuth } from './hooks/useAuth';

export default function DashBoard() {
   const [cookies, setCookies, removeCookies] = useCookies();

   const { authenticated } = useAuth();
   const navigate = useNavigate();

   if (!authenticated)
      return (
         <div className="w-[600px] h-[430px] mt-24 p-12 mx-auto flex flex-col rounded-2xl bg-white">
            <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
         </div>
      );

   return (
      <div className="w-[600px] h-[430px] mt-24 p-12 mx-auto flex flex-col rounded-2xl bg-white">
         <div className="flex gap-6 items-center justify-between mb-12">
            <h2 className="text-3xl font-semibold">Cookies</h2>
            <button
               className="rounded-xl bg-slate-600 p-2 px-8 hover:bg-slate-700 text-sm text-white"
               onClick={() => {
                  removeCookies('token', { path: '/' });
                  navigate('/cookie/login');
               }}
            >
               쿠키 초기화
            </button>
         </div>
         <ul className="flex flex-col gap-4">
            <li className="flex gap-2 items-center text-lg font-semibold bg-slate-100 px-4 py-2 rounded-xl">
               <span>USER INFO </span>
            </li>
            <li className="flex gap-2 items-center text-lg font-semibold bg-slate-200 px-4 py-2 rounded-xl">
               <span>FE DEVELOPER : </span>
               <span className="text-base font-normal">doromo</span>
            </li>
            <li className="flex gap-2 items-center text-lg font-semibold bg-slate-300 px-4 py-2 rounded-xl">
               <span>FE : </span>
               <span className="text-base font-normal">React, Typescript, Tailwindcss</span>
            </li>
            <li className="flex gap-2 items-center text-lg font-semibold bg-slate-400 px-4 py-2 rounded-xl">
               <span>BE : </span>
               <span className="text-base font-normal">Express</span>
            </li>
         </ul>
      </div>
   );
}
