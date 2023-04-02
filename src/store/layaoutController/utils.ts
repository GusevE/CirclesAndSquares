import {Database } from "../../DefaulData"
import { isRadioButton ,isDark } from "../../plagin"; 

let basket:  string[] = ['red', 'blue', 'yellow', 'green', 'square', 'circle']

export default function universalFilter (name: string) {
    let colors: string = ''
    if(isRadioButton(name)){
        colors = name
    }
    const elem = basket.find((e) => e === name)
    if(!elem){
        basket.push(name)
    }else{
        basket = basket.filter((e) => e !== name)
    }    
    return isDark(Database ,colors).filter((e) => basket.includes(e.color) && basket.includes(e.form))
}

 
