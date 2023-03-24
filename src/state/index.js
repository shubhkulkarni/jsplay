import globalHook from "use-global-hook";
import actions from "./actions";
import state from "./store";

const useGlobal = globalHook(state, actions);

export default useGlobal;