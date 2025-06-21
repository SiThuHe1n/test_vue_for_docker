<template>
    <div>

        <div class="" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Menu
                  </button> -->
                  <router-link to="/maung" >  <img src="/images/back-button.png" style="width:40px;height:40px;" alt=""> </router-link>
               

            </div>
            
            <div style="right:0;position:absolute;" class="py-2 px-1">

                <!-- <router-link to="/maung" class="btn btn-danger mx-1"> Back </router-link> -->

              
                <button @click="reload_page()" class="btn btn-outline-dark mx-1"> 
                    
                    <svg style="width:15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
                    
                
                
                </button>
                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

            </div>


        </div>



        <div class="row gx-0 mb-1">
            <div class="col-12  p-1">
                <input type="date" v-model="currentDate" @change="get_current_data()"  class="form-control" name="" id="">
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
            <div class="col-12 p-0">
                ဘော်ဒီ/ဂိုးပေါင်းပွဲစဥ်များ
            </div>


            <div class="col-12 p-2 " v-for="(dat, index) in selected_data"   >
            
                <div class="card my-4" style="border-radius:0 !important" >
                    <div  class="card-header  bg-black text-white p-1" style="min-height:100%;">
                        <div class="row">
                            <div class="col-3">
                                <p style="font-size:12px;" class="text-start mb-0"> {{ dat.start_time ?? "" }}
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="text-center mb-0"> {{ dat.league ?? "" }}
                                </p>
                            </div>

                            <div class="col-3">
                                <p style="font-size:12px;text-align:right;" class="text-end mb-0"> {{
                                    dat.end_time ?? ""
                                }} </p>



                            </div>
                        </div>
                    </div>
                    <div class="card-body  py-0"
                        style="padding-left:8px !important;padding-right:8px !important">




                        <div class="row px-1">

                            <div id="team_1_" style="border:1px solid black;min-height:100%;padding:0px;"
                                class=" col-5 text-center">
                                {{ dat.team_1 ?? "" }}
                                <span v-if="dat.team_1_score!=null && dat.team_1_sign!=null" style="color:red"> (
                                    {{ dat.team_1_score }}{{ dat.team_1_sign }}{{ dat.team_1_multiply }} ) </span>


                            </div>
                            <div style="border:1px solid black;min-height:100%;padding:0px;"
                                class=" col-1 text-center">
                                {{ dat.team_1_result ?? "" }}


                            </div>
                            <div style="border:1px solid black;min-height:100%;padding:0px;"
                                class=" col-1 text-center">
                                {{ dat.team_2_result ?? "" }}



                            </div>
                            <div style="border:1px solid black;min-height:100%;padding:0px;"
                                class="text-center col-5">

                                {{ dat.team_2 ?? "" }}
                                <span v-if="dat.team_2_score!=null && dat.team_2_sign!=null" style="color:red"> (
                            {{ dat.team_2_score }}{{ dat.team_2_sign }}{{ dat.team_2_multiply }} ) </span>




                            </div>

                            <div style="border:1px solid black;min-height:100%;padding:0px;"
                                class="text-center col-4">

                                အပေါ်


                            </div>

                            <div style="border:1px solid black;min-height:100%;color:red;" class="text-center col-4 d-flex align-items-center justify-content-center">
                                {{ dat.over_all_score ?? "" }}{{ dat.over_all_sign ?? "" }}{{
                                dat.over_all_multiply??"" }}
                            </div>

                            <div style="border:1px solid black;min-height:100%;padding:0px;"
                                class="text-center col-4">

                                အောက်

                            </div>



                        </div>
                    </div>
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
            is_read_loading: false,
            is_save_loading: false,
            channel: Pusher.subscribe('body_channel'),
            yesterday:"",
            currentDate: "",
            currentMatch: [],
            selected_data: [],
            get_amount: 0,
            message: "hello",


        }
    },


    mounted() {
   
        window.addEventListener("popstate", function(event) {

        router.push("/maung");
});

        this.channel.bind('update_event', (data) => {
            this.get_current_data();
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
        today.setDate(today.getDate() ); // Go back 1 day to get yesterday
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
        const day = String(today.getDate()).padStart(2, '0');
        this.yesterday=`${year}-${month}-${day}`;
        this.currentDate = `${year}-${month}-${day}`;
       


    },
    methods: {

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






            axios.post(this.$store.state.api_url + "old_match_maung",
                {
                    get_date: this.currentDate,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.is_read_loading = false;
                        // this.old_lottery_list=response.data;
                        console.log(response.data)
                        this.currentMatch = response.data;
                        this.selected_data = [];
                        this.selected_data = response.data
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
                                <div class="col-8 text-start">
                              `+select_team+` - body
                                </div>
                                
                                <div class="col-4">
                                   
                                                `+((this.get_amount == "" || this.get_amount == "") ? 0 : this.get_amount)+`
                                
                                
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
                                <div class="col-8 text-start">
                              `+et.team_1+` ပွဲ - `+up_or_down+`
                                </div>
                                <div class="col-4">
                                   `+((this.get_amount == "" || this.get_amount == "") ? 0 : this.get_amount)+`
                                 
                                
                                </div>
                             
                           
                            </div>


                        </li>


                    
                    
                    `;
                }

           

            });
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


                    axios.post(this.$store.state.api_url + "submit_football_body_match",
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