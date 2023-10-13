class Feedback{
constructor(private name?:string,private email?:string,private id?:number){}
set Name(name:string){this.name=name;}
set Email(email:string){this.email=email;}
set Id(id:number|undefined){this.id=id;}
get Name():string|undefined{return this.name;}
get Email():string|undefined{return this.email}
get Id():number|undefined{return this.id}
}
export default Feedback;