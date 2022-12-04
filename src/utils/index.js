export function  isNotEmptyObj(obj){
    if(null===obj||undefined===obj) return false
    return  !!Object.keys(obj).length
}
