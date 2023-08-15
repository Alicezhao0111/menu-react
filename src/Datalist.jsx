import { useState } from "react";

const data = [
  {
    id: 1,
    name: "珍珠奶茶",
    detail: "香濃奶茶搭配QQ珍珠",
    price: 50,
    num: 20,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    detail: "清新冬瓜配上新鮮檸檬",
    price: 45,
    num: 18,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    detail: "綠茶與檸檬的完美結合",
    price: 55,
    num: 34,
  },
  {
    id: 4,
    name: "四季春茶",
    detail: "香醇四季春茶，回甘無比",
    price: 45,
    num: 10,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    detail: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    num: 25,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    detail: "檸檬與冰茶的清新組合",
    price: 45,
    num: 20,
  },
  {
    id: 7,
    name: "芒果綠茶",
    detail: "芒果與綠茶的獨特風味",
    price: 55,
    num: 18,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    detail: "抹茶與鮮奶的絕配",
    price: 60,
    num: 20,
  },
];

function Datalist() {
    const [menu, setMenu]=useState(data);
    const handleReduce=(items)=>{
      const reduce = menu.map((newItem)=>{
      if (newItem.id === items.id && newItem.num>0){
          newItem.num=newItem.num-1;                         
          }
      return newItem;
    });
    console.log(reduce);
    setMenu(reduce);
    }
    const handleAdd=(items)=>{
      const add = menu.map((newItem)=>{
      if (newItem.id === items.id){
          newItem.num=newItem.num+1;                         
          }
      return newItem;
    });
    console.log(add);
    setMenu(add);
    }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>

        <tbody>
            {
              menu.map((item)=>{
                return <tr key = {item.id}>
                <td>{item.name}</td>
                <td>
                  <small>{item.detail}</small>
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={()=>handleReduce(item)}
                  disabled = {item.num<=0} //小於0則禁用
                  >-</button>

                  {item.num}
                  
                  <button onClick={()=>handleAdd(item)}>+</button>
                </td>
              </tr>
              })

            }
        
        </tbody>
      </table>
    </div>
  );
}

export default Datalist;
