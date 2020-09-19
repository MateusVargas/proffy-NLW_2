import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBig: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 35,
        color: '#fff',
        maxWidth: 250,
        marginBottom: 10,
        textAlign: 'center'
    },
    textSmall: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#fff',
        maxWidth: 250,
        textAlign: 'center'
    },

    button: {
        height: 58,
        backgroundColor: '#04d361',
        borderRadius: 8,
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 19
    }
})
export default styles