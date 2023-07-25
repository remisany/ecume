import {ImageStyle, StyleProp} from "react-native";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export interface IColors {
    yellow: string
    orange: string
    background: string
    white: string
    grey: string
    black: string
    success: string
    error: string
}

export interface ISize {
    fontTitle: number
    regular: number
    radius: number
    paddingContainer: number
    small: number
}

export interface IFamily {
    light: string,
    regular: string,
    bold: string,
    pacifico: string,
}

export interface IFormStyle {
    container: StyleProp<ViewStyle>,
    title: StyleProp<ViewStyle>,
    image: StyleProp<ImageStyle>,
    end: StyleProp<ViewStyle>,
    link: StyleProp<ViewStyle>
}

export interface IStyleConstants {
    colors: IColors,
    size: ISize,
    family: IFamily
    formStyle: IFormStyle
}
