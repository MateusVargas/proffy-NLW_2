import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        flex: 4
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
        fontSize: 13,
        color: '#fff',
        maxWidth: 250,
        textAlign: 'center'
    },

    bottom: {
        flex: 1
    },
    buttonView: {
        alignItems: 'center',
        marginBottom: 10
    },
    button: {
        height: 55,
        width: '100%',
        backgroundColor: '#04d361',
        borderRadius: 8,
        padding: 24,
        marginTop: 20,
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