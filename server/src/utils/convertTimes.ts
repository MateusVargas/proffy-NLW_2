export function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number)//Number dentro do map pega os numeros separados pelo split
    const timeInMinutes = (hour * 60) + minutes
    return timeInMinutes
}

export function convertMinutesToHours(time: string){
    const hours = (Number(time) / 60)
    const roundHours = Math.floor(hours)//retorna o menor número inteiro possível
    const minutes = (hours - roundHours) * 60
    const roundMinutes = Math.round(minutes)//retorna o valor de um número arredondado para o inteiro mais próximo
    if(roundMinutes === 0){
        if(roundHours < 10){
            return "0" + roundHours + ":" + roundMinutes + "0"
        }
        return roundHours + ":" + roundMinutes + "0"
    }
    else if(roundHours < 10 && roundMinutes >= 10){
        return "0" + roundHours + ":" + roundMinutes
    }
    else if(roundHours < 10 && roundMinutes < 10){
        return "0" + roundHours + ":" + "0" + roundMinutes
    }
    else if(roundHours >= 10 && roundMinutes < 10){
        return roundHours + ":" + "0" + roundMinutes
    }
    return roundHours + ":" + roundMinutes
}