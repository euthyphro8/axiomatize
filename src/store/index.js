import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      undoCallback: null,
      redoCallback: null
    },
    mutations: {
      registerUndoCallback(state, cb) {
        state.undoCallback = cb;
      },
      registerRedoCallback(state, cb) {
        state.redoCallback = cb;
      },
      emitUndoCallback(state) {
        if (state.undoCallback) {
          state.undoCallback();
        }
      },
      emitRedoCallback(state) {
        if (state.redoCallback) {
          state.redoCallback();
        }
      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
