import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../utils/api';

const useLogin = () => {
   const navigate = useNavigate();

   const [input, setInput] = useState({
      id: '',
      password: '',
   });

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput({ ...input, [e.target.name]: e.target.value });
   };

   const handleSubmit = async () => {
      await login(input.id, input.password)
         .then(res => {
            if (!res.token) return;
            sessionStorage.setItem('token', res.token);
         })
         .then(() => navigate('/session/dashboard'));
   };

   return { input, handleInputChange, handleSubmit };
};

export default useLogin;
