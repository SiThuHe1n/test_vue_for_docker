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
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:5px;">
              {{current_date}}
            </div>
            <div class="col-3 btn btn-primary" style="border:1px solid;border-radius:5px;">
                ပွဲစဥ် - {{ current_match_id }}
            </div>
            <div class="col-5 btn btn-primary" style="border:1px solid;border-radius:5px;">
                0
            </div>

        </div>

        <div class="row gx-0">
            <div class="col-7">
                <div class="row">
                    <div class="col-12">
                        <p>

                            <span style="font-weight:900;color:red;"> {{ count_time }} </span>
                        </p>

                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center"
                    style="height:300px;top:0;position:relative;width:100%;max-width:500px;z-index:1000;position:relative">


                    <div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-4">

                            </div>

                            <div class="col-4 d-flex justify-content-center align-items-center"
                                :style="(dice_number == 1 || is_start == false) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:purple;' : 'width:60px;height:60px;border:1px solid;border-radius:50%;background:white;'">
                                <img src="images/pig_photo.png" alt="" style="width:40px;height:40px;">
                            </div>
                            <div class="col-4">

                            </div>
                        </div>

                        <div class="row d-flex justify-content-center">
                            <div class="col-4 d-flex justify-content-center align-items-center"
                                :style="(dice_number == 4 || is_start == false) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:blue;' : 'width:60px;height:60px;border:1px solid;border-radius:50%;background:white;'">
                            <img src="images/frog_photo.png" alt="" style="width:40px;height:40px;">
                            </div>

                            <div class="col-4 d-flex justify-content-center align-items-center"
                                :style="(dice_number == 5 || is_start == false) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:green;' : 'width:60px;height:60px;border:1px solid;border-radius:50%;background:white;'">
                                <!-- {{ dice_number }} -->
                                <img src="images/99_photo.png" alt="" style="width:40px;height:40px;">
                            </div>
                            <div class="col-4 d-flex justify-content-center align-items-center"
                                :style="(dice_number == 2 || is_start == false) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:orange;' : 'width:60px;height:60px;border:1px solid;border-radius:50%;background:white;'">
                                <img src="images/snake_photo.png" alt="" style="width:40px;height:40px;">
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center">
                            <div class="col-4">

                            </div>

                            <div class="col-4 d-flex justify-content-center align-items-center"
                                :style="(dice_number == 3 || is_start == false) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:red;' : 'width:60px;height:60px;border:1px solid;border-radius:50%;background:white;'">
                                <img src="images/cock_photo.png" alt="" style="width:40px;height:40px;">
                            </div>
                            <div class="col-4">

                            </div>
                        </div>

                    </div>



                </div>
            </div>
            <div class="col-5 d-flex align-items-center">
                <div ref="myTable" class="table-responsive m-1 p-0" style="height:370px;width:100%;">
                    <table class="table table-bordered m-0" style="">
                        <tbody>
                            <tr v-for="om in old_match_result" style="font-size:13.5px;">
                                <td>
                                    {{ om.match_id }}
                                </td>
                                <td>
                                    <span v-if="om.win_result==1"> ၀က် </span>
                                    <span v-if="om.win_result==2"> မြွေ </span>
                                    <span v-if="om.win_result==3"> ကြက် </span>
                                    <span v-if="om.win_result==4"> ဖား </span>
                                    <span v-if="om.win_result==5"> 99 </span>

                                    
                                </td>



                                   
                            </tr>
                        </tbody>




                    </table>
                </div>


            </div>
        </div>



        <div v-if="is_start == false" class="row d-flex justify-content-center gx-0">
            <div class="col btn btn-primary"
                style="border:1px solid;border-radius:15px;max-width:100px;min-width:100px;">
                ငါးရှဥ့်
            </div>
            <div class="col btn btn-primary"
                style="border:1px solid;border-radius:15px;max-width:100px;min-width:100px;">
                ၀က်
            </div>
            <div class="col btn btn-primary"
                style="border:1px solid;border-radius:15px;max-width:100px;min-width:100px;">
                ကြက်
            </div>
            <div class="col btn btn-primary"
                style="border:1px solid;border-radius:15px;max-width:100px;min-width:100px;">
                ဖား
            </div>
            <div class="col btn btn-primary"
                style="border:1px solid;border-radius:15px;max-width:100px;min-width:100px;">
                နဂါး
            </div>
        </div>

        <div v-if="is_start == false" class="row d-flex justify-content-center mx-2 my-3">
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                100
            </div>
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                300
            </div>
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                500
            </div>
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                1000
            </div>
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                2000
            </div>
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                5000
            </div>
        </div>


        <div v-if="is_start == false" class="row d-flex justify-content-center mx-2 my-3">
            <div class="col-8 btn btn-primary" style="border:1px solid;border-radius:5px;">
                ၂၀၀၀၀၀ mmk
            </div>
            <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:15px;">
                လောင်းမည်
            </div>

        </div>

        <!-- 
        <div class="d-flex align-items-center justify-content-center"
            style="top:0;position:relative;width:100%;max-width:500px;z-index:1000;">


            <div :disabled="is_start" @click="select_bet('down')"
                style="width:120px;height:60px;font-size:25px;font-weight:900;"
                :class="(bet == 'down') ? 'd-flex align-items-center justify-content-center btn btn-danger mx-3' : 'd-flex align-items-center justify-content-center btn btn-outline-danger mx-3'">
                Down
            </div>


            <div :disabled="is_start" @click="select_bet('middle')"
                style="width:120px;height:60px;font-size:25px;font-weight:900;"
                :class="(bet == 'middle') ? 'd-flex align-items-center justify-content-center btn btn-danger mx-3' : 'd-flex align-items-center justify-content-center btn btn-outline-danger mx-3'">
                Middle
            </div>


            <div :disabled="is_start" @click="select_bet('up')"
                style="width:120px;height:60px;font-size:25px;font-weight:900;"
                :class="(bet == 'up') ? 'd-flex align-items-center justify-content-center btn btn-danger mx-3' : 'd-flex align-items-center justify-content-center btn btn-outline-danger mx-3'">
                Up
            </div>

        </div>
 -->





    </div>
