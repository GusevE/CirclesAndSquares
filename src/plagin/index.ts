import { Shapes } from "../types/model";
import { RadioButtonType } from "../types/types";

export const isDark = (arr: Shapes[] , colors:string) => {
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

export const radioButton: RadioButtonType[] = ["all", "dark", "light"];