import instance from '../Interceptor';
import Profile from '../Profile'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.post('https://api.escuelajs.co/api/v1/auth/login',
        {
          "email": "john@mail.com",
          "password": "changeme"
        });
        Cookies.set("jwtToken", response.data?.access_token)
        // console.log(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
};

export default YourComponent;