import React from 'react'
import Successfully from '../../components/Successfully'

function Success(){
    return  <Successfully
                title="Redefinição enviada"
                description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos"
                textButton="Voltar ao login"
                to="/sign-in"
            />
}
export default Success