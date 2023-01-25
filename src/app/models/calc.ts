import { InputFunction } from "./input-function"

export interface TypeResult<T>{
    value:T,
    util?:any[]
}

export interface Calc {
    id:string,
    name_th:string,
    name_en:string,
    input:InputFunction
    fn(...args:any[]):TypeResult<any>
}