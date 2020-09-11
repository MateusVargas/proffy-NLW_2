import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },
    top: {
        flex: 1
    },
    bottom: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 50,
        paddingTop: 20,
        flexDirection: 'column'
    },
    number: {
        fontSize: 50,
        color: 'gray'
    },
    text: {
        fontSize: 20,
        maxWidth: 200,
        fontFamily: 'Poppins_400Regular',
        marginTop: 15
    },
    button: {
        height: 50,
        width: '48%',
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