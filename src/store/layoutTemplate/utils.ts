import { radioButton } from "../../Components/SideBar"
import {Database } from "../../data"
import { HelperObjectType, RadioButtonType, Shapes } from "../../model"


let basket:  string[] = ['red', 'blue', 'yellow', 'green', 'square', 'circle']
let colors: string
export default function universalFilter (name: string) {
    console.log(colors)
    if(isRadioButton(name)){
        colors = name
    }
    const elem = basket.find((e) => e === name)
    if(!elem){
        basket.push(name)
    }else{
        basket = basket.filter((e) => e !== name)
    }    
    return isDark(Database).filter((e) => basket.includes(e.color) && basket.includes(e.form))
}

 export const helperObject: HelperObjectType = {
    blue: "Голубой",
    yellow: "Желтый",
    red: "Красный",
    green: "Зеленый",
    circle: "Круги",
    square: "Квадраты",
    all: "Все",
    dark: "Тёмные",
    light: "Светлые",
  };

  const isDark = (arr: Shapes[]) => {
    let data = arr

    switch (colors) {
        case 'dark':{
            return data.filter((e) => e.dark)
        }
        case 'light':{
            return data.filter((e) => !e.dark)
        }
        default: return data
    }
   
}

  export const isRadioButton = (name: string) => {
    return radioButton.includes(name as RadioButtonType);
  };