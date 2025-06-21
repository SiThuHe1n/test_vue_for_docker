<template>
    <div>











        <div class="" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Menu
                  </button> -->
                <router-link to="/maung" >  <img src="/images/back-button.png" style="width:40px;height:40px;" alt=""> </router-link>
               


            </div>
            <div style="right:27%;left:27%;position:absolute;height:50px;align-items: center;display:flex;" class=" px-1">
           
                <span style="">     လောင်းထားသောပွဲများ </span>
             </div>

            <div style="right:0;position:absolute;" class="py-2 px-1">


                <!-- <router-link to="/2d/ledger" class="btn btn-warning mx-1" > L</router-link> -->


                <button @click="reload_page()" class="btn btn-outline-dark mx-1">

                    <svg style="width:15px;" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                    </svg>



                </button>
                <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

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




        <div v-if="!is_save_loading" class="row gx-0 mb-3">
            <div class="col-4  p-1">
                <input type="date" @change="on_change_date()" v-model="get_date" class="form-control" name="" id="">
            </div>

            <div v-if="current_hide == false && current_index === ''" class="col-4 p-1">
                <button class="bg-primary text-white form-control"> {{ get_total_amt_main() }} </button>
            </div>

            <div v-if="current_hide == false && current_index === ''" class="col-4 p-1">
                <button class="bg-white text-white form-control" v-if="get_win_total_amt_main() > 0"
                    style="color:green !important;"> {{ get_win_total_amt_main() }} </button>
                <button class="bg-white text-white form-control" v-if="get_win_total_amt_main() < 0"
                    style="color:red !important;"> {{ get_win_total_amt_main() }} </button>
                <button class="bg-white text-white form-control" v-if="get_win_total_amt_main() == 0"
                    style="color:black !important;"> {{ get_win_total_amt_main() }} </button>

            </div>


        </div>
        <div v-if="!is_save_loading" style="">





            <div class="row gx-0" v-if="old_lottery_list.length != 0">
                <div class="col-12 px-2" style="height:80vh;position:relative;">

                    <div class="my-3 card" v-for="(det, ind) in old_lottery_list"
                        @click="show_match(ind, old_lottery_list)">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-12 text-start  px-3">
                                    {{ det.time }}
                                </div>

                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">


                                <li class="list-group-item p-1" v-for="(dat, ind) in det.detail">

                                    <div class="row gx-0" style="position: relative;">
                                        <div class="col-8 text-start">
                                            {{ dat.team }} - {{ dat.type }}
                                        </div>


                                        <div class="col-4">
                                            <img src="/images/check.png" v-if="dat.final_win_lose == 'win'" alt=""
                                                style="color:green;width:15px;height:15px;">

                                            <img src="/images/cross.png" v-if="dat.final_win_lose == 'lose'" alt=""
                                                style="color:green;width:15px;height:15px;">

                                            <img src="/images/equal.png" v-if="dat.final_win_lose == 'equal'" alt=""
                                                style="color:green;width:15px;height:15px;">

                                            <img src="/images/question.png"
                                                v-if="dat.final_win_lose == null && dat.is_pb != '1'" alt=""
                                                style="color:green;width:15px;height:15px;">

                                            <span v-if="dat.is_pb == '1'">ပွဲပျက်</span>



                                        </div>
                                    </div>







                                </li>



                            </ul>

                            <div v-for="(dat, ind) in det.detail">
                                <div class="card my-4" style="border-radius:0 !important" v-if="det.hide == true">
                                    <div class="card-header bg-black text-white p-1" style="min-height:30px;">
                                        <div class="row">
                                            <div class="col-3">
                                                <p style="font-size:12px;" class="text-start mb-0"> {{ dat.start_time ??
                                                    "" }}
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

                                            <div id="team_1_"
                                                style="border:1px solid black;min-height:45px;padding:0px;"
                                                :class="(dat.select_team == 'team_1') ? 'col-5 text-center bg-primary text-white' : 'col-5 text-center'">
                                                {{ dat.team_1_name ?? "" }}
                                                <span v-if="dat.team_1_score != null && dat.team_1_sign != null"
                                                    style="color:red"> (
                                                    {{ dat.team_1_score }}{{ dat.team_1_sign }}{{ dat.team_1_multiply }}
                                                    ) </span>


                                            </div>
                                            <div style="border:1px solid black;min-height:45px;padding:0px;"
                                                class=" col-1 text-center">
                                                {{ dat.team_1_result ?? "" }}


                                            </div>
                                            <div style="border:1px solid black;min-height:45px;padding:0px;"
                                                class=" col-1 text-center">
                                                {{ dat.team_2_result ?? "" }}



                                            </div>
                                            <div style="border:1px solid black;min-height:45px;padding:0px;"
                                                :class="(dat.select_team == 'team_2') ? 'col-5 text-center bg-primary text-white' : 'col-5 text-center'">

                                                {{ dat.team_2_name ?? "" }}
                                                <span v-if="dat.team_2_score != null && dat.team_2_sign != null"
                                                    style="color:red"> (
                                                    {{ dat.team_2_score }}{{ dat.team_2_sign }}{{ dat.team_2_multiply }}
                                                    ) </span>




                                            </div>

                                            <div style="border:1px solid black;min-height:45px;padding:0px;"
                                                :class="(dat.up_or_down == 'up') ? 'col-4 text-center bg-primary text-white' : 'col-4 text-center'">

                                                အပေါ်


                                            </div>

                                            <div style="border:1px solid black;min-height:45px;color:red;"
                                                class="text-center col-4 d-flex align-items-center justify-content-center">
                                                {{ dat.over_all_score ?? "" }}{{ dat.over_all_sign ?? "" }}{{
                                                    dat.over_all_multiply ?? "" }}
                                            </div>

                                            <div style="border:1px solid black;min-height:45px;padding:0px;"
                                                :class="(dat.up_or_down == 'down') ? 'col-4 text-center bg-primary text-white' : 'col-4 text-center'">

                                                အောက်

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="card-footer text-body-secondary">
                            <div class="row">
                                <div class="col-6 text-center  px-3">
                                    {{ det.total_amount }}
                                </div>
                                <div class="col-6 text-center px-3">

                                    <span v-if="det.final_amount >= 0" alt="" style="color:green;"> {{ det.final_amount }}
                                    </span>

                                    <span v-if="det.final_amount < 0" alt="" style="color:red;"> {{ det.final_amount }}
                                    </span>


                                    <span v-if="det.final_amount == null" alt="" style="color:green;"> ?? </span>

                                </div>

                            </div>
                        </div>
                    </div>








                </div>
            </div>



        </div>

        <div v-if="current_hide == true && current_index !== ''" class="row gx-0   bg-white shadow rounded "
            style="bottom:1%;position:fixed;width:100%;max-width:500px;z-index:1000;">
            <div class="col-12 p-1">
                <button @click="cancle_detail()"
                    :class="(is_cancle && is_detail_data == false) ? 'form-control btn btn-outline-danger' : 'form-control btn btn-danger'">
                    back </button>
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
            is_save_loading: false,
            is_save: true,
            is_cancle: true,
            is_paste: false,
            current_index: "",
            current_hide: false,




            get_date: "",
            get_am_pm: "",


            lottery_list: [],
            detail_lottery_list: [],
            old_lottery_list: [],
            is_detail_data: false,




        }
    },


    mounted() {
        window.addEventListener("popstate", function (event) {
            router.push("/maung");
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

        reload_page() {
            location.reload();
        },


        get_win_total_amt_main() {

            let tot_amt = 0;
            if (this.old_lottery_list.lenght != 0) {
                this.old_lottery_list.forEach(er => {
                    tot_amt += parseFloat(er.final_amount);

                });
            }
            return tot_amt;
        },
        get_total_amt_main() {

            let tot_amt = 0;
            if (this.old_lottery_list.lenght != 0) {
                this.old_lottery_list.forEach(er => {
                    tot_amt += parseFloat(er.total_amount);

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

            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }

            console.log(headers);

            axios.post(this.$store.state.api_url + "current_time_old_data_maung_voucher", {

                "date": this.get_date,



            },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.old_lottery_list = response.data;
                        this.old_lottery_list.forEach(element => {
                            element.hide = false;


                        });

                        console.log(response.data)
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    alert(error)
                    //   alert('hello')
                });
        },
        cancle_detail() {
            this.current_hide = false
            this.current_index = ""
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
        show_detail(data) {
            this.current_hide = true


            this.current_index = data
            this.$forceUpdate();

        },
        show_match(index, array) {

            if (array[index].hide == true) {
                array[index].hide = false;

            }
            else if (array[index].hide == false) {
                array[index].hide = true;
            }

            this.old_lottery_list.forEach((et, ind) => {

                if (ind != index) {
                    et.hide = false;
                }




            });





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
</style>