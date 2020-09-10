import React from 'react'
import Successfully from '../../components/Successfully'

function Success(){
    return  <Successfully
                title="Cadastro concluído"
                description="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência"
                textButton="Fazer login"
                to="/sign-in"
            />
}
export default Success