</template>

<script>
import { start } from '@popperjs/core';
import axios from 'axios'
export default {
    data() {


        return {

            is_start: false,
            count: 0,
            get_amount: 1000,
            is_get_result:false,
            old_match_result:[],
            dice_number: Math.floor(Math.random() * (12 - 1 + 1)) + 1,
            dice_time: 3,
            bet: "",
            is_loaded: false,
            current_match_id:"",
            count_time: "",
            count_duration:60,
            end_time_duation:30,
            channel: Pusher.subscribe('auto_starting_new_game_state'),
            channeltwo: Pusher.subscribe('getting_game_result'),
            interval: null,
            current_date:"",
        }
    },


    mounted() {

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        this.current_date=formattedDate;

        this.get_server_state();
        // this.count_function();

        // this.scrollToLastRow();

        this.channeltwo.bind('get_data_state', (data) => {
            console.log('receive_get_data');

            this.get_win_result();
        });

        this.channel.bind('new_game_start', (data) => {
            console.log('receive_new_game_start');
            this.get_server_state();
        });

     



        
        // this.dice_number= Math.floor(Math.random() * (12 - 1 + 1)) + 1;;



        // let current_interval=setInterval(() => {

        //     clearInterval(current_interval)
        //     this.dice_number=Math.floor(Math.random() * 10000) + 1;

        // }, this.dice_number);



    },
    methods: {
        timeToSeconds(time) {
            let [hours, minutes, seconds] = time.split(':').map(Number);
            return (hours * 3600) + (minutes * 60) + seconds;
        },

        get_server_state() {
console.log('hello_starting');
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }


            axios.post(this.$store.state.api_url + "get_game_state",
                {
                    //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        console.log(response.data)
                        if(response.data.end_time!=null)
                    {
                        let date = new Date();
                        this.get_old_match_result();
                        // Get hours, minutes, and seconds
                        let hours = date.getHours().toString().padStart(2, '0');
                        let minutes = date.getMinutes().toString().padStart(2, '0');
                        let seconds = date.getSeconds().toString().padStart(2, '0');

                        // Format the time as H:i:s
                        let time = `${hours}:${minutes}:${seconds}`;

                        let end_time = response.data.end_time;
                        console.log('hello_starting_2');

                        console.log(time)
                        this.current_match_id=response.data.match_id
                        this.count_duration=this.timeToSeconds(end_time)-this.timeToSeconds(time);
                        // console.log(this.count_duration)
                        this.end_time_duation=response.data.end_time_duration
                        this.count_function();

                    }
                    else
                    {
                        this.get_win_result();
                    }
                       

                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },

        get_old_match_result()
        {
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }


            axios.post(this.$store.state.api_url + "get_old_match_result",
                {
                    //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                         this.old_match_result=response.data
             
                         console.log(response.data)
                        setTimeout(() => {
                    this.scrollToLastRow();
                            
                        }, 100);
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },


        get_win_result()
        {
            console.log('start_now()')
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }


            axios.post(this.$store.state.api_url + "get_win_result",
                {
                    //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                       
                        this.dice_number=response.data
                        setTimeout(() => {
                            this.is_get_result=true;
                        }, 100);
                     //    this.old_match_result=response.data
                         console.log("getting_result")
                         console.log(this.dice_number)
                         console.log(response.data)

                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },


        count_function() {
            console.log("starting");
            let countdownDuration = this.count_duration;
            let end_time_duation = this.end_time_duation;
            if (countdownDuration == this.count_duration) {
                this.is_start = false;
            }

            const countdown = setInterval(() => {
                // Decrease the countdown
                countdownDuration--;

                if (countdownDuration >= end_time_duation) {
                    const minutes = Math.floor((countdownDuration - end_time_duation) / 60);
                    const seconds = (countdownDuration - end_time_duation) % 60;

                    this.count_time = `${minutes}m ${seconds}s`;
                }
                // Display the countdown in minutes and seconds








                if (countdownDuration <= end_time_duation && this.is_start==false) {
                    this.dice_start();
                }

                // Stop the countdown when it reaches 0
                if (countdownDuration <= 0) {

                    this.get_win_result();
                    clearInterval(countdown);
                    
                    console.log('Time is up!');
                }

            }, 1000);
        },

        scrollToLastRow() {
            const table = this.$refs.myTable;
            if (table) {
                // Scroll to the last row
                table.scrollTop = table.scrollHeight;
            }

        },
        select_bet(bet) {
            this.bet = bet
            this.dice_start()
        },

        dice_start() {
            this.myFunction();

            // if (this.is_start != true) {
            //     if (this.is_loaded == true) {
            //         window.location.reload();
            //     }
            //     if (this.get_amount != null && this.get_amount != "" && this.get_amount != 0 && this.bet != "" && this.bet != null) {
            //         this.is_loaded = true;


            //         this.is_start = true;
            //         this.dice_time = 3;


            //     }

            // }




        },
        myFunction() {
            this.is_start = true;
            var start_now = setInterval(() => {
         
                // console.log(this.dice_number);


                if(this.is_get_result==true)
                {
             
                    console.log("stop");
                    // this.dice_number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                    // const minutes = Math.floor((this.end_time_duation) / 60);
                    // const seconds = (this.end_time_duation) % 60;

                    // this.count_time = `${minutes}m ${seconds}s`;
                    this.is_get_result=false
                    clearInterval(start_now)
                }
                else
                {
                    if (this.dice_number >= 4) {
                    this.dice_number = 1;
                } else {
                    this.dice_number += 1;
                }

                }
            }, 100);

            // setTimeout(() => {
              
            //     // setTimeout(() => {
            //     //     this.count_function();
            //     // }, this.end_time_duation*1000);
            //     // this.is_start=false;
            // }, this.end_time_duation*1000);






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



            if (this.dice_number < 7 && this.bet == "down") {

                setTimeout(() => {
                    return Toast.fire({
                        icon: 'success',
                        title: "you win",
                    })

                }, 100);


            }
            else if (this.dice_number == 7 && this.bet == "middle") {
                setTimeout(() => {
                    return Toast.fire({
                        icon: 'success',
                        title: "you win 3X",
                    })

                }, 100);
            }
            else if (this.dice_number > 7 && this.bet == "up") {
                setTimeout(() => {
                    return Toast.fire({
                        icon: 'success',
                        title: "you win",
                    })

                }, 100);

            }
            else if (this.bet != "") {
                setTimeout(() => {
                    return Toast.fire({
                        icon: 'error',
                        title: "you lose",
                    })

                }, 100);
            }

        },



    },
}
</script>

<style lang="scss" scoped>
.btn {
    background: rgba(128, 0, 128, 0.456);

}
</style>