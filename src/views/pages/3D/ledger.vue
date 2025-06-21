<template>
    <div>
    
   




       
            
       


        <div class="" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Menu
                  </button> -->


                <router-link to="/lottery_3d" class="btn btn-warning mx-1"> Back </router-link>


            </div>

            <div style="right:0;position:absolute;" class="py-2 px-1">
             

                <!-- <router-link to="/3d/ledger" class="btn btn-warning mx-1" > L</router-link> -->

                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

            </div>


        </div>



        <div  v-if="is_read_loading" >
         

            <div v-if="is_read_loading" style="top:50%;left:38%;position:absolute;">
                ခဏစောင့်ပေးပါ
            </div>

            

            <div class="loader-container">
        
                <div class="loader">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            
           
              </div>
        </div>





        <div class="row gx-0 mb-3">
            <div class="col-7  p-1">
                <input type="date" v-model="get_date" disabled class="form-control" name="" id="">
            </div>
    

            <div class="col-5 p-1">
                <button class="bg-primary text-white form-control"> {{ get_total_amt() }} </button>
            </div>
        </div>
        <div style="height:80vh;overflow:scroll; fixed-bottom-row-container">

         


            <div v-if="lottery_list.length != 0" class="row gx-0">
                <div class="col-12 p-4 ">
                    <table class="table table-bordered table-hover">
                        <thead class="bg-light sticky-top top-0">
                            <tr>
                                <th> No </th>
                                <th> Amount </th>
                                <th> No </th>
                                <th> Amount </th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="n in 500" style="max-height:5px !important;padding:0px !important;">
                                <td
                                    style="background:black;color:white;max-height:5px !important;padding:0px !important;">
                                    {{ formatNumberWithLeadingZeros(n-1) }} </td>
                                <td :class="{ 'zero-amount': isAmtZero(getAmountByNumber(formatNumberWithLeadingZeros(n-1).toString(),lottery_list)) }"
                                    style="background:lightseagreen;color:white;max-height:5px !important;padding:0px !important;">
                                    {{
                                        getAmountByNumber(formatNumberWithLeadingZeros(n-1).toString(),lottery_list)
                                    }}
                                </td>
                                <td
                                    style="background:black;color:white;max-height:5px !important;padding:0px !important;">
                                    {{ formatNumberWithLeadingZeros(n + 500-1) }} </td>
                                <td :class="{ 'zero-amount': isAmtZero(getAmountByNumber(formatNumberWithLeadingZeros(n + 500-1).toString(),lottery_list)) }"
                                    style="background:lightseagreen;color:white;max-height:5px !important;padding:0px !important;">
                                    {{
                                        getAmountByNumber(formatNumberWithLeadingZeros(n + 500-1).toString(),lottery_list)
                                    }} </td>
                            </tr>

                            <tr class="fixed-bottom-row">
                                <td colspan="2"> Total </td>
                                <td colspan="2"> {{ get_total_amount(lottery_list) }} </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        
        </div>

      
    </div>
</template>

<script>


import router from '@/router';
import axios from 'axios'

export default {
    data() {


        return {
            is_read_loading:false,
            is_save: true,
            is_cancle: true,
            is_paste: false,

            get_date: "",
            get_am_pm: "",


            lottery_list: [],
         
        




        }
    },
    mounted () {

        window.addEventListener("popstate", function(event) {
     
        router.push("/lottery_3d");

});

        this.get_current_old_data();
        const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    this.get_date = `${year}-${month}-${day}`;

        
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    this.get_am_pm=ampm




        const Toast = this.$swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
})

