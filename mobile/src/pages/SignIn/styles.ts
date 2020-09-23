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
    bottom: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 32,
    },


    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textLogin: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 22
    },
    textAccount: {
        fontSize: 12,
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



    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    viewCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textOptions: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        color: 'gray'
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