/*
 * @Author: Marshall
 * @Date: 2022-05-10 07:44:17
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-25 18:01:00
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/store.ts
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { reactive } from 'vue';

interface IMicroAppStateActions extends MicroAppStateActions {
  getGlobalState?: any
}

interface IUser {
  name: string;
}

interface IState {
  user: IUser;
}

const initState = reactive<IState>({
  user: {
    name: 'Marshall'
  }
});

const actions: IMicroAppStateActions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});

// actions.offGlobalStateChange();
// @ts-ignore
actions.getGlobalState = (key: keyof IState) => {
  return key ? initState[key] : initState
}

export default actions;
