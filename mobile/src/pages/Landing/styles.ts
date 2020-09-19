import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    top: {
        flex: 2,
        backgroundColor: '#8257E5',
        padding: 40
    },
    exit: {
        backgroundColor: '#6b42cc',
        marginTop: 5,
        padding: 6,
        borderRadius: 10
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'//redimensiona conforme altura e largura, deixando visível toda a foto
    },
    topbar: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    actions: {
        flex: 3,
        backgroundColor: '#fff',
        padding: 30
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#8257E5',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 10//80
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    button: {
        height: 130,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'space-between',
        padding: 24
    },
    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 19
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 30,
        maxWidth: 200
    }
})
export default styles