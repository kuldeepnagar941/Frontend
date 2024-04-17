// setTimeout(()=>{
//     console.log("hello")
//   },3000)
  
                                          
                                           // call back function

// function output(a,b,add){
//     add(a,b)
//   }
  
//   function add(a,b){
//     console.log(a+b)
//   }
//   output(10,20,add)


                                           //Promise function

//   let prom = new Promise((resolve,reject)=>{
//     if(true){
//         resolve("promise pura huva")
//     }
//     else{
//         reject("promise pura nhi huva")
//     }
// })
//  prom.then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })
  

  


  
        // function Food(dish) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve(dish);
      //     }, 3000);
      //   });
      // }

      // Food("Pizza").then((data) => {
      //   console.log("Pizza");

      //   Food("Burger").then((data) => {
      //     console.log(data);

      //     Food("Patties").then((data)=>{
             
      //        console.log(data)

      //        Food("Cold Drink").then((data)=>{

      //           console.log(data)
      //        })
      //     })
      //   });
      // });
      // Food("Burger").then((data)=>console.log(data))

      //  let ans =  Food("Pizza");

      //  ans.then((data)=>{
      //     console.log(data)
      //  })




      // function Food(dish) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve(dish);
      //     }, 3000);
      //   });
      // }


      // async function Output(){

      //   let pizza = await Food("Pizza");
      //   console.log(pizza)
      //   let burger = await Food("Burger");
      //   console.log(burger)
      //   let patties = await Food("Patties");
      //    console.log(patties)
      // }


      // Output()

      // console.log("I am one")
      // console.log("I am two")
      // console.log("I am three")

    // let data = fetch('https://dummyjson.com/products');
    
    // data.then((response)=>{
           
    //   response.json().then((result)=>{
           
    //       result.products.map((item)=>{
                
    //         console.log(item.id,item.title,item.price,item.images[0])
    //       })
    //   })
    // })

 
    let my_api_data = fetch('https://dummyjson.com/products')
    my_api_data.then((Response)=>{
      Response.json().then((data)=>
       data.user.map((item)=>{
        console.log(item.id,item.firstName)
    }))
    })