export const loadState = () => {
  try {
      const serializedState = localStorage.getItem("companyfiles");
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (err) {
      return undefined;
  }
}

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("companyfiles", serializedState);
  } catch (err) {
      console.log(`errors from localstorage.js -: ${err}`)
  }
}