export default function Home() {
   return (
      <div className="w-[600px] flex flex-col gap-4 mt-16 mx-auto">
         <a href="/local/dashboard" className="text-xl mb-6">
            로컬 스토리지
         </a>
         <a href="/session/dashboard" className="text-xl mb-6">
            세션 스토리지
         </a>
         <a href="/cookie/dashboard" className="text-xl">
            쿠키
         </a>
      </div>
   );
}
