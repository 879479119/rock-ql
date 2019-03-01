import {createContext} from "react";


const FilterContext = createContext({
  tree: null,
  errors: null
});

export default FilterContext;
