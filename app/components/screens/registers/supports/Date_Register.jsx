////--> GET ARRAY OF THE DAYS <--////
export const daysTotal = (month)=>{
    const days = []
    var totalDays = 31      
    switch(month){
        case 2:
        case 4:
        case 6:
        case 9:
        case 11:
            totalDays = 30;
            break;
        case 2:
            totalDays = 28;
            break;
    }

    for(let i = 1; i <= totalDays; i++){
        days.push(i)
    }
    return days
}

////--> GET ARRAY OF THE MONTH <--////
export const months = [['Enero', 0], ['Febrero', 1], ['Marzo', 2], 
                    ['Abril', 3], ['Mayo', 4], ['Junio', 5], 
                    ['Julio', 6], ['Agosto', 7], ['Septiembre', 8], 
                    ['Octubre', 9], ['Noviembre', 10], ['Diciembre', 11],]

////--> GET ARRAY OF THE YEARS <--////
export const yearTotal = ()=>{
    const year = []
    const actualYear = new Date().getFullYear()
    const maxYear = actualYear - 16

    for(var i = maxYear; i >= 1940; i--){
        year.push(i)
    }

    return year
}