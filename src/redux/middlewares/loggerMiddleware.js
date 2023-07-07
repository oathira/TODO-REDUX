
//reddux store,'next' points next middleware,dispatched action
//using currying

const loggerMiddleware = (store) => {
  return function(next){
    return function(action){
        //log action
        console.log("[LOG]: " +action.type+" "+new Date());
        //call next middleware in the pipeline
        next(action);
        //log the modified state of the app
        console.log(store.getState());
    }
  }
}

export default loggerMiddleware;

