export const getEnvironments = () => {
  return {
    // ...import.meta.env,
    VITE_BACK_URL: import.meta.env.VITE_BACK_URL,
  };
};
