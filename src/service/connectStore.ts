import { Block } from "../modules/Block";
import { store, StoreEvents } from "../modules/Store";

export function connect(mapStateToProps: (state: any) => any) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: object) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.UPDATE, () =>
          this.setProps({ ...mapStateToProps(store.getState()) })
        );
      }
    };
  };
}
