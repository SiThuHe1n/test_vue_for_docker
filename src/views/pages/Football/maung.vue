<template>
    <div>


        <div v-if="is_nav" style="background:white;width:200px;height:100vh;position:fixed;z-index:100000;">
           

            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-end">
                    <button @click="show_nav()" class="btn btn-info"> <img style="width:25px;height:25px;" src="images/menu-bar.png" alt="">  </button>


                </li>
                <a href="/main" class="list-group-item" > မူလစာမျက်နှာ  </a>
                <a  href="/body" class="list-group-item"> ဘော်ဒီ  </a>

                <a  href="/football_report" class="list-group-item"> အနိုင်/အရှုံး  </a>

            
              </ul>
        </div>


        <div class="" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                              <button @click="show_nav()" class="btn btn-info"> <img style="width:25px;height:25px;" src="images/menu-bar.png" alt="">  </button>


            </div>

            <div style="right:0;position:absolute;" class="py-2 px-1">


                <router-link to="/maung/voucher" class="btn btn-dark mx-1"> V</router-link>

                <router-link to="/football_history_maung" class="btn btn-dark mx-1"> H </router-link>


                <button @click="reload_page()" class="btn btn-outline-dark mx-1"> 
                    
                    <svg style="width:15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
                    
                
                
                </button>
                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

            </div>


        </div>



        <div class="row gx-0 mb-1">
          
            <div class="col-4 p-1 d-flex align-items-center  justify-content-center">
                <select v-model="league_id" @change="change_league()" name="" id="" class="form-control">
                    <option value=""> All League </option>
                    <option v-for="lg in league_list" :value="lg.id"> {{ lg.league_name }} </option>
                
                </select>
              
              </div>

            <div class="col-2 p-1 d-flex align-items-center  justify-content-center">
                <router-link v-if="check_list['body']==1" to="/body" class="form-control btn btn-light" style="font-size:10px;">
                    ဘော်ဒီ
                </router-link>
             
             </div>


            <div class="col-2 p-1 d-flex align-items-center  justify-content-center">
                <router-link v-if="check_list['maung']==1" to="/maung" class="form-control btn btn-dark " style="font-size:10px;">
                မောင်း
                </router-link>
             
             </div>
         
            <div class="col-4 p-1 d-flex align-items-center  justify-content-center">
               <div class="form-control">
                {{ main_balance }}
               </div>
            
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
            <div class="col-12  p-0">
              {{ currentDate }}  မောင်းပွဲစဥ်များ
            </div>

            <div class="col-12 p-2 " v-for="(cm, index) in selected_data"   >
                <div class="card">
                    <div class="card-header bg-black text-white p-1" style="min-height:30px;">
                        <div class="row">
                            <div class="col-3">
                                <p style="font-size:12px;" class="text-start mb-0"> {{ cm.start_time }} </p>
                            </div>
                            <div class="col-6">
                                <p class="text-center mb-0"> {{ cm.league }} </p>
                            </div>

                            <div class="col-3">
                                <p style="font-size:12px;" class="text-end mb-0"> {{ cm.end_time }} </p>



                            </div>
                        </div>
                    </div>
                    <div class="card-body px-2 py-0">




                        <div class="row px-1 ">

                            <div  style="border:1px solid black;min-height:100%;padding:0px;" class=" col-6">


                                <input style="border:1px solid black;min-height:100%;border-radius:0px;" type="radio"
                                    class="btn-check form-control" :name="'select_team_1_' + index"
                                    @click="check_select(selected_data[index].select_team, 'team_1', index, 'select_team')"
                                    v-model="selected_data[index].select_team" value="team_1"
                                    :id="'select_team_1_' + index" autocomplete="off">
                                <label style="border:1px solid black;min-height:100%;border-radius:0px;"
                                    class="btn btn-outline-primary  form-control" :for="'select_team_1_' + index">{{
                                    cm.team_1 }} 
                                    
                                    
                                    <span v-if="cm.team_1_score!=null && cm.team_1_sign!=null" style="color:red"> (
                                        {{ cm.team_1_score }}{{ cm.team_1_sign }}{{ cm.team_1_multiply }} ) </span>
                                     </label>


                            </div>
                            <div style="border:1px solid black;min-height:100%;padding:0px;position:relative;" class=" col-6">

                                <input style="border:1px solid black;min-height:100%;border-radius:0px;" type="radio"
                                    class="btn-check form-control" :name="'select_team_2_' + index"
                                    @click="check_select(selected_data[index].select_team, 'team_2', index, 'select_team')"
                                    v-model="selected_data[index].select_team" value="team_2"
                                    :id="'select_team_2_' + index" autocomplete="off">
                                <label style="border:1px solid black;min-height:100%;border-radius:0px;"
                                    class="btn btn-outline-primary form-control" :for="'select_team_2_' + index">{{
                                    cm.team_2 }}
                                   
                                    <span v-if="cm.team_2_score!=null && cm.team_2_sign!=null" style="color:red"> (
                                        {{ cm.team_2_score }}{{ cm.team_2_sign }}{{ cm.team_2_multiply }} ) </span>
                                  
                                
                                
                                </label>


                                <!-- {{cm.team_2}} -->

                            </div>

                            <div style="border:1px solid black;min-height:100%;padding:0px; position:relative;" class=" col-4">

                                <input style="border:1px solid black;min-height:100%;border-radius:0px;" type="radio"
                                    class="btn-check form-control" :name="'is_up_' + index" :id="'is_up_' + index"
                                    @click="check_select(selected_data[index].up_or_down, 'up', index, 'up_or_down')"
                                    value="up" v-model="selected_data[index].up_or_down" autocomplete="off">
                                <label style="border:1px solid black;min-height:100%;border-radius:0px;"
                                    class="btn btn-outline-primary  form-control" :for="'is_up_' + index"> အပေါ်
                                </label>


                            </div>

                            <div style="border:1px solid black;min-height:100%;color:red;" class=" col-4 d-flex align-items-center justify-content-center">
                                {{ cm.over_all_score }}{{ cm.over_all_sign }}{{ cm.over_all_multiply }}
                            </div>

                            <div style="border:1px solid black;min-height:100%;padding:0px;position:relative;" class=" col-4">


                                <input style="border:1px solid black;min-height:100%;border-radius:0px;" type="radio"
                                    class="btn-check form-control" :id="'is_down_' + index" :name="'is_down_' + index"
                                    @click="check_select(selected_data[index].up_or_down, 'down', index, 'up_or_down')"
                                    value="down" v-model="selected_data[index].up_or_down" autocomplete="off">
                                <label style="border:1px solid black;min-height:100%;border-radius:0px;"
                                    class="btn btn-outline-primary  form-control" :for="'is_down_' + index"> အောက်
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            


        </div>


        <div v-if="!is_save_loading && !is_read_loading" class="row gx-0 mt-2 bg-white shadow rounded"
            style="bottom:0;position:fixed;width:100%;max-width:500px;z-index:1000;">
            <div class="col-4 text-center bg-white" style="border:1px solid black;min-height:100%;">
                ရွေး {{ get_total_select() }}
            </div>

            <div class="col-4 text-center bg-white" style="border:1px solid black;min-height:100%;">
                <input type="number" style="border:1px solid black;min-height:100%;border-radius:0;" placeholder="0"
                    class="form-control" v-model="get_amount" name="" id="">
            </div>

            <button :disabled="check_betting_count()" @click="submit_football_match()" class="col-4 text-center bg-white"
                style="border:1px solid black;min-height:100%;">
                ရွေးမည်
            </button>
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
            channel: Pusher.subscribe('body_channel'),
            current_limit_betting:4,
            check_list:{
                "game_one":"0",
                "9am_2d":"0",
                "12am_2d":"0",
                "2pm_2d":"0",
                "4pm_2d":"0",
                "body":"0",
                "maung":"0",
                "2d":"0",
                "3d":"0",
                "2d_message":"0",
                "3d_message":"0",
                
                
                
      },
            current_max_betting:8,
            currentDate: "",
            currentMatch: [],
            selected_data: [],
            get_amount: 0,
            message: "hello",
            main_balance:"0",
            is_nav:false,
            league_list:[],
            league_id:"",


        }
    },


    mounted() {
        window.addEventListener("popstate", function(event) {
            router.push("/main");
});


        setInterval(() => {
            this.checking_end_time();
        }, 10);


        this.channel.bind('update_event', (data) => {
            this.get_update_data();
        });




        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('dblclick', function () {
                if (this.checked) {
                    this.checked = false;
                }
            });
        });


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

        this.check_show_list();
    },
    methods: {
        check_show_list()
    {

      const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }

      axios.post(this.$store.state.api_url + "get_open_list",
          {
            //    get_date: this.get_date,


          },
          headers
        )
          .then(response => {
            if (response.status == 200) {
              this.check_list=response.data
            }

          })
          .catch(error => {
            console.error('Error:', error);
            //   alert('hello')
          });

    },
        get_update_data()
        {

            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
            
            axios.post(this.$store.state.api_url + "current_maung_match",
                {
                  
                    get_date: this.get_date,

                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        let new_data=[];
                        new_data = response.data.filter((dat) =>  (dat.league_id == this.league_id || this.league_id=="") );
                   
                        this.selected_data.forEach((er,index) => {
                            new_data.forEach(es => {
                             
                                if(er.id==es.id)
                        {

                            this.selected_data[index] = { 
                                ...es, 
                                select_team: er.select_team, 
                                up_or_down: er.up_or_down 
                            };
                        }
                        else
                        {
                           // this.selected_data.push(es);
                        }
                            });
                         
                        });
                     
                        console.log(this.selected_data)
                        
                      
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

        },


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

    maung_check_balance()
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

        reload_page()
        {
            location.reload();
        },

        update_data(data) {
            this.selected_data.forEach(element => {
                if (el['id'] == data['id']) {
                    el = data;
                    el["select_team"] = "";
                    el["up_or_down"] = "";
                }
            });

            this.$forceUpdate();
        },



        check_select(data1, data2, data3, data4) {


            if (data1 == data2) {
                if (data4 == "select_team") {
                    this.selected_data[data3].select_team = ""

                }
                else {
                    this.selected_data[data3].up_or_down = ""

                }
            }
            if (data4 == "select_team") {
                this.selected_data[data3].up_or_down = ""


                }
                else {
                    this.selected_data[data3].up_or_down = ""
                    this.selected_data[data3].select_team = ""

                }

        },
        get_total_select() {
            let total_count = 0;
            this.selected_data.forEach(er => {
                if (er.select_team != "") {
                    total_count++;
                }
                if (er.up_or_down != "") {
                    total_count++;

                }

                // if()
            });
            return total_count;


        },

        
change_league()
{
    this.selected_data=this.match_data.filter((dat) =>  (dat.league_id == this.league_id || this.league_id=="") );
    this.selected_data.forEach(dat => {

dat["select_team"] = "";
dat["up_or_down"] = "";



});

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




            // Scroll event listener



            axios.post(this.$store.state.api_url + "current_league",
                {
                  


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.is_read_loading = false;
                        // this.old_lottery_list=response.data;
                        console.log(response.data)
                        this.league_list = response.data;
                      
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });



            axios.post(this.$store.state.api_url + "current_maung_match",
                {
                    get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.is_read_loading = false;
                        // this.old_lottery_list=response.data;
                        console.log(response.data)
                        this.match_data=response.data;
                        this.currentMatch = response.data.filter((dat) =>  (dat.league_id == this.league_id || this.league_id=="") );
                        this.selected_data = [];
                        this.selected_data = response.data.filter((dat) =>  (dat.league_id == this.league_id || this.league_id=="") );
                        this.selected_data.forEach(dat => {

                            dat["select_team"] = "";
                            dat["up_or_down"] = "";

                            // this.selected_data.push({
                            //     "select_team":"",
                            //     "up_or_down":"",

                            //     "id":dat.id,


                            // })

                        });
                   
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

                axios.post(this.$store.state.api_url + "get_limit_betting_maung",
                {
                    get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                         this.maung_check_balance();
                     
                        // this.old_lottery_list=response.data;
                        console.log(response.data)
                        this.current_limit_betting = response.data['limit'];
                        this.current_max_betting = response.data['max'];
                        console.log(this.current_limit_betting)

                       
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },

         convertTo24HourFormat(timeString) {
    // Split the time and the AM/PM part
    let [time, period] = timeString.split(' ');
    
    // Further split the time into hours and minutes
    let [hours, minutes] = time.split(':');
    
    // Convert hours to an integer
    hours = parseInt(hours, 10);
    
    // Convert to 24-hour format
    if (period === 'pm' && hours !== 12) {
        hours += 12;
    } else if (period === 'am' && hours === 12) {
        hours = 0;
    }
    
    // Format hours and minutes to always have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Combine into the 24-hour time format
    return `${hours}:${minutes}`;
},


 convertToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
},

        checking_end_time()
        {
            const get_time=new Date();
            const hour=get_time.getHours();
            const minute=get_time.getMinutes();
            const cur_time=hour+":"+minute;
            


            if(this.selected_data.length!=0)
        {
            const time_2=this.convertToMinutes(cur_time);
            let index_arr=[];
            this.selected_data.forEach((er,ind) => {
                
                const time_1= this.convertToMinutes(this.convertTo24HourFormat(er.end_time));
                
                if(time_1<time_2)
                {
                    index_arr.push(ind);
                }


            });
            index_arr.sort((a, b) => b - a);
            index_arr.forEach(index => this.selected_data.splice(index, 1));
            
            
         
      
        }
        },
        check_betting_count()
        {
            let chk_count=this.get_total_select();
            
            if(chk_count>=this.current_limit_betting && chk_count<=this.current_max_betting)
            {
                return false;
            }
            else{
                return true;
            }
            

        },

        submit_football_match() {

            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }

            console.log(headers);


            let chk_data = false;
            let chk_count=0;
            this.selected_data.forEach(et => {
                console.log(et.up_or_down == null)
                if (et.up_or_down == null || et.up_or_down == "") {

                    if (et.select_team == null || et.select_team == "") {


                        chk_count++;
                    }

                }
                else if (et.select_team == null || et.select_team == "") {

                    if (et.up_or_down == null || et.up_or_down == "") {


                        chk_count++;
                        
                    }

                }
            




            });
           
            if (chk_count==(this.selected_data.length)) {

                return alert("လောင်းမည့်အသင်း ရွေးပါ");
            }

            this.is_save_loading = true;

            // Scroll event listener

            console.log(this.selected_data)
            let html_data = ``;

            html_data+=`    <ul class="list-group" >`;
            this.selected_data.forEach(et => {

                let select_team = "";
                if (et.select_team != null && et.select_team != "") {

                    if (et.select_team == "team_1") {
                        select_team = et.team_1;
                    }
                    else {
                        select_team = et.team_2;
                    }

                    html_data += `
                 
                          <li class="list-group-item p-1" v-for="dat in old_lottery_list" >

                            <div class="row gx-0" style="position: relative;">
                                <div class="col-12 text-start">
                              `+select_team+` - ဘော်ဒီ
                                </div>
                                
                          
                             
                           
                            </div>


                        </li>


                    
                    
                    `;
                }


                let up_or_down = ``;



                if (et.up_or_down != null && et.up_or_down != "") {
                    if (et.up_or_down == "up") {
                        up_or_down = "အပေါ်";
                    }
                    else {
                        up_or_down = "အောက်";
                    }

                    html_data += `
                    

                       <li class="list-group-item p-1" v-for="dat in old_lottery_list" >

                            <div class="row gx-0" style="position: relative;">
                                <div class="col-12 text-start">
                              `+et.team_1+` ပွဲ - `+up_or_down+`
                                </div>
                              
                             
                           
                            </div>


                        </li>


                    
                    
                    `;
                }

           

            });
            html_data+=`    <li class="list-group-item p-1" v-for="dat in old_lottery_list" >

                            <div class="row gx-0" style="position: relative;">
                                <div class="col-12 text-start">
                             Total - `+this.get_amount+`
                                </div>
                                
                          
                             
                           
                            </div>


                        </li>`;
            html_data+=`  </ul>`;
            Swal.fire({
                title: "သေချာပြီလား?",

                html: html_data,
                showDenyButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "လောင်းမည်  ",
                denyButtonText: "မလောင်းတော့ဘူး"
            }).then((result) => {
                if (result.isConfirmed) {


                    axios.post(this.$store.state.api_url + "submit_football_maung_match",
                        {
                            "betting": this.selected_data,
                            "amount": this.get_amount,



                        },
                        headers
                    )
                        .then(response => {
                            if (response.status == 200) {
                                // this.old_lottery_list=response.data;
                                console.log(response.data)

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
                            })

                            Toast.fire({
                                icon: 'success',
                                title:  "အထက်သို့တင်ပြီးပါပြီ",
                            })

                                ;
                                this.get_current_data();
                                this.get_amount=0;



                            }
                            this.is_save_loading = false;

                        })
                        .catch(error => {
                            this.is_save_loading = false;
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
                            })

                            Toast.fire({
                                icon: 'error',
                                title: error.response.data.message ?? "",
                            })

                                ;


                            console.error('Error:', error);
                            //   alert('hello')
                        });



                } else {
                    this.is_save_loading = false;
                }
            });



        },

    },
}
</script>

<style lang="scss" scoped></style>