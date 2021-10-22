export interface datecount{
    datetime:String,
    count:number
}
export interface url{
    id?:number,
    longURL:string,
    short:string,
    count:number,
}
export interface urlChart{
    name:String,
    value:number
}
export interface user{
    username:string,
    email:string,
    password:string
}
export interface userlogin{
    email:string,
    password:string
}
