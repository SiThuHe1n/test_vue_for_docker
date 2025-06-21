<template>
    <div>
        <div class="bg-info" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Menu
                  </button> -->

            </div>

            <div style="left:0;position:absolute;" class="py-2 px-1">
             

                <!-- <router-link to="/2d/ledger" class="btn btn-warning mx-1" > L</router-link> -->

                <router-link to="/main" class="btn btn-warning mx-1"> Back </router-link>

                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

            </div>


        </div>




        <div class="d-flex align-items-center justify-content-center"  style="height:400px;top:0;position:relative;width:100%;max-width:500px;z-index:1000;">

            <div class="bg-white shadow rounded d-flex align-items-center justify-content-center" style="width:200px;height:200px;position:relative;">
                <div id="border_style_box">
                 

                </div>
                
               
                <span style="font-size:80px;font-weight:900;" > {{ dice_number }} </span>



            </div>
        </div>

        <div class="d-flex align-items-center justify-content-center"  style="top:0;position:relative;width:100%;max-width:500px;z-index:1000;">

          
            <div :disabled="is_start" @click="select_bet('down')" style="width:120px;height:60px;font-size:25px;font-weight:900;" :class="(bet=='down')?'d-flex align-items-center justify-content-center btn btn-danger mx-3':'d-flex align-items-center justify-content-center btn btn-outline-danger mx-3' ">
                Down
        </div>


           <div :disabled="is_start" @click="select_bet('middle')" style="width:120px;height:60px;font-size:25px;font-weight:900;" :class="(bet=='middle')?'d-flex align-items-center justify-content-center btn btn-danger mx-3':'d-flex align-items-center justify-content-center btn btn-outline-danger mx-3' ">
            Middle 
         </div>
       

        <div :disabled="is_start"  @click="select_bet('up')" style="width:120px;height:60px;font-size:25px;font-weight:900;" :class="(bet=='up')?'d-flex align-items-center justify-content-center btn btn-danger mx-3':'d-flex align-items-center justify-content-center btn btn-outline-danger mx-3' ">
            Up
       </div>

        </div>
    

        <div :disabled="is_start"  class="row gx-0 mt-2 bg-white shadow rounded"
        style="bottom:0;position:fixed;width:100%;max-width:500px;z-index:1000;">
     

        <div :disabled="is_start" class="col-6 text-center bg-white" style="border:1px solid black;height:45px;">
            <input type="number" style="border:1px solid black;height:45px;border-radius:0;"  placeholder="0"
                class="form-control" v-model="get_amount" name="" readonly id="">
        </div>

        <div :disabled="is_start" @click="dice_start()" class="col-6 text-center bg-white"
            style="border:1px solid black;height:45px;">
            လောင်းမည်
        </div>
    </div>


    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {


        return {
            is_start:false,
            count:0,
            get_amount:1000,
            dice_number: Math.floor(Math.random() * (12 - 1 + 1)) + 1,
            dice_time:3,
            bet:"",
            is_loaded:false,


            interval:null,
        }
    },


    mounted() {
        // this.dice_number= Math.floor(Math.random() * (12 - 1 + 1)) + 1;;

      

        // let current_interval=setInterval(() => {
            
        //     clearInterval(current_interval)
        //     this.dice_number=Math.floor(Math.random() * 10000) + 1;
            
        // }, this.dice_number);
       
        
    
    },
    methods: {
        select_bet(bet)
        {
            this.bet=bet

        },

        dice_start()
        {
          
        
            if(this.is_start!=true)
        {
            if(this.is_loaded==true)
        {
            window.location.reload();
        }
            if(this.get_amount!=null && this.get_amount!="" && this.get_amount!=0 && this.bet!="" && this.bet!=null)
        {
            this.is_loaded=true;
            let d_box=document.getElementById("border_style_box");
            d_box.innerHTML=`  <div class="" id="dice_box_right" style="width:200px;height:200px;position:absolute;">

                    </div>
                    <div class="" id="dice_box_bottom" style="width:200px;height:200px;position:absolute;">
    
                    </div>
                    <div class="" id="dice_box_left" style="width:200px;height:200px;position:absolute;">
    
                    </div>
                    <div class="" id="dice_box_top" style="width:200px;height:200px;position:absolute;">
    
                    </div>`;

               
            this.is_start=true;
            this.dice_time = 3;
            this.interval=setInterval(this.myFunction, this.dice_time);

        }

        }
           
       


        },
       async myFunction(){
    clearInterval(this.interval);
    for(let a=2;a<=400;a+=3)
    {
        
        if( this.dice_time<300 && this.dice_time<a  )
    {   

       if(this.count<=25)
       {
        let curr_persent=(this.count*4);
        if(curr_persent>100)
       {
            curr_persent=100
       }
        let dice_box=document.getElementById("dice_box_top");
        dice_box.style.top = '0';
        dice_box.style.left = '0'; // Start 25% down
        dice_box.style.width = (curr_persent)+'%'; // 50% of the parent height
        dice_box.style.height = '0';
        dice_box.style.border = '2px solid black';

       }
       else  if(this.count<=50)
       {
        let curr_persent=((this.count-25)*4);
        if(curr_persent>100)
       {
            curr_persent=100
       }
        let dice_box=document.getElementById("dice_box_right");
        
        dice_box.style.right = '0';
        dice_box.style.top = '0'; // Start 25% down
        dice_box.style.height = (curr_persent)+'%'; // 50% of the parent height
        dice_box.style.width = '0';
        dice_box.style.border = '2px solid black';

       }
       else  if(this.count<=75)
       {
        let curr_persent=((this.count-50)*4);
        if(curr_persent>100)
       {
            curr_persent=100
       }
        let dice_box=document.getElementById("dice_box_left");
        dice_box.style.bottom = '0';
        dice_box.style.right = '0'; // Start 25% down
        dice_box.style.width = curr_persent+'%'; // 50% of the parent height
        dice_box.style.height = '0';
        dice_box.style.border = '2px solid black';

       }
       else  if(this.count<=100)
       {
        let curr_persent=((this.count-75)*4)+4;
        if(curr_persent>100)
       {
            curr_persent=100
       }
        let dice_box=document.getElementById("dice_box_bottom");
        dice_box.style.left = '0';
        dice_box.style.bottom = '0'; // Start 25% down
        dice_box.style.height = curr_persent+'%'; // 50% of the parent height
        dice_box.style.width = '0';
        dice_box.style.border = '2px solid black';
       


       }
      
      
      

        this.count++;
        this.dice_time=a;
    //    alert(a);
        console.log(this.count)
    this.dice_number =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;;

        return this.interval=setInterval(this.myFunction, this.dice_time);

    }
    else if(a>=300)
    {
        // this.dice_time=2;
      //  alert('hello');
      clearInterval(this.interval)

    this.dice_number =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
    this.is_start=false;

    const Toast = Swal.mixin({
                                toast: true,
                                position: 'center',
                                iconColor: 'white',
                                customClass: {
                                    popup: 'colored-toast',
                                },
                                showConfirmButton: false,
                                timer: 1500,
                                timerProgressBar: true,
                            });


    if(this.dice_number<7 && this.bet=="down")
    {
      
        setTimeout(() => {
            return   Toast.fire({
                                icon: 'success',
                                title:  "you win",
                            })
            
        }, 100);
    

    }
    else if(this.dice_number==7 && this.bet=="middle")
    {   setTimeout(() => {
            return   Toast.fire({
                                icon: 'success',
                                title:  "you win 3X",
                            })
            
        }, 100);
    }
    else if(this.dice_number>7 && this.bet=="up")
    {
        setTimeout(() => {
            return   Toast.fire({
                                icon: 'success',
                                title:  "you win",
                            })
            
        }, 100);

    }
    else if(this.bet!="")
    {
        setTimeout(() => {
            return   Toast.fire({
                                icon: 'error',
                                title:  "you lose",
                            })
            
        }, 100);
    }
   

    }
  
       
    }
},

    

    },
}
</script>

<style lang="scss" scoped></style>