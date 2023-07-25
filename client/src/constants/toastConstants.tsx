import Toast, {ErrorToast, SuccessToast} from "react-native-toast-message";

//import constants
import styleConstants from "./styleConstants";

const defaultStyle = {
    text1Style: {
        fontSize: styleConstants.size.regular,
        fontFamily: styleConstants.family.bold,
        color: styleConstants.colors.black
    },
    text2Style: {
        fontSize: styleConstants.size.regular,
        fontFamily: styleConstants.family.regular,
        color: styleConstants.colors.grey
    }
}

const config = {
    success: (props) => (
        <SuccessToast
            {...props}
            {...defaultStyle}
            style={{borderLeftColor: styleConstants.colors.yellow, borderRadius: 5}}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            {...defaultStyle}
            style={{borderLeftColor: styleConstants.colors.orange, borderRadius: 5}}
        />
    ),
}

const defaultToast = (title: string, text: string, type: string, onHide?: Function): void => {
    Toast.show({
        topOffset: 60,
        text1: title,
        text2: text,
        onHide: onHide,
        type: type,
    })
}

const success = (title: string, text: string, onHide?: Function): void => {
    defaultToast(title, text, "success", onHide)
}

const error = (title: string, text: string, onHide?: Function): void => {
    defaultToast(title, text, "error", onHide)
}

const toast = {
    success: success,
    error: error,
    config: config
}

export default toast
