import {createContext} from "react";
import {ReactComponentLike} from "prop-types";

interface Rule {
  component: ReactComponentLike,
  label: string,
  props?: object,
}

export interface Rules {
  [name: string]: Rule,
}

const rules: Rules = {};

const FilterContext = createContext({
  disabled: false,
  readOnly: false,
  tree: null,
  errors: null,
  rules,
});

export default FilterContext;
