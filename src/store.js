import App from "./App";

function reducer (state = App, action)  {
    switch(action.type) {
      case "SET_NAME":
        return {
          name: App.name
        };
        case "SET_DAY":
        return {
          day: App.day
        };
        case "SET_VALUE":
        return {
          selValue: App.selValue
        };
       default: 
        return state
    } 
  }
  export default reducer