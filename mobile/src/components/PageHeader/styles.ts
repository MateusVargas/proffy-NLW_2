import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5'
    },
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topBarTitle: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 14
    },
    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 24,
        maxWidth: 160,
        marginVertical: 40,
        marginTop: 20
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    profileData: {
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center'
    },
    name:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
        marginBottom: 5
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 12
    },
    avatar: {

    }
})
export default styles