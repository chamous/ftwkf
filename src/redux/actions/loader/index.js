import { loaderActions } from './constants';

export const startLoader = () => {
    return {
        type:loaderActions.startLoader
    }
}

export const endLoader = () => {
    return {
        type:loaderActions.endLoader
    }
}

export const startRefresh = () => {
    return {
        type:loaderActions.startRefresh
    }
}

export const endRefresh = () => {
    return {
        type:loaderActions.endRefresh
    }
}