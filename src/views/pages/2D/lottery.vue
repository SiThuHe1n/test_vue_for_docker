<template>
    <div>












        <div class="" style="width:100%;height:50px;position:relative;">
            <div style="left:0;position:absolute;" class="py-2 px-1">
                <button class="btn btn-warning" type="button">
                    <img src="../../../assets/dots.png" style="height:20px;object-fit:cover" alt="">

                </button>

            </div>

            <div style="right:0;position:absolute;" class="py-2 px-1">


                <button @click="reload_page()" class="btn btn-info mx-1">

                    <svg style="width:15px;" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                    </svg>



                </button>


                <router-link to="/2d/ledger" class="btn btn-warning mx-1"> L</router-link>

                <!-- <router-link to="/lottery_2d" class="btn btn-warning mx-1"> N </router-link> -->

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
            <div class="col-5  p-1">
                <input type="date" @change="on_change_date()" v-model="get_date" disabled class="form-control" name=""
                    id="">
            </div>
            <div class="col-3 p-1">
                <select @change="on_change_date()" v-model="get_am_pm" class=" form-control">
                    <option value="am">AM</option>
                    <option value="pm">PM</option>

                </select>

            </div>

            <div class="col-4 p-1">
                <button class="bg-primary text-white form-control"> {{ get_total_amt() }} </button>
            </div>
        </div>
        <div v-if="!is_save_loading" style="">

            <div v-if="detail_lottery_list.length != 0 && is_detail_data == true" class="row gx-0">
                <div class="col-12  ">
                    <div class="table-responsive" style="max-height:82vh;">
                        <table class="table table-bordered table-hover m-0 ">
                            <thead class="bg-light sticky-top top-0">
                                <tr>
                                    <th> No </th>
                                    <th> Amount </th>
                                    <th> No </th>
                                    <th> Amount </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="n in 50" style="max-height:5px !important;padding:0px !important;">
                                    <td
                                        style="background:black;color:white;max-height:5px !important;padding:0px !important;">
                                        {{ formatNumberWithLeadingZeros(n - 1) }} </td>
                                    <td :class="{ 'zero-amount': isAmtZero(getAmountByNumber(formatNumberWithLeadingZeros(n - 1).toString(), detail_lottery_list)) }"
                                        style="background:lightseagreen;color:white;max-height:5px !important;padding:0px !important;">
                                        {{
                                            getAmountByNumber(formatNumberWithLeadingZeros(n - 1).toString(), detail_lottery_list)
                                        }}
                                    </td>
                                    <td
                                        style="background:black;color:white;max-height:5px !important;padding:0px !important;">
                                        {{ formatNumberWithLeadingZeros(n + 50 - 1) }} </td>
                                    <td :class="{ 'zero-amount': isAmtZero(getAmountByNumber(formatNumberWithLeadingZeros(n + 50 - 1).toString(), detail_lottery_list)) }"
                                        style="background:lightseagreen;color:white;max-height:5px !important;padding:0px !important;">
                                        {{
                                            getAmountByNumber(formatNumberWithLeadingZeros(n +
                                                50 - 1).toString(), detail_lottery_list)
                                        }} </td>
                                </tr>

                                <tr class="fixed-bottom-row">
                                    <td colspan="2"> Total </td>
                                    <td colspan="2"> {{ get_total_amount(detail_lottery_list) }} </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


            <div v-if="lottery_list.length != 0" class="row gx-0">
                <div class="col-12  ">
                    <div class="table-responsive" style="max-height:78vh;">
                        <table class="table table-bordered table-hover m-0">
                            <thead class="bg-light sticky-top top-0">
                                <tr>
                                    <th> No </th>
                                    <th> Amount </th>
                                    <th> No </th>
                                    <th> Amount </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="n in 50" style="max-height:5px !important;padding:0px !important;">
                                    <td
                                        style="background:black;color:white;max-height:5px !important;padding:0px !important;">
                                        {{ formatNumberWithLeadingZeros(n - 1) }} </td>
                                    <td :class="{ 'zero-amount': isAmtZero(getAmountByNumber(formatNumberWithLeadingZeros(n - 1).toString(), lottery_list)) }"
                                        style="background:lightseagreen;color:white;max-height:5px !important;padding:0px !important;">
                                        {{
                                            getAmountByNumber(formatNumberWithLeadingZeros(n - 1).toString(), lottery_list)
                                        }}
                                    </td>
                                    <td
                                        style="background:black;color:white;max-height:5px !important;padding:0px !important;">
                                        {{ formatNumberWithLeadingZeros(n + 50 - 1) }} </td>
                                    <td :class="{ 'zero-amount': isAmtZero(getAmountByNumber(formatNumberWithLeadingZeros(n + 50 - 1).toString(), lottery_list)) }"
                                        style="background:lightseagreen;color:white;max-height:5px !important;padding:0px !important;">
                                        {{
                                            getAmountByNumber(formatNumberWithLeadingZeros(n +
                                                50 - 1).toString(), lottery_list)
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
            <div class="row gx-0" v-if="is_detail_data == false && lottery_list.length == 0">
                <div class="col-12 px-2" style="height:80vh;position:relative;">



                    <ul class="list-group" style="height:80vh;width:96%;bottom:0;position:absolute;overflow:scroll;">


                        <li class="list-group-item" v-for="dat in old_lottery_list" @click="show_detail_data(dat)">

                            <div class="d-flex" style="position: relative;">
                                <div style="width:50px;height:50px;border:0px solid;border-radius:50%;background:gray;position: relative;
        ">

                                    <svg style="
                                        font-size:24px;
                                        color:white;
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);

                                        " xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                    </svg>



                                </div>


                                <div class="px-3" style="width:35%;">
                                    <div class="" style="display: inline">
                                        <h5 style="font-weight: 900;font-size:15px;"> {{ dat.client_name ?? "" }} </h5>
                                    </div>
                                    <div class="" style="display: inline">
                                        <h5 style="font-size:12px;"> Total - <span style="color:red;"> {{ dat.total_amt
                                                }} </span> Ks </h5>
                                    </div>
                                </div>

                                <div class="ps-3" style="width:35%;">
                                    <div style="display: inline;text-align:end;">
                                        <h5 style="font-size:15px;"> {{ dat.created_at ?? "" }} </h5>
                                    </div>
                                    <div class="" style="display: inline;text-align:end;">
                                        <h5 style="font-size:12px;"> ထိ - <span style="color:red;"> 0 </span> Ks </h5>
                                    </div>
                                </div>


                                <div style="
                                right:0;
        
                                    position:absolute;
                                    width:30px;
                                    top:15%;
        
                                ">
                                    <img src="../../../assets/dots.png" style="height:30px;object-fit:cover" alt="">
                                </div>


                            </div>


                        </li>


                    </ul>
                </div>
            </div>

            <div class="row gx-0   bg-white shadow rounded "
                style="bottom:1%;position:sticky;width:100%;max-width:500px;z-index:1000;">
                <div class="col-4 p-1">
                    <button @click="cancle_lottery()" :disabled="is_cancle && is_detail_data == false"
                        :class="(is_cancle && is_detail_data == false) ? 'form-control btn btn-outline-danger' : 'form-control btn btn-danger'">
                        {{ is_detail_data ? "Back" : "Cancle" }} </button>
                </div>

                <div class="col-4 p-1">
                    <button @click="getClipboardData()" :disabled="is_paste || is_detail_data == true"
                        :class="(is_paste || is_detail_data == true) ? 'form-control btn btn-outline-danger' : 'form-control btn btn-danger'">
                        2D Paste </button>
                </div>

                <div class="col-4 p-1">
                    <button @click="save_lottery()" :disabled="is_save || is_detail_data == true" id="save_btn"
                        :class="(is_save || is_detail_data == true) ? 'form-control btn btn-outline-danger' : 'form-control btn btn-danger'">
                        Save
                        <div style="max-height:15px;max-width:15px;" v-if="is_save_loading"
                            class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
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
            is_save_loading: false,
            is_save: true,
            is_cancle: true,
            is_paste: false,

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

            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }

            console.log(headers);

            axios.post(this.$store.state.api_url + "current_time_old_data_2d_lottery", {

                "date": this.get_date,
                "am_pm": this.get_am_pm,


            },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.old_lottery_list = response.data;

                        console.log(response.data)
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    alert(error)
                    //   alert('hello')
                });
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

            axios.post(this.$store.state.api_url + "2d_upload_paste",
                {

                    "time": currentTime,
                    "date": currentDate,
                    "old_lottery": this.lottery_list,
                    "total": total_amt

                }, headers
            )
                .then(response => {
                    if (response.status == 200) {

                        setTimeout(() => {
                            // this.is_save=false;
                            this.is_save_loading = false;
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
</style>