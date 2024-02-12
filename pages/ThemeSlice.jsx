import { createSlice } from "@reduxjs/toolkit"; 

/* const ThemeContext = createContext(null);
const ThemeDispatchContext = createContext(null); */

export const themeSlice = createSlice({
  name: 'themes', // kanske borde heta något annat då vi uppdaterar theme, fontsize och animations?
  initialState: {
    userPreferences: { // onödigt nested-object men bara för att öva att komma åt objekt...
      theme: "light",
      //fontSize: "medium",
      fontSize: "text-base",
      reduceAnimations: false,
    }
  },
  reducers: {
    changeTheme: (state, action) => {
      // console.log(state.userPreferences.theme);
      console.log(action.payload);
      state.userPreferences.theme = action.payload.theme
    },
    changeFontSize: (state, action) => {
      state.userPreferences.fontSize = action.payload.fontSize
    },
    changeReduceAnimations: (state, action) => { // använder inte
      state.userPreferences.reduceAnimations = action.payload.reduceAnimations;
    },
  }
})

export const { changeTheme, changeFontSize, changeReduceAnimations } = themeSlice.actions;

export default themeSlice.reducer;



// not redux:

// Create and use your own hook instead of using useContext in the components
/* export const useTheme = () => useContext(ThemeContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);

const initialState = {
  //theme: "light",
  userPreferences: {
    theme: "light",
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  // your code here
  switch (action.type) {
    case 'changed_theme': {
      return {...state, 
        userPreferences: {
        ...state.userPreferences,
        theme: action.theme,
        }
      }
    };
    case 'changed_fontSize': {
      return {...state, 
        userPreferences: {
        ...state.userPreferences,
        fontSize: action.fontSize,
        } 
      }
    }
    case 'changed_reduceAnimations': {
      return {...state, 
        userPreferences: {
        ...state.userPreferences,
        reduceAnimations: action.reduceAnimations
        } 
      } 
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const ThemeProvider = ({ children }) => {
  // your code here
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{state}}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}; */

