import {IArrayData, IId} from '@interfaces';
import {produce} from 'immer';
import {StyleSheet} from 'react-native';
export const enhance = (arrStyle: Array<any>) => {
  return StyleSheet.flatten(arrStyle);
};

export const checkKeyInObject = (T: any, key: string) => {
  return Object.keys(T).includes(key);
};

export const toggleTodo = <T>(
  state: IArrayData<T>[],
  id: IId,
): IArrayData<T>[] => {
  if (!id) {
    return state;
  }
  return produce(state, draft => {
    const todo = draft.find(todo => todo?.id === id);
    if (todo) {
      todo.done = !todo?.done;
    }
  });
};
