import React, { ReactNode, createContext } from "react";
import { DragDropContext, DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Entry from "./Entry";

interface Props {
  filters: {
    type: string;
    conditions: {
      type: string;
    };
  };
}

interface State {
  tree: any;
  moveNode: any;
}

export const FilterContext = createContext({
  tree: null,
  moveNode: (from: any, to: any) => {}
});

@DragDropContext(HTML5Backend)
export default class Framework extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tree: props.filters,
      moveNode: this.moveNode
    };
  }
  moveNode = (from: any, to: any) => {
    console.info(from, to);
  };

  render(): ReactNode {
    const { conditions } = this.state.tree;
    if (!conditions) {
      return null;
    }

    return (
      <div>
        <DragDropContextProvider backend={HTML5Backend}>
          <FilterContext.Provider value={this.state}>
            <Entry node={conditions} />
          </FilterContext.Provider>
        </DragDropContextProvider>
      </div>
    );
  }
}
