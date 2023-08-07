import useLogin from './hooks/useLogin';

function App() {
   const { input, handleInputChange, handleSubmit } = useLogin();

   return (
      <div className="w-[450px] h-[430px] flex flex-col items-center rounded-2xl mt-24 mx-auto px-12 py-12 bg-white">
         <h2 className="text-2xl font-semibold">세션 스토리지</h2>
         <form
            className="mt-12 w-[300px]"
            onSubmit={e => {
               e.preventDefault();
               handleSubmit();
            }}
         >
            <div className="flex flex-col gap-2">
               <label htmlFor="id">아이디</label>
               <input
                  id="id"
                  type="text"
                  name="id"
                  value={input.id}
                  onChange={handleInputChange}
                  className="border-[1px] border-slate-300 rounded-md p-2 text-sm focus: outline-none"
               ></input>
            </div>
            <div className="mt-6 flex flex-col gap-2">
               <label htmlFor="password">비밀번호</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  className=" border-[1px] border-slate-300 rounded-md p-2 text-sm focus: outline-none"
               ></input>
            </div>
            <button className="w-[300px] mt-8 bg-sky-600 py-2 text-white rounded-md">로그인</button>
         </form>
      </div>
   );
}

export default App;
