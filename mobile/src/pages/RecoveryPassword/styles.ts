import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTop: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: '#fff',
        maxWidth: 300
    },


    bottom: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 32,
    },
    backButton: {
        marginBottom: 15
    },
    header: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textBig: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 22,
        marginBottom: 10
    },
    textSmall: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: '#8257E5'
    },



    fields: {
        flexDirection: 'column',
        marginTop: 15
    },
    input:{
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 20
    },


    buttonView: {
        alignItems: 'center',
        marginTop: 5
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