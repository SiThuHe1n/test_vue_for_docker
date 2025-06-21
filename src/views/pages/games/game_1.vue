<template>
    <div>

        <div v-if="let_game_start == false" class="d-flex justify-content-center align-items-center"
            style="height:100vh;">
            <div style="height:150px;">
                <h5 class="text-danger" style="line-height:30px;;"> ပျော်ရွှင်ဖွယ် ဂိမ်းကစားရန် <br> Start Game
                    ကိုနှိပ်ပါ </h5>
                <button class="btn btn-primary form-control" @click="game_start()"> Start Game </button>
            </div>
        </div>

        <div v-if="let_game_start == true">
            <div class="bg-info" style="width:100%;height:50px;position:relative;">
                <div style="right:0;position:absolute;" class="py-2 px-1 d-flex">
                    <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Menu
                      </button> -->


                    <button @click="check_mute()" class="btn btn-primary mx-1">
                        <img style="width:20px;height:20px;" :src="(is_mute) ? 'images/mute.png' : 'images/volume.png'"
                            alt="">

                    </button>


                    <button @click="reload_page()" class="btn btn-primary mx-1"> <svg style="width:15px;"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                        </svg>
                    </button>

                    <router-link to="/game_voucher" class="btn btn-warning mx-1"> V </router-link>

                </div>

                <div style="left:0;position:absolute;" class="py-2 px-1">


                    <!-- <router-link to="/2d/ledger" class="btn btn-warning mx-1" > L</router-link> -->

                    <router-link to="/main" class="btn btn-warning mx-1"> Back </router-link>

                    <!-- <button class="btn btn-warning mx-1"> Logout</button> -->

                </div>


            </div>



            <div class="row gx-0 d-flex justify-content-center mx-2 my-3">
                <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:5px;">
                    {{ current_date }}
                </div>
                <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:5px;">
                    ပွဲစဥ် - {{ current_match_id }}
                </div>
                <div class="col-4 btn btn-primary" style="border:1px solid;border-radius:5px;">
                    {{ main_balance }}
                </div>

            </div>

            <div class="row gx-0">
                <!--  -->
                <div v-if="is_big" class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="noti_div_2 ">
                                <p style="font-weight:900;color:red;" :class="(is_rotating) ? 'noti_text_2' : ''"> {{
                                    count_time
                                    }} </p>

                            </div>


                        </div>
                    </div>

                    <!-- -->
                    <div v-if="chk_is_get_result == false" class="d-flex align-items-center justify-content-center"
                        style="transition:  0.3s;height:360px;top:0;position:relative;width:100%;max-width:500px;z-index:1000;position:relative">

                        <div class="row">
                            <div class="col-3 d-flex align-items-center">
                                <div class="row">
                                    <div class="col-6 p-0 m-0">
                                        <div>
                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 4) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                4
                                            </div>
                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 5) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                5
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 6) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                6
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 7) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                7
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 8) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                8
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 9) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                9
                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-6 p-0 m-0">

                                        <div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 10) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                10
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 20) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                20
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 30) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                30
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 40) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                40
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 50) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                50
                                            </div>
                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="(rot_number_rate_arr[rot_number_rate ?? 0] == 100) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                100
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>

                            <div class="col-9">
                                <div
                                    style="transition:  0.3s;border:0px solid;border-radius:50%;height:240px;width:240px;background:#d5adf3">
                                    <div class="row d-flex justify-content-center  gx-0">
                                        <div class="col-4 px-0">
                                            <div>

                                            </div>
                                        </div>

                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                            :style="(rot_number == 1) ? 'width:80px;height:80px;border:1px solid;border-radius:50%;background:gold;' : 'width:80px;height:80px;background:white;border:0px solid;border-radius:50%;'">
                                            <img src="images/dice_1_photo.png" alt="" style="width:60px;height:60px;">
                                        </div>
                                        <div class="col-4 px-0">
                                            <div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center  gx-0">
                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                            :style="(rot_number == 4) ? 'width:80px;height:80px;border:1px solid;border-radius:50%;background:gold;' : 'width:80px;height:80px;background:white;border:0px solid;border-radius:50%;'">
                                            <img src="images/dice_4_photo.png" alt="" style="width:60px;height:60px;">
                                        </div>

                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                            :style="(rot_number == 5) ? 'width:80px;height:80px;border:1px solid;border-radius:50%;background:gold;' : 'width:80px;height:80px;background:white;border:0px solid;border-radius:50%;'">
                                            <!-- {{ dice_number }} -->
                                            <img src="images/dice_5_photo.png" alt="" style="width:60px;height:60px;">

                                        </div>
                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                            :style="(rot_number == 2) ? 'width:80px;height:80px;border:1px solid;border-radius:50%;background:gold;' : 'width:80px;height:80px;background:white;border:0px solid;border-radius:50%;'">
                                            <img src="images/dice_2_photo.png" alt="" style="width:60px;height:60px;">
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center gx-0">
                                        <div class="col-4 px-0">
                                            <div>

                                            </div>
                                        </div>

                                        <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                            :style="(rot_number == 3) ? 'width:80px;height:80px;border:1px solid;border-radius:50%;background:gold;' : 'width:80px;height:80px;background:white;border:0px solid;border-radius:50%;'">
                                            <img src="images/dice_3_photo.png" alt="" style="width:60px;height:60px;">
                                        </div>
                                        <div class="col-4 px-0">
                                            <div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>





                    </div>
                    <!--  -->
                    <div v-if="chk_is_get_result == true" class="d-flex align-items-center justify-content-center"
                        style="height:300px;top:0;position:relative;width:100%;max-width:500px;z-index:1000;position:relative;">


                        <div class="row">
                            <div class="col-3 d-flex align-items-center">
                                <div class="row ">
                                    <div class="col-6 m-0 p-0">
                                        <div>
                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 4) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                4
                                            </div>
                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 5) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                5
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 6) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                6
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 7) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                7
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 8) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                8
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 9) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                9
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-6 m-0 p-0">
                                        <div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 10) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                10
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 20) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                20
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 30) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                30
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 40) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                40
                                            </div>

                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 50) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                50
                                            </div>
                                            <div class="d-flex justify-content-center align-items-center"
                                                :style="((dice_number_rate ?? 4) == 100) ? 'font-size:15px;color:white;border:1px solid;width:30px;height:40px;background:red;' : 'font-size:15px;color:red;border:1px solid;width:30px;height:40px;background:white;'">
                                                100
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-9">
                                <div class="d-flex justify-content-center"
                                    style="border:0px solid;border-radius:50%;height:240px;width:240px;background:#d5adf3">


                                    <div class=" px-0 d-flex justify-content-center align-items-center"
                                        style='width:240px;height:240px;background:white;border:0px solid;border-radius:50%;'>
                                        <img :src="(dice_number) ? ('images/dice_' + dice_number + '_photo.png') : 'images/unknown.png'"
                                            alt="" style="width:220px;height:220px;">

                                    </div>








                                </div>
                            </div>
                        </div>




                    </div>

                </div>

                <div v-if="!is_big" class="col-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="noti_div_2 ">
                                <p style="font-weight:900;color:red;" :class="(is_rotating) ? 'noti_text_2' : ''"> {{
                                    count_time
                                    }} </p>

                            </div>


                        </div>
                    </div>


                    <div v-if="chk_is_get_result == false" class="d-flex align-items-center justify-content-center"
                        style="transition:  0.3s;height:200px;top:0;position:relative;width:100%;max-width:500px;z-index:1000;position:relative">


                        <div
                            style="transition:  0.3s;border:0px solid;border-radius:50%;height:180px;width:180px;background:#d5adf3">
                            <div class="row d-flex justify-content-center  gx-0">
                                <div class="col-4 px-0">
                                    <div>

                                    </div>
                                </div>

                                <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                    :style="(rot_number == 1) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:gold;' : 'width:60px;height:60px;background:white;border:0px solid;border-radius:50%;'">
                                    <img src="images/dice_1_photo.png" alt="" style="width:40px;height:40px;">
                                </div>
                                <div class="col-4 px-0">
                                    <div>

                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center  gx-0">
                                <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                    :style="(rot_number == 4) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:gold;' : 'width:60px;height:60px;background:white;border:0px solid;border-radius:50%;'">
                                    <img src="images/dice_4_photo.png" alt="" style="width:40px;height:40px;">
                                </div>

                                <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                    :style="(rot_number == 5) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:gold;' : 'width:60px;height:60px;background:white;border:0px solid;border-radius:50%;'">
                                    <!-- {{ dice_number }} -->
                                    <img src="images/dice_5_photo.png" alt="" style="width:40px;height:40px;">

                                </div>
                                <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                    :style="(rot_number == 2) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:gold;' : 'width:60px;height:60px;background:white;border:0px solid;border-radius:50%;'">
                                    <img src="images/dice_2_photo.png" alt="" style="width:40px;height:40px;">
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center gx-0">
                                <div class="col-4 px-0">
                                    <div>

                                    </div>
                                </div>

                                <div class="col-4 px-0 d-flex justify-content-center align-items-center"
                                    :style="(rot_number == 3) ? 'width:60px;height:60px;border:1px solid;border-radius:50%;background:gold;' : 'width:60px;height:60px;background:white;border:0px solid;border-radius:50%;'">
                                    <img src="images/dice_3_photo.png" alt="" style="width:40px;height:40px;">
                                </div>
                                <div class="col-4 px-0">
                                    <div></div>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div v-if="chk_is_get_result == true" class="d-flex align-items-center justify-content-center"
                        style="height:300px;top:0;position:relative;width:100%;max-width:500px;z-index:1000;position:relative;">



                        <div class="d-flex justify-content-center"
                            style="border:0px solid;border-radius:50%;height:180px;width:180px;background:#d5adf3">


                            <div class=" px-0 d-flex justify-content-center align-items-center"
                                style='width:180px;height:180px;background:white;border:0px solid;border-radius:50%;'>
                                <img :src="(dice_number) ? ('images/dice_' + dice_number + '_photo.png') : 'images/unknown.png'"
                                    alt="" style="width:150px;height:150px;">
                            </div>








                        </div>



                    </div>

                </div>

                <div v-if="!is_big" class="col-4 d-flex align-items-center">
                    <div ref="myTable" class="table-responsive m-1 p-0" style="height:230px;width:100%;">
                        <table class="table table-bordered m-0" style="">
                            <tbody>
                                <tr v-for="om in old_match_result" style="font-size:13.5px;line-height:1mm">
                                    <td>
                                        {{ om.match_id }}
                                    </td>
                                    <td>
                                        <span v-if="om.win_result == 1"> ၀က် ({{ om.rate }}) </span>
                                        <span v-if="om.win_result == 2"> မြွေ ({{ om.rate }}) </span>
                                        <span v-if="om.win_result == 3"> ကြက် ({{ om.rate }}) </span>
                                        <span v-if="om.win_result == 4"> ဖား ({{ om.rate }}) </span>
                                        <span v-if="om.win_result == 5"> ရွှေအိုး ({{ om.rate }}) </span>


                                    </td>




                                </tr>
                            </tbody>




                        </table>
                    </div>


                </div>
            </div>


            <div class="row d-flex justify-content-center  ">


                <div class="col-2 mx-1 px-1" v-for="n in 5">
                    <div class="d-flex justify-content-center" style="width:100%;">
                        <div class="  d-flex justify-content-center align-items-center"
                            :style="(dice_number == n && chk_is_get_result == true) ? 'width:40px;height:40px;background:gold;border:0px solid;border-radius:50%;' : 'width:40px;height:40px;background:white;border:0px solid;border-radius:50%;'">
                            <img :src="'images/dice_' + n + '_photo.png'" alt="" style="width:30px;height:30px;">
                        </div>
                    </div>


                    <div class="d-flex justify-content-center my-1 " style="width:100%;">
                        <button class="btn btn-light form-control text-dark"
                            style="font-size:12px;color:red !important;height:27px !important;"> {{
                                sum_bet_value("dice_" + n) }}</button>
                    </div>


                    <div v-if="is_start == false" class="d-flex justify-content-center my-1 " style="width:100%;">
                        <button @click="set_bet_value('dice_' + n, '100')" class="btn btn-danger form-control"
                            :style="(submit_data['dice_' + n].includes('100')) ? 'font-size:12px;color:black;background:gold !important;height:27px !important;' : 'font-size:12px;color:white;background: rgba(128, 0, 128, 0.456) !important;border:1px solid white !important;height:27px !important;'">
                            100</button>
                    </div>

                    <div v-if="is_start == false" class="d-flex justify-content-center my-1 " style="width:100%;">
                        <button @click="set_bet_value('dice_' + n, '300')" class="btn btn-danger form-control"
                            :style="(submit_data['dice_' + n].includes('300')) ? 'font-size:12px;color:black;background:gold !important; height:27px !important;' : 'font-size:12px;color:white;background: rgba(128, 0, 128, 0.456) !important;border:1px solid white !important;height:27px !important;'">
                            300</button>
                    </div>

                    <div v-if="is_start == false" class="d-flex justify-content-center my-1 " style="width:100%;">
                        <button @click="set_bet_value('dice_' + n, '500')" class="btn btn-danger form-control"
                            :style="(submit_data['dice_' + n].includes('500')) ? 'font-size:12px;color:black;background:gold !important; height:27px !important;' : 'font-size:12px;color:white;background: rgba(128, 0, 128, 0.456) !important;border:1px solid white !important;height:27px !important;'">
                            500</button>
                    </div>

                    <div v-if="is_start == false" class="d-flex justify-content-center my-1 " style="width:100%;">
                        <button @click="set_bet_value('dice_' + n, '1000')" class="btn btn-danger form-control"
                            :style="(submit_data['dice_' + n].includes('1000')) ? 'font-size:12px;color:black;background:gold !important; height:27px !important;' : 'font-size:12px;color:white;background: rgba(128, 0, 128, 0.456) !important;border:1px solid white !important;height:27px !important;'">
                            1000</button>
                    </div>

                    <div v-if="is_start == false" class="d-flex justify-content-center my-1 " style="width:100%;">
                        <button @click="set_bet_value('dice_' + n, '3000')" class="btn btn-danger form-control"
                            :style="(submit_data['dice_' + n].includes('3000')) ? 'font-size:12px;color:black;background:gold !important; height:27px !important;' : 'font-size:12px;color:white;background: rgba(128, 0, 128, 0.456) !important;border:1px solid white !important;height:27px !important;'">
                            3000</button>
                    </div>



                </div>


            </div>







            <div v-if="is_start == false" class="row d-flex justify-content-center mx-2 my-1">
                <div class="col ">
                    <button class="btn btn-danger" @click="submit_game_one()" :disabled="is_submit"
                        style="border:1px solid;border-radius:15px;">
                        လောင်းမည်
                    </button>
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





    </div>
