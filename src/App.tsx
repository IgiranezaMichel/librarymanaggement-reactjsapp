class Item{
  constructor(private id?:number,private name?:string)
  {
  }
  get Id():number|undefined{
    return this.id;
  }
  get Name():string|undefined{
    return this.name;
  }
  set Id(id:number){this.id=id;}
  set Name(name:string){this.name=name;}
}
function App() {
  const item=new Item();
  const itemList=
    [
    {id:item.Id=1,name:item.Name='Mike'},
    {id:item.Id=2,name:item.Name='Mike'},
    {id:item.Id=3,name:item.Name='Mike'},
    {id:item.Id=4,name:item.Name='Mike'},
    {id:item.Id=5,name:item.Name='Mikel'}
    ];
 const style={color:'blue'};
    const removeItem={id:item.Id=5,name:item.Name='Mikel'};
  return (
    <>
    {console.log(itemList)}
     <div style={style}>get Started with React js</div>
     {itemList.map((item=>{
       return (<p  key={item.id}>{item.name}</p>);
     }))}
    </>
  )
}

export default App
