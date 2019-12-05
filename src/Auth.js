import { store } from './index';


const Auth = {
    getAuth() {
        const state = store.getState().auth;
        console.log(state.isSignedIn);
        return state.isSignedIn;
    }
};
export default Auth;