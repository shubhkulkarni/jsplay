const actions = {
    setState: (store, stateKey, newVal) => {
      store.setState({ [stateKey]: newVal });
      console.log("store:", store.state);
    }
  };
  
  export default actions;