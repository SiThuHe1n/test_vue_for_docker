<template>
    <div>
        <div v-if="is_nav" style="background:white;width:200px;height:100vh;position:fixed;z-index:100000;">
           

            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-end">
                    <button @click="show_nav()" class="btn btn-info"> <img style="width:25px;height:25px;" src="images/menu-bar.png" alt="">  </button>


                </li>
                <a href="/main" class="list-group-item" > မူလစာမျက်နှာ  </a>
                <a  href="/maung" class="list-group-item"> မောင်း  </a>
                <a  href="/body" class="list-group-item"> ဘော်ဒီ  </a>

                <a  href="/football_report" class="list-group-item"> အနိုင်/အရှုံး  </a>
              
              </ul>
        </div>

        <div class="" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">

                <button @click="show_nav()" class="btn btn-info"> <img style="width:25px;height:25px;" src="images/menu-bar.png" alt="">  </button>


            </div>

            <div style="right:0;position:absolute;" class="py-2 px-1">


           
                <button @click="reload_page()" class="btn   mx-1" style="border:1px solid #18d166 !important;"> 
                    
                    <svg style="width:15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
                    
                
                
                </button>
                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

            </div>


        </div>



        <div class="row gx-0 mb-1">
    
            <div class="col-6 p-1 d-flex align-items-center  justify-content-center">
             <input type="date" @change="get_current_data()" v-model="start_date" class="form-control">
             </div>
             <div class="col-6 p-1 d-flex align-items-center  justify-content-center">
                <input type="date" @change="get_current_data()" v-model="end_date" class="form-control">
                </div>

        </div>

        

        <div v-if="is_save_loading || is_read_loading">
            <div v-if="is_save_loading" style="top:50%;left:29%;position:absolute;">
                အပေါ်ဒိုင်ကိုတင်နေပါသည်
            </div>

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




        <div v-if="!is_save_loading && !is_read_loading" class="row d-flex justify-content-center gx-0 " style="margin-bottom: 100px;">
            
            <div class="col-12 p-2">
                <table class="table table-bordered bg-white border-primary ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>လောင်းငွေ</th>
                            <th>အနိုင်/အရှုံး</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B </td>
                            <td>  <span :style="(body_amount>=0)?'color:green':'color:red'"> {{ body_amount }} </span>  </td>
                            <td> <span :style="(body_win_lose>=0)?'color:green':'color:red'"> {{ body_win_lose }} </span>  </td>
                            <td rowspan="2" style="vertical-align: middle;">  <span :style="(total_amount>=0)?'color:green':'color:red'">  {{ total_amount }}  </span></td>
                      
                        </tr>
        
                        <tr>
                            <td>M</td>
                            <td>  <span :style="(maung_amount>=0)?'color:green':'color:red'"> {{ maung_amount }} </span>  </td>
                            <td>  <span :style="(maung_win_lose>=0)?'color:green':'color:red'"> {{ maung_win_lose }} </span>  </td>
                    
                       
                        </tr>
                    </tbody>
                   
    
                  
                </table>
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
            is_read_loading: false,
            is_save_loading: false,
            is_nav:false,
            start_date: "",
            end_date: "",
            body_amount:1000,
            body_win_lose:1000,

            maung_amount:1000,
            maung_win_lose:1000,

            total_amount:10000,
          
        }
    },


    mounted() {

        this.get_current_data();
        //      function   loadMoreContent() {

        //        let bodyScrollHeight = document.body.scrollHeight;
        //        let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        //        let innerHeight=window.innerHeight;
        //        console.log("Current Y-axis Scroll Position: " + scrollPosition + "px");
        //        console.log("Current Body: " + bodyScrollHeight + "px");
        //        console.log("Current Body: " + innerHeight + "px");




        //        // var contentDiv = document.getElementById('content');
        //        // var newContent = document.createElement('div');
        //        // newContent.style.height = '500px';
        //        // newContent.style.backgroundColor = 'lightcoral';
        //        // newContent.textContent = 'Loaded More Content';
        //        // contentDiv.appendChild(newContent);
        //    };



        //         window.addEventListener('scroll', function() {
        //             // alert('hello');
        //             // if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        //                 loadMoreContent()
        //             // }
        //         });

        //         window.addEventListener('wheel', function() {
        //             // alert('hello');
        //             // if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        //                 loadMoreContent()
        //             // }
        //         });


        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        this.currentDate = `${yyyy}-${mm}-${dd}`;
this.start_date=`${yyyy}-${mm}-${dd}`;
this.end_date=`${yyyy}-${mm}-${dd}`;

        


    },
    methods: {

        show_nav()
        {
            if(this.is_nav==false)
            {
                this.is_nav=true;
            }else
            {
                this.is_nav=false;  
            }
        },


        get_current_data() {
            this.is_read_loading = true;
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }

            console.log(headers);

            axios.post(this.$store.state.api_url + "member_report_by_date",
                {
                    start_date: this.start_date,
                    end_date: this.end_date,
                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.is_read_loading = false;
                        this.body_amount=response.data["body_betting"];
                        this.body_win_lose=response.data["body_win_price"];

                        this.maung_amount=response.data["maung_betting"];
                        this.maung_win_lose=response.data["maung_win_price"];

                        this.total_amount=parseFloat(response.data["body_win_price"])+parseFloat(response.data["maung_win_price"]);
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },
    },
}
</script>

<style lang="scss" scoped></style>