// ;(async () => {
//   await 
//   await Toast.fire({
//     icon: 'error',
//     title: 'Error',
//   })
//   await Toast.fire({
//     icon: 'warning',
//     title: 'Warning',
//   })
//   await Toast.fire({
//     icon: 'info',
//     title: 'Info',
//   })
//   await Toast.fire({
//     icon: 'question',
//     title: 'Question',
//   })
// })()
    },
    methods: {
        get_total_amt()
        {

            let tot_amt=0;
            if(this.lottery_list.lenght!=0)
          {
            this.lottery_list.forEach(er => {
                tot_amt+=parseFloat(er.amt);
                
            });
          }
          return tot_amt;
        },

        show_detail_data(data)
        {
        //    this.detail_lottery_list.push({"key":"13","amt":"100"});
            console.log(data.lottery_detail)
            this.is_detail_data=true;
            
            data.lottery_detail.forEach(ele=>{
           this.detail_lottery_list.push({"key":ele.number,"amt":ele.amount.toString()});
           console.log(this.detail_lottery_list)
                
            })

        },
        get_current_old_data(){
            this.is_read_loading=true;
            const headers = {headers :
                  { Authorization: `Bearer `+this.$store.state.authToken,
                    Accept :'application/json', 
                  }

                }

                console.log(headers);

            axios.post(this.$store.state.api_url+"current_ledger_data_3d_lottery", 
            {
                get_date:this.get_date,
                get_am_pm:this.get_am_pm,

            },
          headers
        )
        .then(response => {
          if(response.status==200)
          {
         //   setTimeout(() => {
                this.is_read_loading=false;
           // }, 1000);
            // this.old_lottery_list=response.data;
           console.log(response.data)
           this.lottery_list=response.data;
          }
        
        })
        .catch(error => {
          console.error('Error:', error);
        //   alert('hello')
        });
        },

        // save_lottery() {

        
      


        //     const now = new Date();
        //     const hours = String(now.getHours()).padStart(2, '0');
        //     const minutes = String(now.getMinutes()).padStart(2, '0');
        //     const seconds = String(now.getSeconds()).padStart(2, '0');
        //     const currentTime = `${hours}:${minutes}:${seconds}`;

        //     const now2 = new Date();
        //     const year = now.getFullYear();
        //     const month = String(now2.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        //     const day = String(now2.getDate()).padStart(2, '0');
        //     const currentDate = `${year}-${month}-${day}`;

        //     let total_amt = 0;
        //     this.lottery_list.forEach(el => {
        //         total_amt += parseFloat(el.amt);
        //     });

        //     console.log(this.$store.state.authToken);

        //     const headers = {headers :
        //           { Authorization: `Bearer `+this.$store.state.authToken,
        //             Accept :'application/json', 
        //           }
        //          };
        //          console.log(headers);

        //     axios.post(this.$store.state.api_url+"2d_upload_paste", 
        //    {
           
        //          "time": currentTime,
        //         "date": currentDate,
        //         "old_lottery": this.lottery_list,
        //         "total": total_amt

        //   },headers
        // )
        // .then(response => {
        //   if(response.status==200)
        //   {
        //     // this.$store.state.is_auth=true;
        //     // this.$store.state.authToken=response.data.token;
        //     // localStorage.setItem('authToken', response.data.token);

        //     // this.$router.push({ name: 'home' });
        //     this.get_current_old_data();
        //     console.log(this.old_lottery_list)
        //     this.lottery_list = [];



        //     if(this.lottery_list.length==0)
        //         {
        //             this.is_paste = false;
        //             this.is_save = true;
        //             this.is_cancle = true;
        //         }
        //   }
        
        // })
        // .catch(error => {
        //   console.error('Error:', error);
        //   alert('hello')
        // });



            
        //     let btn_save = document.getElementById("save_btn");
        //     btn_save.disabled = true;

        //     setInterval(

        //         // Disable the button
        //         btn_save.disabled = false
        //         , 2000);


        // },
        cancle_lottery() {
            this.is_detail_data=false;
            this.detail_lottery_list = [];

            this.lottery_list = [];
            this.is_paste=false;
        this.is_save=true;
        this.is_cancle=true;
        // alert('hello');
        },
        isAmtZero(amt) {
            return parseFloat(amt) == 0;
        },
        get_total_amount(data) {
            let total_amt = 0;
            data.forEach(el => {
                total_amt += parseFloat(el.amt);
            });
            return total_amt;

        },

        formatNumberWithLeadingZeros(num) {
            return num.toString().padStart(3, '0');
        },

        getAmountByNumber(number,data) {
            // console.log(number)
            let cur_amt = 0;
            data.forEach(et => {
                if (et.key.toString() == number.toString()) {
                    cur_amt += parseFloat(et.amt);
                }
            });

            return cur_amt ? cur_amt : '0'; // Return amount if found, otherwise empty string
        },
        async getClipboardData() {


            try {
                const text = await navigator.clipboard.readText();
                // console.log(text);

                const inputData = text.trim().split('\n');
                console.log(inputData)

                this.lottery_list = inputData.map(line => {
                    
                   

                    if(line.split('/').length==3)
                    {
                        if(!isNaN(parseFloat(line.split('/')[0])) && isFinite(line.split('/')[0]) && !isNaN(parseFloat(line.split('/')[1])) && isFinite(line.split('/')[1]))
                        {
                        //  return   [];
                            const [key, amt] = line.split('/');
                     
                            return { key, amt };
                        

                        }
                        else
                        {
                      
                            return null;
                        }
                       
                    }
                    else{
          
                        return null;
                    }
                 
                }).filter(element => element !== null);
                console.log(this.lottery_list)
               
                if(this.lottery_list.length!=0)
                {
                    this.is_paste = true;
                    this.is_save = false;
                    this.is_cancle = false;
                }
              


            } catch (err) {
                console.error('Failed to read clipboard contents: ', err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>



#customDiv {
    height: 300px;
    background-color: lightgray;
    position: relative;
    z-index: 1;
}
#customOffcanvas {
    z-index: 1050; /* Ensures it is above the custom div */
}


.fixed-bottom-row-container {
    position: relative;
}

.fixed-bottom-row {
    position: sticky;
    bottom: 0;
    background-color: white;
    z-index: 1;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
}

.zero-amount {
    color: black !important;
    background: white !important;
}

.custom-offcanvas {
    top: 100px; /* Adjust this value to move the Offcanvas down */
    height: calc(100% - 100px); /* Adjust this value to keep the Offcanvas height in check */
}


.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .loader {
    display: flex;
    justify-content: space-between;
    width: 80px;
  }
  
  .loader div {
    width: 16px;
    height: 16px;
    background-color: #FF5C35;
    border-radius: 50%;
    animation: grow-shrink 1.5s infinite;
  }
  
  .loader div:nth-child(1) {
    animation-delay: 0s;
  }
  
  .loader div:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  .loader div:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  @keyframes grow-shrink {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }

</style>