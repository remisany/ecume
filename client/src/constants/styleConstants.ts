//import interfaces
import {IColors, IFamily, IFormStyle, ISize} from "../interfaces/styleConstantsInterfaces";

export const colors: IColors = {
    yellow: '#F2BE5C',
    orange: '#F27141',
    background: '#f9f9f9',
    white: '#FFFFFF',
    grey: '#C7C7CD',
    black: "#000000",
    success: "#69C779",
    error: "#FE6301"
}

export const size: ISize = {
    largeTitle: 35,
    smallTitle: 20,
    regular: 14,
    small: 12,
    radius: 5,
    paddingContainer: 50,
}

export const family: IFamily = {
    light: "OpenSans-Light",
    regular: "OpenSans-Regular",
    bold: "OpenSans-Bold",
    pacifico: "Pacifico"
}

export const formStyle: IFormStyle = {
    container: {
        display: 'flex',
        justifyContent: "flex-end",
        flex: 1,
        backgroundColor: colors.white,
        padding: size.paddingContainer
    },
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: size.largeTitle,
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
