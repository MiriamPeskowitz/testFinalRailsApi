Thunk code: 
export default function thunkMiddleward({ dispatch, getState }) {
  return next => action =>
    typeof action === 'function' ?
    action(dispatch, getState) :
    next(action)
}

current: 
function thunkMiddleward(extraArgument) {
  return ({ dispatch, getState }) => next => action {
      if(typeof action === 'function'){ ?
        return action(dispatch, getState, extraArgument);
      }
      return next(action)
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
