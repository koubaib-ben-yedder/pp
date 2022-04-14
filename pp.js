
// i use dot_Product from the begining this why i dont do the last task *

let ps=0;

const dot_Product_proc =(v1,v2)=>{

   
   

    v1.map((value1,index1)=>{

        v2.map((value2,index2)=>{


            if(index2==index1){

                ps=(value1*value2)+ps

              

            }

        })
    })

    console.log(ps)

}
dot_Product_proc ([1,3,-5],[4,-2,-1])

const orth_vecteur =(v1,v2)=>{

    
  
    let ps=0;

    v1.map((value1,index1)=>{

        v2.map((value2,index2)=>{


            if(index2==index1){

                ps=(value1*value2)+ps

              

            }

        })
    })

    if(ps==0){
    
        console.log(`the two vecteur [${v1}] and [${v2}] is orthogonal`);

    }else{

        console.log(`the two vecteur [${v1}] and [${v2}] is not orthogonal`);

    }


}

orth_vecteur([1,3,-5,-3],[4,-2,-1,1])

