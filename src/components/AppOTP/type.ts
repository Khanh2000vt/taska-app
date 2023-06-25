import { ColorValue, StyleProp, TextInput, TextStyle, ViewStyle } from "react-native";
interface PropsOTPBase {
  type?: "otp" | "password";
}

interface PropsOTP extends PropsOTPBase {
  pinCount?: number;
  onCodeFilled?: (code: string) => Promise<void> | undefined;
  clearInputs?: boolean;
  onChangeCode?: (code: string) => void | undefined;
}

interface PropsInputOTP extends PropsOTPBase {
  codeChar: string;
  index: number;
  onTextChange: (text: string, index: number) => void;
  onLayout: (ref: React.RefObject<TextInput>, index: number) => void;
  onKeyPress: (s: string, c: string, index: number) => void;
  focused: boolean;
}

export type { PropsOTP, PropsInputOTP };