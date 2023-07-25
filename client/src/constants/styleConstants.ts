//import interfaces
import {IColors, IFamily, IFormStyle, ISize, IStyleConstants} from "../interfaces/styleConstantsInterfaces";

const colors: IColors = {
    yellow: '#F2BE5C',
    orange: '#F27141',
    background: '#f9f9f9',
    white: '#FFFFFF',
    grey: '#C7C7CD',
    black: "#000000",
    success: "#69C779",
    error: "#FE6301"
}

const size: ISize = {
    fontTitle: 35,
    regular: 14,
    small: 12,
    radius: 5,
    paddingContainer: 50,
}

const family: IFamily = {
    light: "OpenSans-Light",
    regular: "OpenSans-Regular",
    bold: "OpenSans-Bold",
    pacifico: "Pacifico"
}

const formStyle: IFormStyle = {
    container: {
        display: 'flex',
        justifyContent: "flex-end",
        flex: 1,
        backgroundColor: colors.white,
        padding: size.paddingContainer
    },
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: size.fontTitle,
        marginBottom: 10
    },
    image: {
        alignSelf: "center",
        height: 170,
        width: 170,
    },
    end: {
        alignSelf: "center",
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    link: {
        color: colors.yellow,
        fontFamily: "OpenSans-Bold",
        fontSize: size.regular
    }
}

const styleConstants: IStyleConstants = {
    colors: colors,
    size: size,
    family: family,
    formStyle: formStyle
}

export default styleConstants;
