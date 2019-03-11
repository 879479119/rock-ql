import {createContext} from "react";
import {ReactComponentLike} from "prop-types";

interface Rule {
  component: ReactComponentLike,
  props?: object,
}

export interface Rules {
  [name: string]: Rule,
}

const rules: Rules = {};

const FilterContext = createContext({
  tree: null,
  errors: null,
  rules,
});

export default FilterContext;
