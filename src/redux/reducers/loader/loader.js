import {ACTIONS} from '../../actions';

const loaderState = {
  loading: false,
  refreshing: false,
};

const loaderReducer = (state = loaderState, action) => {
  switch (action.type) {
    case ACTIONS.loader.startLoader:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.loader.endLoader:
      return {
        ...state,
        loading: false,
      };
    case ACTIONS.loader.startRefresh:
      return {
        ...state,
        refreshing: true,
      };
    case ACTIONS.loader.endRefresh:
      return {
        ...state,
        refreshing: false,
      };
    default:
      return state;
  }
};
export default loaderReducer;