export type IOption<T> = {
  id: number;
  label: string;
  value: T;
  onPress: (value?: T) => void;
};

export type IId = string | number | null;

type IData = {
  id: IId;
  done: boolean;
};
export type IArrayData<T> = IData & T;

export type IButton = {
  id: number;
  label: string;
  onPress: () => void;
  secondary?: boolean;
  icon?: Element;
};
