import { useEffect, useState } from "react";
import { Drivers, Storage } from "@ionic/storage";
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
const MODE_KEY = 'dark-theme';

// const useLocalStorage = (key:any, initialValue?:any) => {
//   const [storedValue, setStoredValue] = useState<any>();
//   const [item, setItem] = useState<any>();

//   useEffect(() => {
//       const initStorage = async () => {
//         const newStorage: Storage = new Storage({
//           name: "GBDB"
//         });
//         const store: Storage = await newStorage.create();
//         setStoredValue(store);

//         const item = await storedValue?.get(key);
//         console.log("Item get "+item);
//         setItem(item);
//         console.log("initialValue  get " + initialValue);
        

//         return item ? item : initialValue;
//       }
//       initStorage();
//   },[])

//   const setValue = async  (value:any) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;

//       setItem(valueToStore);
//       await storedValue?.set(key, item);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(storedValue);
//   return [item, setValue];
// };

// const useDarkMode = () => {
//   const [darkMode, addNewMode]: any = useStorage();


//   const isEnabled = typeof enabledState === 'undefined' && darkMode;

//   useEffect(() => {
//     const className = 'dark';
//     const bodyClass = document.body.classList;

//     isEnabled ? bodyClass.add(className) : bodyClass.remove(className);


//   }, [darkMode, isEnabled]);
//   console.log(darkMode);

//   return [darkMode, addNewMode];
// };

// export default useDarkMode;


export function useStorage() {
  const [store, setStore] = useState<Storage>();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const initStorage = async () => {
      const newStore: Storage = new Storage({
        name: "SJ-URL-SAFETY",
        // driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
      });

      // await newStore.defineDriver(CordovaSQLiteDriver);

      const store = await newStore.create();
      setStore(store)

      const storedMode = await store?.get(MODE_KEY) || false;
      console.log('Loaded: ' + storedMode)
      setDarkMode(storedMode);
    }
    initStorage();
  }, []);

  
  const addNewMode = async (item: boolean) => {
    const updatedTodos = item;
    setDarkMode(updatedTodos);
    console.log(updatedTodos)
    await store?.set(MODE_KEY, updatedTodos);
  }
  
  // const useDarkMode = () => {
    
  //   const isEnabled = typeof enabledState === 'undefined' && darkMode;
    
  //   useEffect(() => {
  //     const className = 'dark';
  //     const bodyClass = document.body.classList;
      
  //     isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
      
      
  //   }, [darkMode, isEnabled]);
  //   console.log(darkMode);
    
  // };
  
  return {
    darkMode,
    addNewMode,
    // useDarkMode
  }
}