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



        <div class="row gx-0 d-flex justify-content-center mx-2 my-3">
            <div class="col-12 my-2 btn btn-primary p-0 m-0" style="border:1px solid;border-radius:5px;">
             <input @change="get_old_match_result()" type="date" v-model="get_date" name="" class="form-control" style="" id="">
            </div>
          

        </div>

        <div class="row gx-0">
    
        </div>

          
        <div class="row my-3 gx-0 mx-4 d-flex justify-content-center">


            <div class="col-11 my-1 p-1 shadow rounded bg-white" v-for="dat in trans_history">
                <div class="row">
                   
                    <div class="col-7">
                        {{ dat.description }}
                    </div>
                    <div class="col-5 text-end ">
                        <span class="me-1" :style="(dat.sign=='-')?'color:red':'color:green'"> {{ dat.sign }}{{ dat.amount }}</span>
                 </div>
                </div>
            </div>
        
        </div>
    
       






    </div>
</template>

<script>
import { main, start } from '@popperjs/core';
import axios from 'axios'
export default {
    data() {


        return {

            is_start: false,
            count: 0,
            tot_bet:0,
            trans_history:[],
            tot_win:0,
            get_amount: 1000,
            is_get_result: false,
            old_match_result: [],
            dice_number: "",
            dice_time: 3,
            bet: "",
            get_date:"",
            is_loaded: false,
            is_rotating: false,
            current_match_id: "",
            count_time: "",
            main_balance:0,
            old_bet_data:{
                "dice_1":[],
                "dice_2":[],
                "dice_3":[],
                "dice_4":[],
                "dice_5":[],
            },
            submit_data: {
                "dice_1":[],
                "dice_2":[],
                "dice_3":[],
                "dice_4":[],
                "dice_5":[],
            },

            count_duration: 60,
            end_time_duration: 30,
     
            interval: null,
            current_date: "",
        }
    },


    mounted() {
       
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        this.current_date = formattedDate;
        this.body_check_balance();
        this.get_old_match_result();
        // this.count_function();

        // this.scrollToLastRow();

       






        // this.dice_number= Math.floor(Math.random() * (12 - 1 + 1)) + 1;;



        // let current_interval=setInterval(() => {

        //     clearInterval(current_interval)
        //     this.dice_number=Math.floor(Math.random() * 10000) + 1;

        // }, this.dice_number);



    },
    methods: {

        sum_bet_value(data)
        {
            let total=0;
            this.old_bet_data[data].forEach(et => {
                total+=parseFloat(et);
                
            });
          return total;
        },
        set_bet_value(data,value){
            if(this.submit_data[data].includes(value)==false)
            {
                this.submit_data[data].push(value);
            }   
            else{
              let index=  this.submit_data[data].indexOf(value);
              this.submit_data[data].splice(index,1);
            }
            console.log(this.submit_data)
         
        },
        timeToSeconds(time) {
            let [hours, minutes, seconds] = time.split(':').map(Number);
            return (hours * 3600) + (minutes * 60) + seconds;
        },

        calcu(data,result)
        {

            if(result==data.bet_data)
        {
            if(data.bet_data<=4)
            {
               return data.amount*4;
            }
            else
            {
                return  data.amount*100;
            }

        }
        else if(result==null)
        
        {
            return "??";
        }
        else
        {
            return 0;
        }
           
        },

        get_old_match_result() {
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }


            axios.post(this.$store.state.api_url + "get_trans_history_by_user",
                {
                     get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.trans_history=response.data
                       
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },

 

        body_check_balance()
  {


          const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
            
            axios.post(this.$store.state.api_url + "get_balance_client",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                      this.main_balance=response.data
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

    },






        scrollToLastRow() {
            const table = this.$refs.myTable;
            if (table) {
                // Scroll to the last row
                table.scrollTop = table.scrollHeight;
            }

        },
      



    },
}
</script>

<style lang="scss" scoped>
.btn-primary {
    background: rgba(128, 0, 128, 0.456) !important;
    border:1px solid white !important;

}
.btn-primary:disabled{
    background: rgba(128, 0, 128, 0.456);

}
.btn-primary:active{
    background: rgba(128, 0, 128, 0.456) !important;
    border:1px solid white;

}
.btn-primary:hover{
    background: rgba(128, 0, 128, 0.456) !important;
    border:1px solid white;
}
.btn-primary:focus{
    background: rgba(128, 0, 128, 0.456) !important;
    border:1px solid white;
}


.noti_div {
    width: 100%;

    white-space: nowrap;
    overflow: hidden;

}

.noti_text {
    display: inline-block;
    // color: #FFF;
    padding-left: 100%;
    animation: move 25s linear infinite;
}

@keyframes move {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(-100%, 0);
    }
}
</style>