</template>

<script>

import router from '@/router';
import { main, start } from '@popperjs/core';
import axios from 'axios'
export default {
    data() {


        return {

            getting_result_function:false,
            is_start: false,
            count: 0,
            dice_number_rate: "",
            let_game_start: false,
            get_amount: 1000,
            is_get_result: false,
            starting_song: new Audio('audio/starting.mp3'),
            result_song: new Audio('audio/result.mp3'),
            old_match_result: [],
            rot_number: "",
            rot_number_rate_arr: [4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100],
            rot_number_rate: '',

            dice_number: "",
            count_down_duration_time: 10,
            dice_time: 3,
            bet: "",
            is_loaded: false,
            is_rotating: false,
            current_match_id: "",
            count_time: "",
            is_submit: false,
            main_balance: 0,
            old_bet_data: {
                "dice_1": [],
                "dice_2": [],
                "dice_3": [],
                "dice_4": [],
                "dice_5": [],
            },
            submit_data: {
                "dice_1": [],
                "dice_2": [],
                "dice_3": [],
                "dice_4": [],
                "dice_5": [],
            },
            is_mute: localStorage.getItem("is_mute") ?? false,
            count_duration: 60,
            end_time_duration: 30,
            channel: Pusher.subscribe('auto_starting_new_game_state'),
            channeltwo: Pusher.subscribe('getting_game_result'),
            interval: null,
            current_date: "",
            is_active_screen: true,
        }
    },


    mounted() {
        this.preventScreenOff();
        this.starting_song.muted = this.is_mute;
        this.result_song.muted = this.is_mute;


        window.addEventListener("popstate", function (event) {

            router.push("/main");
        });


        // this.dice_number= Math.floor(Math.random() * (12 - 1 + 1)) + 1;;



        // let current_interval=setInterval(() => {

        //     clearInterval(current_interval)
        //     this.dice_number=Math.floor(Math.random() * 10000) + 1;

        // }, this.dice_number);



    },
    methods: {
        async preventScreenOff() {
            try {
                if ('wakeLock' in navigator) {
                    this.wakeLock = await navigator.wakeLock.request('screen');
                    console.log('Screen wake lock acquired');
                } else {
                    console.log('Wake Lock API is not supported in this browser.');
                }
            } catch (err) {
                console.error('Failed to acquire wake lock:', err);
            }
        },


        check_mute() {
            localStorage.setItem("is_mute", (this.is_mute == true) ? false : true)
            this.is_mute = (this.is_mute == true) ? false : true;
            this.starting_song.muted = this.is_mute;
            this.result_song.muted = this.is_mute;
        },
        game_start() {
            if (this.is_active_screen == false) {
                return null;
            }



            this.let_game_start = true;
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    this.is_active_screen = false;
                } else {
                    this.$router.push({ path: '/redirect_game_one' }).then(() => {
                        this.$router.push({ path: this.$route.path });
                    });
                }
            });

            const currentDate = new Date();
            const year = currentDate.getUTCFullYear();
            const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const day = String(currentDate.getUTCDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            this.current_date = formattedDate;
            this.body_check_balance();
            this.get_server_state();

            // this.count_function();

            // this.scrollToLastRow();

            this.channeltwo.bind('get_data_state', (data) => {
                console.log('receive_get_data');

                if (this.is_active_screen == false) {
                    return null;
                }

                this.get_win_result();
            });

            this.channel.bind('new_game_start', (data) => {
                console.log('receive_new_game_start');
                if (this.is_active_screen == false) {
                    return null;
                }


                this.get_server_state();
            });

        },
        sum_bet_value(data) {
            let total = 0;
            this.old_bet_data[data].forEach(et => {
                total += parseFloat(et);

            });
            return total;
        },
        set_bet_value(data, value) {
            if (this.submit_data[data].includes(value) == false) {
                this.submit_data[data].push(value);
            }
            else {
                let index = this.submit_data[data].indexOf(value);
                this.submit_data[data].splice(index, 1);
            }
            console.log(this.submit_data)

        },
        timeToSeconds(time) {
            let [hours, minutes, seconds] = time.split(':').map(Number);
            return (hours * 3600) + (minutes * 60) + seconds;
        },

        get_server_state() {

            if (this.is_active_screen == false) {
                return null;
            }
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
                        console.log("check_here")
                        console.log(response)
                        if (response.data.end_time != null) {

                            if (response.data.old_betting) {
                                this.old_bet_data = response.data.old_betting
                                console.log(this.old_bet_data);
                            }
                            this.rot_number = ""
                            this.dice_number = ""
                            this.rot_number_rate = ""
                            this.dice_number_rate = ""
                            let end_time = response.data.end_time;
                            this.end_time_duration = response.data.end_time_duration
                            this.current_match_id = response.data.match_id

                            let date = new Date();

                            // Get hours, minutes, and seconds
                            let hours = date.getUTCHours().toString().padStart(2, '0');
                            let minutes = date.getUTCMinutes().toString().padStart(2, '0');
                            let seconds = date.getUTCSeconds().toString().padStart(2, '0');

                            // Format the time as H:i:s
                            let time = `${hours}:${minutes}:${seconds}`;


                            console.log('hello_starting_2');

                            console.log(time)

                            this.count_duration = this.timeToSeconds(end_time) - this.timeToSeconds(time);




                            this.count_function();
                            this.get_old_match_result();
                        }
                        else {
                            this.get_win_result();
                        }


                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },

        get_old_match_result() {

            if (this.is_active_screen == false) {
                return null;
            }
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
                        this.old_match_result = response.data
                        if (this.old_match_result.length != 0) {
                            this.old_match_result.sort((a, b) => a["id"] - b["id"])
                        }

                        console.log(this.old_match_result)
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

        submit_game_one() {

            if (this.is_active_screen == false) {
                return null;
            }
            this.is_submit = true;

            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }


            axios.post(this.$store.state.api_url + "submit_game_one",
                {
                    submit_data: this.submit_data,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        this.is_submit = false;
                        this.body_check_balance();
                        this.old_bet_data = response.data.old_betting

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
                            title: "အထက်သို့တင်ပြီးပါပြီ",
                        })


                        this.submit_data = {
                            "dice_1": [],
                            "dice_2": [],
                            "dice_3": [],
                            "dice_4": [],
                            "dice_5": [],
                        };
                    }

                })
                .catch(error => {
                    this.is_submit = false;

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
                        title: error.response.data.message,
                    })
                    console.error('Error:', error);
                    //   alert('hello')
                });
        },

        body_check_balance() {

            if (this.is_active_screen == false) {
                return null;
            }


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



        get_win_result() {
         
            if (this.is_active_screen == false) {
                return null;
            }
            if( this.getting_result_function==false)
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

            this.getting_result_function=true;
                    if (response.status == 200) {
                        this.body_check_balance();
                        console.log(response)
                        this.dice_number = response.data.result
                        // this.dice_number_rate = response.data.rate
                        let dice_rate_num = response.data.rate
                        let dice_stop = false
                        let dice_stop_2 = false

                        let dice_start_num = 0;
                        let inter_dice_rate = setInterval(() => {



                            // Get hours, minutes, and seconds


                            if (dice_stop == false) {

                                if (dice_start_num >= 12) {
                                    dice_start_num = 0;
                                    this.dice_number_rate = this.rot_number_rate_arr[dice_start_num];

                                    dice_start_num++;
                                } else {

                                    // dice_start_num=0;
                                    this.dice_number_rate = this.rot_number_rate_arr[dice_start_num];

                                    dice_start_num++;
                                }


                            } else {
                                clearInterval(inter_dice_rate);
                                let new_start_num = 0;
                                let new_inter = setInterval(() => {
                                    if (this.rot_number_rate_arr[new_start_num] == dice_rate_num) {
                                        clearInterval(new_inter);
                                        this.dice_number_rate = this.rot_number_rate_arr[new_start_num];
                                    }
                                    else if (dice_stop_2 == true) {
                                        clearInterval(new_inter);
                                        this.dice_number_rate = dice_rate_num
                                    }
                                    else {
                                        new_start_num++;
                                    }

                                }, 100);
                                // this.dice_number_rate=dice_rate_num;
                            }
                        }, 100);

                        let date = new Date();
                        let hours = date.getUTCHours().toString().padStart(2, '0');
                        let minutes = date.getUTCMinutes().toString().padStart(2, '0');
                        let seconds = date.getUTCSeconds().toString().padStart(2, '0');
                        let time = `${hours}:${minutes}:${seconds}`;

                        let end_time = response.data.end_time
                        let count_duration = (this.timeToSeconds(end_time) + 15) - this.timeToSeconds(time);
                        if (count_duration < 8) {
                            console.log("dice_start_true_1")
                            dice_stop = true;
                            dice_stop_2 = true;
                        }
                        else {
                            setTimeout(() => {
                                console.log("dice_start_true_2")

                                dice_stop = true;

                            }, 3000);

                        }


                        setTimeout(() => {

                            this.is_get_result = true;
                            let date = new Date();

                            // Get hours, minutes, and seconds
                            let hours = date.getUTCHours().toString().padStart(2, '0');
                            let minutes = date.getUTCMinutes().toString().padStart(2, '0');
                            let seconds = date.getUTCSeconds().toString().padStart(2, '0');

                            // Format the time as H:i:s
                            let time = `${hours}:${minutes}:${seconds}`;
                            let end_time = response.data.end_time

                            console.log('hello_starting_3');

                            console.log(time)

                            let count_duration = (this.timeToSeconds(end_time) + 15) - this.timeToSeconds(time);


                            var calcu_time = setInterval(() => {


                                if (count_duration == 0) {
                                    console.log('no error');
                                    clearInterval(calcu_time)
                                    count_duration--;
                                    this.count_time = "နောက်ပွဲစပါတော့မည်"
                                   
                                }
                                else {
                                    // Decrease the countdown
                                
                                    count_duration--;

                                    //   const minutes = Math.floor((count_duration) / 60);
                                    //     const seconds = (count_duration) % 60;
                                    const seconds = (count_duration);

                                    this.count_time = `အရော်အစား -  ${seconds}s`;

                                }



                            }, 1000);
                        }, 20);
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
            }

        },




        reload_page() {
            location.reload();
        },

        count_function() {

            if (this.is_active_screen == false) {
                return null;
            }
            this.is_big = false;
            let is_hide = false;
            this.is_get_result = false;
            this.chk_is_get_result = false;
            // console.log(this.count_duration)



            console.log("starting");
            let countdownDuration = this.count_duration;
            let end_time_duration = this.end_time_duration;

            if (countdownDuration > end_time_duration) {
                this.is_start = false;
            }



            let countdown = setInterval(() => {

                // Decrease the countdown
                countdownDuration--;
                // this.count_down_duration_time=countdownDuration;
                if (countdownDuration >= end_time_duration) {
                    // const minutes = Math.floor((countdownDuration - end_time_duration) / 60);
                    const seconds = (countdownDuration - end_time_duration);

                    this.count_time = `${seconds}s`;
                }
                else {
                    this.is_rotating = true;
                    this.count_time = "!!! ဘာကောင်လေးလဲ !!!";
                }


                // Display the countdown in minutes and seconds








                if (countdownDuration <= end_time_duration + 5 && this.is_start == false) {
                    this.is_start = true;
                    is_hide = true;
                }

                if (countdownDuration <= end_time_duration && is_hide == true) {

                    is_hide = false;
                    this.dice_start();
                    console.log("starting count");
                }


                // Stop the countdown when it reaches 0
                if (countdownDuration <= 0) {
                    this.is_rotating = false;
                    this.getting_result_function=false;
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

            if (this.is_active_screen == false) {
                return null;
            }
            // Replace 'song.mp3' with your file path or URL
            this.starting_song.loop = true;
            this.starting_song.play();
            this.is_big = true;


            this.is_start = true;

            this.rot_number = 1;
            this.rot_number_rate = 1;
            this.count_down_duration_time = 10
            this.load_func();

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
        load_func() {

            if (this.is_active_screen == false) {
                return null;
            }


            var start_now = setTimeout(() => {

                // console.log(this.dice_number);



                clearInterval(start_now)
              
                if (this.rot_number >= 4) {
                    //    this.dice_number = 1;
                    this.rot_number = 1;
                    this.count_down_duration_time += 5;
                } else {
                    this.rot_number += 1;

                    //   this.dice_number += 1;
                }

                if (this.rot_number_rate >= 12) {
                    //    this.dice_number = 1;
                    this.rot_number_rate = 0;

                } else {
                    this.rot_number_rate += 1;

                    //   this.dice_number += 1;
                }
                if (this.dice_number == 5 && this.is_get_result == true) {
                    this.chk_is_get_result = true;
                    this.get_old_match_result();

                    // Replace 'song.mp3' with your file path or URL
                    this.starting_song.pause(); // Pause the audio
                    this.starting_song.currentTime = 0;
                    //    this.result_song = new Audio('audio/result.mp3'); // Replace 'song.mp3' with your file path or URL

                    this.result_song.play();





                } else if (this.rot_number == this.dice_number && this.is_get_result == true) {
                    this.chk_is_get_result = true;
                    this.get_old_match_result();

                    // Replace 'song.mp3' with your file path or URL
                    this.starting_song.pause(); // Pause the audio
                    this.starting_song.currentTime = 0;
                    //    this.result_song = new Audio('audio/result.mp3'); // Replace 'song.mp3' with your file path or URL

                    this.result_song.play();


                }
                else {
                    this.load_func();
                }



            }, this.count_down_duration_time);


        },
        myFunction() {

        },





    },
}
</script>

<style lang="scss" scoped>
.btn-primary {
    background: rgba(128, 0, 128, 0.456) !important;
    border: 1px solid white !important;

}

.btn-primary:disabled {
    background: rgba(128, 0, 128, 0.456);

}

.btn-primary:active {
    background: rgba(128, 0, 128, 0.456) !important;
    border: 1px solid white;

}

.btn-primary:hover {
    background: rgba(128, 0, 128, 0.456) !important;
    border: 1px solid white;
}

.btn-primary:focus {
    background: rgba(128, 0, 128, 0.456) !important;
    border: 1px solid white;
}


.noti_div_2 {
    width: 100%;

    white-space: nowrap;
    overflow: hidden;

}

.noti_text_2 {
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