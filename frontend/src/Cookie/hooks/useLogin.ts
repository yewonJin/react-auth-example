import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { cookieLogin } from '../../utils/api';

const useLogin = () => {
   const navigate = useNavigate();
   const [cookies, setCookies] = useCookies(['token']);

   const [input, setInput] = useState({
      id: '',
      password: '',
   });

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput({ ...input, [e.target.name]: e.target.value });
   };

   const handleSubmit = async () => {
      const expires = new Date();

      expires.setFullYear(expires.getFullYear() + 1);

      await cookieLogin(input.id, input.password)
         .then(res => {
            console.log(res);
         })
         .then(() => navigate('/cookie/dashboard'));
   };

   return { input, handleInputChange, handleSubmit };
};

export default useLogin;
