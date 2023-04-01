export interface Shapes{
    id: number
    form: string
    color: string
    dark: boolean;
}

export  type ColorType = 'blue' | 'yellow' | 'red' | 'green';
export type HeaderCheckboxType = "circle"|  'square'
export type RadioButtonType = 'all' | 'dark' | 'light'
export type TypeC = ColorType & HeaderCheckboxType;

export interface HelperObjectType {
    blue: string;
    yellow: string;
    red: string;
    green: string;
    circle: string;
    square: string;
    all: string,
    dark: string,
    light: string,
}



