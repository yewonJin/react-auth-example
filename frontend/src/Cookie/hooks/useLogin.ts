import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { cookieLogin } from '../../utils/api';

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
      await cookieLogin(input.id, input.password).then(() => navigate('/cookie/dashboard'));
   };

   return { input, handleInputChange, handleSubmit };
};

export default useLogin;
