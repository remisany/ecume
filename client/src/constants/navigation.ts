import storageConstants from "./storageConstants";

const navigation = (navigation, destination) => {
    storageConstants.get(true).then(token => {
        console.log("ok")
        if (token === null) {
            console.log('1')
            return navigation.navigate('connexion')
        }

        console.log(token)
        console.log(route.name)

        if (token && !token.hasChangePassword && route.name !== "definition") {
            console.log('2')
            return navigation.navigate('definition')
        }

        if (token) {
            console.log('3')
            setLoading(false)
        }
    })
}
