<template>
    <div>












        <div class="cal_height" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                <button class="btn btn-warning" type="button">
                    <img src="../../../assets/dots.png" style="height:20px;object-fit:cover" alt="">

                </button>

            </div>

            <div style="right:0;position:absolute;" class="py-2 px-1">

                <button
                    :style="(get_rate == 80) ? 'color:white;border:1px solid red;background:red;border-radius:0%;width:30px;display:inline-block !important;' : 'border:1px solid red;background:white;border-radius:0%;width:30px;display:inline-block !important'"
                    class="d-flex justify-content-center align-items-center   "> 80 </button>
                <button
                    :style="(get_rate == 81) ? 'color:white;border:1px solid red;background:red;border-radius:0%;width:30px;display:inline-block !important;' : 'border:1px solid red;background:white;border-radius:0%;width:30px;display:inline-block !important'"
                    class="d-flex justify-content-center align-items-center   "> 81 </button>
                <button
                    :style="(get_rate == 82) ? 'color:white;border:1px solid red;background:red;border-radius:0%;width:30px;display:inline-block !important;' : 'border:1px solid red;background:white;border-radius:0%;width:30px;display:inline-block !important'"
                    class="d-flex justify-content-center align-items-center   "> 82 </button>
                <button
                    :style="(get_rate == 83) ? 'color:white;border:1px solid red;background:red;border-radius:0%;width:30px;display:inline-block !important;' : 'border:1px solid red;background:white;border-radius:0%;width:30px;display:inline-block !important'"
                    class="d-flex justify-content-center align-items-center   "> 83 </button>
                <button
                    :style="(get_rate == 84) ? 'color:white;border:1px solid red;background:red;border-radius:0%;width:30px;display:inline-block !important;' : 'border:1px solid red;background:white;border-radius:0%;width:30px;display:inline-block !important'"
                    class="d-flex justify-content-center align-items-center   "> 84 </button>
                <button
                    :style="(get_rate == 85) ? 'color:white;border:1px solid red;background:red;border-radius:0%;width:30px;display:inline-block !important;' : 'border:1px solid red;background:white;border-radius:0%;width:30px;display:inline-block !important'"
                    class="d-flex justify-content-center align-items-center  me-1 "> 85 </button>





                <router-link to="/voucher_am_section_1" class="btn btn-warning mx-1"> V</router-link>
                <!-- <router-link to="/lottery_2d" class="btn btn-warning mx-1"> N </router-link> -->

                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->
                <button @click="reload_page()" class="btn btn-info mx-1">

                    <svg style="width:15px;" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                    </svg>



                </button>
            </div>


        </div>

        <div v-if="is_save_loading">
            <div style="top:50%;left:29%;position:absolute;">
                အပေါ်ဒိုင်ကိုတင်နေပါသည်
            </div>

            <div class="loader-container">

                <div class="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>


            </div>
        </div>




        <div v-if="!is_save_loading" class="row gx-0 mb-3 cal_height">
            <div class="col-4  p-1">
                <input type="date" @change="on_change_date()" v-model="get_date" disabled class="form-control" name=""
                    id="">
            </div>
            <div class="col-4  p-1">
                <button class="btn btn-info mx-1 form-control"> {{ current_am_pm_type.find(item => item.type ===
                    "am_section_1").time
                    }} </button>

            </div>


            <div class="col-4 p-1">
                <button class="bg-primary text-white form-control"> {{ main_balance }} </button>
            </div>
        </div>
        <div v-if="!is_save_loading" style="">


            <div id="dynamic_div" class="my-3" style="height:20vh;overflow:scroll;margin-bottom:400px !important;">
                <table class="table table-borderless table-white">
                    <!-- <thead>
                    <tr>
                        <td>
                            No
                        </td>
                        <td>
                            format
                        </td>
                        <td>
                            amount
                        </td>
                        <td>
                            action
                        </td>
                    </tr>
                </thead> -->

                    <tbody id="list_data">
                        <tr v-for="(a, index) in submit_data" style="height:15px;">
                            <td
                                style="height:15px;width:230px;padding:0px;margin:0px;text-align:start;padding-left:10px;">
                                {{ a.format }}{{ a.amount }} </td>

                            <td style="height:15px;padding:0px;margin:0px;"> {{ a.total_amt }} </td>
                            <td style="height:15px;width:50px;padding:0px;margin:0px;">


                                <div @click="remove_list(index)" style="width:12px;">
                                    <svg style="font-size:20px;" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                                    </svg>
                                </div>
                                <!-- <button class="btn btn-danger my-1 d-flex justify-content-center align-items-center" style="height:35px;height:35px;font-size:15px;"> -->

                                <!-- </button> -->

                            </td>

                        </tr>
                    </tbody>

                </table>
            </div>





            <div class="cal_height row gx-0   bg-white shadow rounded " v-if="check_end_time()"
                style="bottom:1%;position:fixed;width:100%;max-width:500px;z-index:1000;">
                <div class="col-12">

                    <div class="my-1 row">
                        <div class="col-6">
                            <button class="btn btn-info form-control"> Total - {{ calculate_total_price() }} </button>
                        </div>

                        <div class="col-6">
                            <button class="btn btn-primary form-control" id="save_btn" @click="save_lottery()"> တင်မည်
                            </button>
                        </div>
                    </div>



                    <div class="row d-flex justify-content-center gx-0">
                        <!-- <div class="col-12 my-1">
                            <input type="text" class="form-control" v-model="current_input_data" inputmode="none"
                                placeholder="00-0000">
                        </div> -->

                        <div class="col p-0 mx-1 " style="max-width:102px;">
                            <div v-for="n in 10" class="row gx-0" style="width:102px;">
                                <div class="col" style="padding-right:1px;max-width:50px;">
                                    <button :disabled="check_disable_format('number_1')"
                                        @click="input_data(n - 1, 'num_1')"
                                        class="d-flex align-items-center justify-content-center"
                                        :style="(current_select_data['num_1'].includes((n - 1))) ? 'width:50px;height:35px;border:1px solid red;color:red;background:yellow;' : 'width:50px;height:35px;border:1px solid red;color:black;background:white'">
                                        {{ n - 1 }}
                                    </button>
                                </div>

                                <div class="col" style="padding-right:1px;max-width:50px;">
                                    <button :disabled="check_disable_format('number_2')"
                                        @click="input_data(n - 1, 'num_2')"
                                        class="d-flex align-items-center justify-content-center"
                                        :style="(current_select_data['num_2'].includes((n - 1))) ? 'width:50px;height:35px;border:1px solid red;color:red;background:yellow;' : 'width:50px;height:35px;border:1px solid red;color:black;background:white'">
                                        {{ n - 1 }}
                                    </button>
                                </div>

                            </div>


                        </div>

                        <div class="col p-0 mx-1 " style="overflow:scroll;height:352px;max-width:90px;">
                            <div v-for="n in formula_list" class="row gx-0" style="">
                                <div class="col-12" style="padding-right:1px;">
                                    <button :disabled="check_disable_format(n.format)"
                                        @click="input_data(n.format, 'format')"
                                        class="d-flex align-items-center justify-content-center"
                                        :style="(current_select_data['format'] === (n.format).toString()) ? 'font-size:12px;width:100%;height:35px;border:1px solid red;color:red;background:yellow;' : 'font-size:12px;width:100%;height:35px;border:1px solid red;color:black;background:white'">
                                        {{ n.name }}
                                    </button>
                                </div>


                            </div>


                        </div>

                        <div class="col p-0 mx-1" style="overflow:scroll;height:352px;max-width:90px;">
                            <div v-for="n in 10" class="row gx-0" style="">
                                <div class="col-12" style="padding-right:1px;">
                                    <button @click="input_data(amount_array[n - 1], 'amount')"
                                        class="d-flex align-items-center justify-content-center"
                                        :style="(current_select_data['amount'] === (amount_array[n - 1]).toString()) ? 'width:100%;height:35px;border:1px solid red;color:red;background:yellow;' : 'width:100%;height:35px;border:1px solid red;color:black;background:white'">
                                        {{ amount_array[n - 1] }}
                                    </button>
                                </div>

                                <!-- <div class="col-4" style="padding:1px;">
                                    <div @click="input_data(200*n*n, 'number')" class=""
                                        style="width:100%;height:35px;border:1px solid red;border-radius:10px;">
                                        {{ 200*n*n }}
                                    </div>
                                </div> -->
                                <!-- <div class="col-4" style="padding:1px;">
                                    <div @click="input_data(300*n*n, 'number')" class=""
                                        style="width:100%;height:35px;border:1px solid red;border-radius:10px;">
                                        {{ 300*n*n }}
                                    </div>
                                </div> -->


                            </div>


                        </div>

                        <div class="col p-0 " style="overflow:scroll;height:352px;">
                            <div v-for="n in 2" class="row gx-0" style="">
                                <div class="col-12" style="padding:1px;">
                                    <button v-if="n == 1" @click="input_data(('clear'), 'action')"
                                        class="d-flex align-items-center justify-content-center"
                                        style="width:100%;height:102px;border:1px solid red;background:white;">
                                        <img src="/images/cross.png" style="height:20px;object-fit:cover" alt="">

                                    </button>

                                    <button v-if="n == 2" @click="input_data(('save'), 'action')"
                                        class="d-flex align-items-center justify-content-center"
                                        style="width:100%;height:242px;border:1px solid red;background:white;">
                                        <img src="/images/checked.png" style="height:20px;object-fit:cover" alt="">

                                    </button>
                                </div>



                            </div>


                        </div>

                    </div>
                </div>

                <div class="col-12">

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

            current_am_pm_type: [
                {
                    type: "am_section_1",
                    time: "9:30 AM",
                    end_hour: 9,
                    end_minute: 20,

                },
                {
                    type: "am_section_2",
                    time: "12:00 AM",
                    end_hour: 11,
                    end_minute: 0,

                },
                {
                    type: "pm_section_1",
                    time: "2:00 PM",
                    end_hour: 13,
                    end_minute: 55,

                },
                {
                    type: "pm_section_2",
                    time: "4:30 PM",
                    end_hour: 15,
                    end_minute: 0,

                },
            ],




            main_balance: 0,
            submit_data: [],
            get_rate: 80,
            current_select_data: {
                num_1: [],
                num_2: [],
                format: null,
                amount: null,
            },

            formula_list: [
                {
                    name: "=",
                    format: "=",

                },

                {
                    name: "R",
                    format: "R",

                },

                {
                    name: "ပတ်",
                    format: "P",

                },


                {
                    name: "အပူး",
                    format: "A",

                },

                {
                    name: "ပါ၀ါ",
                    format: "W",

                },
                {
                    name: "နက္ခ",
                    format: "N",

                },
                {
                    name: "ညီကို",
                    format: "X",

                },

                {
                    name: "ခွေ",
                    format: "K",

                },
                {
                    name: "ခွေအပူးပါ",
                    format: "KK",

                },

                {
                    name: "ထိပ်/နောက်",
                    format: "F",

                },

                {
                    name: "စုံစုံ",
                    format: "S",

                },

                {
                    name: "မမ",
                    format: "M",

                },

                {
                    name: "မစုံ",
                    format: "MS",

                },

                {
                    name: "စုံမ",
                    format: "SM",

                },


                {
                    name: "ကပ်",
                    format: "C",

                },


            ],
            is_save_loading: false,
            is_save: true,
            is_cancle: true,
            is_paste: false,
            amount_type: 1,
            get_date: "",
            get_am_pm: "",
            submit_am_pm: "am_section_1",

            current_input_data: "",
            amount_array: [
                200, 250, 300, 500, 1000, 1500, 2500, 3000, 5000, 10000
            ],

            lottery_list: [],
            detail_lottery_list: [],
            old_lottery_list: [],
            is_detail_data: false,




        }
    },


    mounted() {

        const headers = {
            headers:
            {
                Authorization: `Bearer ` + this.$store.state.authToken,
                Accept: 'application/json',
            }

        }



        axios.post(this.$store.state.api_url + "get_section_2d_end_time", {


            "am_pm": "am_section_1",


        },
            headers
        )
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    this.current_am_pm_type.forEach(et => {
                        if (et.type == "am_section_1") {
                            et.end_hour = response.data.end_hour;
                            et.end_minute = response.data.end_minute;
                        }
                    });

                    let get_rate_int = setInterval(() => {
                        const now = new Date();


                        const targetTime = new Date();
                        let chk = this.current_am_pm_type.find(item => item.type === "am_section_1");
                        targetTime.setHours(chk.end_hour, chk.end_minute, 0, 0); // Set to 9:30 AM (hours, minutes, seconds, milliseconds)

                        // Compare the current time with the target time
                        if (now > targetTime) {

                            const headers = {
                                headers:
                                {
                                    Authorization: `Bearer ` + this.$store.state.authToken,
                                    Accept: 'application/json',
                                }

                            }

                            console.log(headers);

                            axios.post(this.$store.state.api_url + "get_section_2d_rate", {


                                "am_pm": "am_section_1",


                            },
                                headers
                            )
                                .then(response => {
                                    if (response.status == 200) {
                                        this.get_rate = response.data;


                                    }

                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    alert(error)
                                    //   alert('hello')
                                });

                            clearInterval(get_rate_int)

                            console.log("b");
                        } else {

                            this.get_rate_function();

                        }

                    }, 350);

                }

            })
            .catch(error => {
                console.error('Error:', error);
                alert(error)
                //   alert('hello')
            });





        this.cal_height();

        this.body_check_balance();
        window.addEventListener("popstate", function (event) {
            router.push("/main");

        });

        window.handleClipboardData = this.handleClipboardData;



        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        this.get_date = `${year}-${month}-${day}`;


        const currentTime = new Date();
        let hours = currentTime.getHours();
        const ampm = hours >= 12 ? 'pm' : 'am';
        this.get_am_pm = ampm


        this.get_current_old_data();

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

        get_rate_function() {

            if (this.get_rate == 85) {
                this.get_rate = 80;
            }
            else {
                this.get_rate++;
            }

        },
        check_end_time() {
            // Get the current time
            const now = new Date();

            // Create a target time (9:30)
            const targetTime = new Date();
            let chk = this.current_am_pm_type.find(item => item.type === "am_section_1");
            targetTime.setHours(chk.end_hour, chk.end_minute, 0, 0); // Set to 9:30 AM (hours, minutes, seconds, milliseconds)

            // Compare the current time with the target time
            if (now > targetTime) {
                return false;
            } else {
                return true;
            }

        },
        remove_list(index) {
            this.submit_data.splice(index, 1);
        },
        body_check_balance() {


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
                        this.main_balance = response.data
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

        },

        calculate_total_price() {
            let total = 0;
            this.submit_data.forEach(et => {
                total += parseFloat(et.total_amt);
            });

            return total;

        },
        check_disable_format(format) {
            let num_arr = ["S", "M", "MS", "SM", "X", "N", "A", "W"]
            let num_2_arr = ["P", "K", "KK"]
            let num_3_arr = ["F"]

            if ((this.current_select_data.num_1.length != 0 || this.current_select_data.num_1.length != 0) && num_arr.includes(format)) {
                console.log(num_arr.includes(format))
                if (num_arr.includes(this.current_select_data.format)) {
                    this.current_select_data.format = null;
                }
                return true;
            }
            else if (num_arr.includes(this.current_select_data.format) && format == "number_1") {
                //  this.current_select_data.num_1 = []
                // this.current_select_data.num_2 = null
                return true;
            }
            else if (num_arr.includes(this.current_select_data.format) && format == "number_2") {
                // this.current_select_data.num_1 = null
                //.current_select_data.num_2 = []
                return true;
            }
            else if (num_2_arr.includes(this.current_select_data.format) && format == "number_2") {
                // this.current_select_data.num_1 = null
                //   this.current_select_data.num_2 = []
                return true;
            }
            else if (num_3_arr.includes(this.current_select_data.format) && this.current_select_data.num_1.length != 0 && format == "number_2") {
                this.current_select_data.num_2.length = 0
                //   this.current_select_data.num_2 = []
                return true;
            }

            else if (num_3_arr.includes(this.current_select_data.format) && this.current_select_data.num_2.length != 0 && format == "number_1") {
                this.current_select_data.num_1.length = 0

                //   this.current_select_data.num_2 = []
                return true;
            }

            else {

                return false;
            }

        },
        check_number(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        input_data(data, data2 = null) {
            console.log()
            if (data2 == "num_1") {

                if (this.current_select_data.format == "K" || this.current_select_data.format == "KK") {

                    if (this.current_select_data.num_1.length == 0) {
                        this.current_select_data.num_1.push(data);

                    }
                    else {
                        if (this.current_select_data.num_1.includes(data)) {

                            this.current_select_data.num_1 = this.current_select_data.num_1.filter(num => num !== data);
                        }
                        else {
                            this.current_select_data.num_1.push(data);
                        }

                    }



                }
                else {
                    if (this.current_select_data.num_1.length == 0) {
                        this.current_select_data.num_1.push(data);

                    }
                    else {
                        if (this.current_select_data.num_1.includes(data)) {

                            this.current_select_data.num_1 = this.current_select_data.num_1.filter(num => num !== data);
                        }
                        else {
                            this.current_select_data.num_1 = [];
                            this.current_select_data.num_1.push(data);
                        }

                    }
                }


                console.log(this.current_select_data)
            }

            if (data2 == "num_2") {
                if (this.current_select_data.format == "K" || this.current_select_data.format == "KK") {

                    if (this.current_select_data.num_2.length == 0) {
                        this.current_select_data.num_2.push(data);

                    }
                    else {
                        if (this.current_select_data.num_2.includes(data)) {

                            this.current_select_data.num_2 = this.current_select_data.num_2.filter(num => num !== data);
                        }
                        else {
                            this.current_select_data.num_2.push(data);
                        }

                    }



                }
                else {
                    if (this.current_select_data.num_2.length == 0) {
                        this.current_select_data.num_2.push(data);

                    }
                    else {
                        if (this.current_select_data.num_2.includes(data)) {

                            this.current_select_data.num_2 = this.current_select_data.num_2.filter(num => num !== data);
                        }
                        else {
                            this.current_select_data.num_2 = [];
                            this.current_select_data.num_2.push(data);
                        }

                    }
                }



                console.log(this.current_select_data)

            }

            if (data2 == "format") {
                if (data == this.current_select_data['format']) {
                    this.current_select_data['format'] = null
                }
                else {
                    this.current_select_data['format'] = data.toString()

                }

            }

            if (data2 == "amount") {
                if (data == this.current_select_data['amount']) {
                    this.current_select_data['amount'] = null
                }
                else {
                    this.current_select_data['amount'] = data.toString()

                }
            }

            if (data == "clear") {
                this.current_select_data = {
                    "num_1": [],
                    "num_2": [],
                    "format": null,
                    "amount": null,


                }
                // alert('hello');
            }

            if (data == "save") {
                if (this.current_select_data.amount == null) {
                    return alert("There is no amount!!");
                }
                let number_list = [];
                let format = "";
                let amount = "";
                let format_type = "";
                if (this.current_select_data.format == "=") {
                    console.log(this.current_select_data)
                    let number = this.current_select_data.num_1[0].toString() + this.current_select_data.num_2[0].toString();
                    number_list.push({ "number": number, "amount": this.current_select_data.amount });

                    format = number;

                    amount = this.current_select_data.amount;
                    format_type = number + this.current_select_data.amount;

                }

                else if (this.current_select_data.format == "R") {
                    if (this.current_select_data.num_1[0].toString() == this.current_select_data.num_2[0].toString()) {
                        return alert("error");
                    }
                    console.log(this.current_select_data)
                    let number1 = this.current_select_data.num_1[0].toString() + this.current_select_data.num_2[0].toString();
                    let number2 = this.current_select_data.num_2[0].toString() + this.current_select_data.num_1[0].toString();

                    number_list.push({ "number": number1, "amount": this.current_select_data.amount });
                    number_list.push({ "number": number2, "amount": this.current_select_data.amount });

                    format = number1;
                    amount = "R" + this.current_select_data.amount;
                    format_type = number1 + "R" + this.current_select_data.amount;

                }
                else if (this.current_select_data.format == "A") {
                    console.log(this.current_select_data)
                    let n_list = ["11", "22", "33", "44", "55", "66", "77", "88", "99", "00"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "အပူး";
                    amount = this.current_select_data.amount;
                    format_type = "A" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "W") {
                    console.log(this.current_select_data)
                    let n_list = ["05", "16", "27", "38", "49", "50", "61", "72", "83", "94"]

                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "ပါဝါ";
                    amount = this.current_select_data.amount;
                    format_type = "W" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "N") {
                    console.log(this.current_select_data)
                    let n_list = ["07", "18", "24", "35", "42", "53", "69", "70", "81", "96"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "နက္ခတ်";
                    amount = this.current_select_data.amount;
                    format_type = "N" + this.current_select_data.amount;
                }
                else if (this.current_select_data.format == "X") {
                    console.log(this.current_select_data)
                    let n_list = ["01", "09", "10", "12", "21", "23", "32", "34", "43", "45", "54", "56", "65", "67", "76", "78", "87", "89", "90", "98"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "ညီကို";
                    amount = this.current_select_data.amount;
                    format_type = "X" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "S") {
                    console.log(this.current_select_data)
                    let n_list = ["00", "02", "04", "06", "08", "20", "22", "24", "26", "28", "40", "42", "44", "46", "48", "60", "62", "64", "66", "68", "80", "82", "84", "86", "88"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "စုံစုံ";
                    amount = this.current_select_data.amount;
                    format_type = "S" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "M") {
                    console.log(this.current_select_data)
                    let n_list = ["11", "13", "15", "17", "19", "31", "33", "35", "37", "39", "51", "53", "55", "57", "59", "71", "73", "75", "77", "79", "91", "93", "95", "97", "99"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "မမ";
                    amount = this.current_select_data.amount;
                    format_type = "M" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "SM") {
                    console.log(this.current_select_data)
                    let n_list = ["01", "03", "05", "07", "09", "21", "23", "25", "27", "29", "41", "43", "45", "47", "49", "61", "63", "65", "67", "69", "81", "83", "85", "87", "89"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "စုံမ";
                    amount = this.current_select_data.amount;
                    format_type = "SM" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "MS") {
                    console.log(this.current_select_data)
                    let n_list =
                        ["10", "12", "14", "16", "18", "30", "32", "34", "36", "38", "50", "52", "54", "56", "58", "70", "72", "74", "76", "78", "90", "92", "94", "96", "98"]
                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = "မစုဲ";
                    amount = this.current_select_data.amount;
                    format_type = "MS" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "P") {
                    const numbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));

                    // The digit to check for
                    if (this.current_select_data.num_1.length == 0) {

                        return alert("error");
                    }

                    // Filter numbers containing the digit
                    const n_list = numbers.filter(num => num.includes(this.current_select_data.num_1[0]));


                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    format = this.current_select_data.num_1[0] + " ပတ်";
                    amount = this.current_select_data.amount;
                    format_type = this.current_select_data.num_1[0] + "P" + this.current_select_data.amount;
                }

                else if (this.current_select_data.format == "K") {

                    if (this.current_select_data.num_1.length <= 2) {

                        return alert("error");
                    }


                    let n_list = [];

                    for (let i = 0; i < this.current_select_data.num_1.length; i++) {
                        for (let j = 0; j < this.current_select_data.num_1.length; j++) {
                            if (i !== j) { // Ensure two different positions
                                n_list.push(this.current_select_data.num_1[i].toString() + this.current_select_data.num_1[j].toString());
                            }
                        }
                    }


                    // Filter numbers containing the digit


                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    const ascending = this.current_select_data.num_1.sort((a, b) => a - b);

                    format = ascending.join("") + " ခွေ";
                    amount = this.current_select_data.amount;
                    format_type = ascending.join("") + "K" + this.current_select_data.amount;

                }

                else if (this.current_select_data.format == "KK") {

                    if (this.current_select_data.num_1.length <= 2) {

                        return alert("error");
                    }


                    let n_list = [];

                    for (let i = 0; i < this.current_select_data.num_1.length; i++) {
                        for (let j = 0; j < this.current_select_data.num_1.length; j++) {

                            n_list.push(this.current_select_data.num_1[i].toString() + this.current_select_data.num_1[j].toString());

                        }
                    }


                    // Filter numbers containing the digit


                    n_list.forEach(el => {
                        number_list.push({ "number": el, "amount": this.current_select_data.amount });

                    });
                    const ascending = this.current_select_data.num_1.sort((a, b) => a - b);

                    format = ascending.join("") + " ခွေအပူးပါ";
                    amount = this.current_select_data.amount;
                    format_type = ascending.join("") + "KK" + this.current_select_data.amount;

                }

                else if (this.current_select_data.format == "F") {
                    let n_list = [];

                    if (this.current_select_data.num_1.length != 0) {
                        for (let a = 0; a <= 9; a++) {
                            n_list.push(this.current_select_data.num_1[0].toString() + a.toString());

                        }
                        n_list.forEach(el => {
                            number_list.push({ "number": el, "amount": this.current_select_data.amount });

                        });

                        format = this.current_select_data.num_1[0] + "ထိပ်";
                        amount = this.current_select_data.amount;
                        format_type = this.current_select_data.num_1[0] + "F" + this.current_select_data.amount;

                    }
                    else if (this.current_select_data.num_2.length != 0) {
                        for (let a = 0; a <= 9; a++) {
                            n_list.push(a.toString() + this.current_select_data.num_2[0].toString());

                        }
                        n_list.forEach(el => {
                            number_list.push({ "number": el, "amount": this.current_select_data.amount });

                        });

                        format = this.current_select_data.num_2[0] + "နောက်";
                        amount = this.current_select_data.amount;
                        format_type = "F" + this.current_select_data.num_2[0] + this.current_select_data.amount;

                    }
                }
                else {
                    return alert("something Wring!!");
                }




                this.submit_data.push({
                    "format": format,
                    "current_format": format_type,
                    "amount": amount,
                    "total_amt": this.calculate_price(number_list),
                    "number_list": number_list,




                });
                console.log(this.submit_data);
                this.current_select_data = {
                    "num_1": [],
                    "num_2": [],
                    "format": null,
                    "amount": null,


                }


                setTimeout(() => {
                    const messagesContainer = document.getElementById('list_data');

                    const lastMessage = messagesContainer.lastElementChild;
                    lastMessage.scrollIntoView();
                }, 10);

            }




        },
        cal_height() {
            let height = 0;
            const div = document.getElementsByClassName("cal_height");
            for (let a = 0; a < div.length; a++) {
                height += div[a].offsetHeight;
            }



            const screenHeight = window.innerHeight; // Viewport height

            setTimeout(() => {
                document.getElementById("dynamic_div").style.height = (parseFloat(screenHeight) - parseFloat(height) - 70) + "px";

            }, 10);
            console.log(document.getElementById("dynamic_div").style.height)
        },
        calculate_price(data) {
            let total_amt = 0;
            data.forEach(et => {
                total_amt += parseFloat(et.amount)


            });
            return total_amt;
        },

        reload_page() {
            location.reload();
        },
        get_total_amt() {

            let tot_amt = 0;
            if (this.old_lottery_list.lenght != 0) {
                this.old_lottery_list.forEach(er => {
                    tot_amt += parseFloat(er.total_amt);

                });
            }
            return tot_amt;
        },
        on_change_date() {
            this.get_current_old_data()
        },

        show_detail_data(data) {
            //    this.detail_lottery_list.push({"key":"13","amt":"100"});
            console.log(data.lottery_detail)
            this.is_detail_data = true;

            data.lottery_detail.forEach(ele => {
                this.detail_lottery_list.push({ "key": ele.number, "amt": ele.amount.toString() });
                console.log(this.detail_lottery_list)

            })

        },
        get_current_old_data() {


        },

        save_lottery() {


            this.is_save = true;
            this.is_save_loading = true;


            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;

            const now2 = new Date();
            const year = now.getFullYear();
            const month = String(now2.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const day = String(now2.getDate()).padStart(2, '0');
            const currentDate = `${year}-${month}-${day}`;

            let total_amt = 0;
            this.lottery_list.forEach(el => {
                total_amt += parseFloat(el.amt);
            });

            console.log(this.$store.state.authToken);

            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }
            };
            console.log(headers);

            axios.post(this.$store.state.api_url + "submit_2d_section_by_client",
                {

                    "time": currentTime,
                    "date": currentDate,
                    "submit_data": this.submit_data,
                    "total": 0,
                    "am_pm": this.submit_am_pm,

                }, headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.body_check_balance();
                        setTimeout(() => {
                            // this.is_save=false;
                            this.is_save_loading = false;
                            this.submit_data = [];
                        }, 1000);


                        // this.$store.state.is_auth=true;
                        // this.$store.state.authToken=response.data.token;
                        // localStorage.setItem('authToken', response.data.token);

                        // this.$router.push({ name: 'home' });
                        this.get_current_old_data();
                        console.log(this.old_lottery_list)
                        this.lottery_list = [];



                        if (this.lottery_list.length == 0) {
                            this.is_paste = false;
                            this.is_save = true;
                            this.is_cancle = true;
                        }
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    alert(error)
                });




            let btn_save = document.getElementById("save_btn");
            btn_save.disabled = true;

            setInterval(

                // Disable the button
                btn_save.disabled = false
                , 2000);


        },
        cancle_lottery() {
            this.is_detail_data = false;
            this.detail_lottery_list = [];

            this.lottery_list = [];
            this.is_paste = false;
            this.is_save = true;
            this.is_cancle = true;
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
            return num.toString().padStart(2, '0');
        },

        getAmountByNumber(number, data) {
            // console.log(number)
            let cur_amt = 0;
            data.forEach(et => {
                if (et.key.toString() == number.toString()) {
                    cur_amt += parseFloat(et.amt);
                }
            });

            return cur_amt ? cur_amt : '0'; // Return amount if found, otherwise empty string
        },

        handleClipboardData(data1) {
            try {


                const text = data1;
                // console.log(text);

                const inputData = text.trim().split('\n');
                console.log(inputData)


                let check_error_data = false;
                inputData.forEach((line, index) => {


                    console.log(index)
                    console.log(line.split("/")[0])

                    console.log(line.split("/")[0].split("").length)
                    if ((isNaN(parseFloat(line.split('/')[0]))
                        || !isFinite(line.split('/')[0])
                        || isNaN(parseFloat(line.split('/')[1]))
                        || !isFinite(line.split('/')[1])
                        || line.split('/')[0].split("").length != 2)
                        && index >= 3
                    ) {
                        return check_error_data = true;

                    }
                    else if (inputData.length <= 3) {
                        return check_error_data = true;

                    }



                });
                if (check_error_data == true) {
                    return alert("format မှားနေပါသည်");
                }
                alert(data1)

                this.lottery_list = inputData.map((line, index) => {



                    if (line.split('/').length == 3) {
                        if (!isNaN(parseFloat(line.split('/')[0]))
                            && isFinite(line.split('/')[0])
                            && !isNaN(parseFloat(line.split('/')[1]))
                            && isFinite(line.split('/')[1])
                            && line.split('/')[0].split("").length == 2
                            && index >= 3

                        ) {


                            //  return   [];
                            const [key, amt] = line.split('/');

                            return { key, amt };


                        }
                        else {

                            return null;
                        }

                    }
                    else {

                        return null;
                    }

                }).filter(element => element !== null);
                console.log(this.lottery_list)

                if (this.lottery_list.length != 0) {
                    this.is_paste = true;
                    this.is_save = false;
                    this.is_cancle = false;
                }
            } catch (err) {
                alert(err);
                console.error('Failed to read clipboard contents: ', err);
            }






        },
        async getClipboardData() {

            if (window.clipboardchannel) {

                try {
                    clipboardchannel.postMessage("")
                } catch (err) {
                    alert(err);
                    console.error('Failed to read clipboard contents: ', err);
                }
            }
            else {
                // alert("web");

                try {

                    const text = await navigator.clipboard.readText();
                    // console.log(text);

                    const inputData = text.trim().split('\n');
                    console.log(inputData)

                    let check_error_data = false;
                    inputData.forEach((line, index) => {


                        console.log(index)
                        console.log(line.split("/")[0])

                        console.log(line.split("/")[0].split("").length)
                        if ((isNaN(parseFloat(line.split('/')[0]))
                            || !isFinite(line.split('/')[0])
                            || isNaN(parseFloat(line.split('/')[1]))
                            || !isFinite(line.split('/')[1])
                            || line.split('/')[0].split("").length != 2)
                            && index >= 3
                        ) {
                            return check_error_data = true;

                        }
                        else if (inputData.length <= 3) {
                            return check_error_data = true;

                        }



                    });
                    if (check_error_data == true) {
                        return alert("format မှားနေပါသည်");
                    }


                    this.lottery_list = inputData.map((line, index) => {



                        if (line.split('/').length == 3) {
                            if (!isNaN(parseFloat(line.split('/')[0]))
                                && isFinite(line.split('/')[0])
                                && !isNaN(parseFloat(line.split('/')[1]))
                                && isFinite(line.split('/')[1])
                                && line.split('/')[0].split("").length == 2
                                && index >= 3

                            ) {
                                //  return   [];
                                const [key, amt] = line.split('/');

                                return { key, amt };


                            }
                            else {

                                return null;
                            }

                        }
                        else {

                            return null;
                        }

                    }).filter(element => element !== null);
                    console.log(this.lottery_list)

                    if (this.lottery_list.length != 0) {
                        this.is_paste = true;
                        this.is_save = false;
                        this.is_cancle = false;
                    }



                } catch (err) {
                    alert(err);
                    console.error('Failed to read clipboard contents: ', err);
                }
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
    z-index: 1050;
    /* Ensures it is above the custom div */
}


.fixed-bottom-row-container {
    position: relative;
}

.fixed-bottom-row {
    position: sticky;
    bottom: 1%;
    background-color: white;
    z-index: 1;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
}

.zero-amount {
    color: black !important;
    background: white !important;
}

.custom-offcanvas {
    top: 100px;
    /* Adjust this value to move the Offcanvas down */
    height: calc(100% - 100px);
    /* Adjust this value to keep the Offcanvas height in check */
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

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }
}

button:disabled {
    background-color: gray !important;
    /* Background color for disabled buttons */
    color: gray !important;
    /* Text color for disabled buttons */
    cursor: not-allowed;
    /* Optional: changes cursor to indicate non-interactivity */
}
</style>