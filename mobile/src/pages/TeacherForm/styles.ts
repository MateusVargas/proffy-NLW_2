import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        justifyContent: 'center',
    },
    containerProfile: {
        marginTop: -20,
    },
    data: {
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 24
    },

    

    fields: {
        flexDirection: 'column',
        marginTop: 15,
    },
    containerField: {
        flexDirection: 'column',
        marginBottom: 4
    },
    containerFieldText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        marginBottom: 3,
        color: 'gray'
    },
    


    line:{
        borderWidth: 1,
        borderColor:'#f0f0f7',
        marginTop: 10,
        marginBottom: 30
    },
    formTitle:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 22
    },
    input:{
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textarea:{
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    schedules: {
        marginBottom: 25,
    },



    containerInline: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerInlineArea:{
        flexDirection: 'column',
        width: '47%'
    },
    inlineInput:{
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    newHour: {
        fontFamily: 'Poppins_400Regular',
        color: '#8257e5'
    },
    removeHour: {
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        color: 'red'
    },


    buttonView: {
        alignItems: 'center'
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