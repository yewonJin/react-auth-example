type LoginResponse = {
   id: string;
   token: string;
};

type verifyResponse = {
   authenticated: boolean;
   message: string;
};

export const login = async (id: string, password: string): Promise<LoginResponse> => {
   var myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');

   const user = { id, password };

   return await (
      await fetch('http://localhost:4000/auth/login', {
         method: 'POST',
         body: JSON.stringify(user),
         headers: myHeaders,
      })
   ).json();
};

export const cookieLogin = async (id: string, password: string): Promise<LoginResponse> => {
   var myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');

   const user = { id, password };

   return await (
      await fetch('http://localhost:4000/auth/login?cookie=true', {
         method: 'POST',
         body: JSON.stringify(user),
         headers: myHeaders,
         credentials: 'include',
      })
   ).json();
};

export const verifyWithLocalStorage = async (): Promise<verifyResponse> => {
   const token = localStorage.getItem('token');

   if (!token) return { authenticated: false, message: '토큰이 없습니다.' };

   var myHeaders = new Headers();
   myHeaders.append('Authorization', `Bearer ${token}`);

   return await (
      await fetch('http://localhost:4000/dashboard', {
         method: 'GET',
         headers: myHeaders,
         credentials: 'include',
      })
   ).json();
};

export const verifyWithSessionStorage = async (): Promise<verifyResponse> => {
   const token = sessionStorage.getItem('token');

   if (!token) return { authenticated: false, message: '토큰이 없습니다.' };

   var myHeaders = new Headers();
   myHeaders.append('Authorization', `Bearer ${token}`);

   return await (
      await fetch('http://localhost:4000/dashboard', {
         method: 'GET',
         headers: myHeaders,
         credentials: 'include',
      })
   ).json();
};

export const verifyWithCookie = async (): Promise<verifyResponse> => {
   var myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');

   return await (
      await fetch('http://localhost:4000/dashboard?cookie=true', {
         method: 'GET',
         headers: myHeaders,
         credentials: 'include',
      })
   ).json();
};
