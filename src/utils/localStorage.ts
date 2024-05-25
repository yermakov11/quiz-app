
export const getItem = (key:any) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return null;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error("Error getting data from localStorage:", error);
      return null;
    }
  };
  
  export const setItem = (key:any, data:any) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };
  
  export const removeItem = (key:any) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from localStorage:", error);
    }
  };
  