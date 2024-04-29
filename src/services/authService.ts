import axios from "../utils/config/axios.config";

/**
 * Login Method
 * @param {string} email Email to login user
 * @param {string} password Password to login user
 * @returns
 */
export const login = (email: string, password: string) => {
  const body = {
    email,
    password,
  };

  return axios.post("/auth/login", body);
};

/**
 * Register Method
 * @param {string} email Email of user
 * @param {string} password Password of user
 * @param {string} name Name of user
 * @param {number} age Age of user
 * @returns
 */
export const register = (
  email: string,
  password: string,
  name: string,
  age: number
) => {
  const body = {
    email,
    password,
    name,
    age,
  };

  return axios.post("/auth/register", body);
};
