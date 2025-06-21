<template>
  <div>



    <div v-if="is_loading">
    

      <div v-if="is_loading" style="top:50%;left:38%;position:absolute;">
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



    
    <div class="row gx-0" v-if="!is_loading"> 
<!-- 
      <div class="col-12 px-4 mb-2 mt-2 " style="">
        <div class="noti_div " style="line-height: 40px;
  height: 40px;">
          <p class="noti_text" style=" "> {{dashboard_letter}}
          </p>
        </div>
        </div>   -->

      <div class="col-12 px-4 pb-4">
        <!-- <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div style="background-color: lightblue;">
            <img  style="border:0px solid;border-radius:15px;" src="images/2d_logo.jpg" alt="">
          </div>
        </swiper-slide>
  
        <swiper-slide>
          <div style="background-color: lightblue;">
            <img  style="border:0px solid;border-radius:15px;" src="images/3d_logo.jpg" alt="">
          </div>
        </swiper-slide>
  
      
       
     
      </swiper> -->

      <div class="row my-2"> 
        <div class="col-12 d-flex">
           <table class="table table-borderless m-0 ">
            <tr>
              <td class="p-1 m-1 bg-transparent" style="width:70%;">
               <input type="text" readonly class="form-control"  v-model="main_balance" name="" id="">
                
              </td>
          
              <td class="p-1 m-1  bg-transparent" style="width:30%;">
                <router-link to="/history_transaction"   style="width:120px;"  class="btn btn-warning"> History </router-link>
                
              </td>
            </tr>
           </table>
        </div>
       
        </div>


                <!-- Modal -->
                <!-- <div class="modal fade" id="add_balance" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">ငွေထည့်မည်</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                       
                        <div class="row d-flex justify-content-center">
                          <div class="col-12 p-3">

                            <div class="row my-3">
                             
                              <div class="col-4">
                                <label for=""> Main Balance </label>
                              </div>
                              <div class="col-8">
                                
                                <input v-model="main_balance" readonly type="text" class="form-control" placeholder="ငွေထည့်ရန်နေရာ">
                              </div>
                             </div>


                             <div class="row my-3">
                             
                              <div class="col-12">
                                <select  required v-model="add_type" name="" class="form-select" id="">
                                  <option value=""> ရွေးမည် </option>
                                  <option value="body">  Body ငွေ</option>
                                  <option value="maung"> Maung ငွေ </option>
                               

                                </select>
                              </div>
                             </div>

                             <div class="row my-3">
                             
                              <div class="col-12">
                                <input v-model="add_amount" type="number" class="form-control" placeholder="ငွေထည့်ရန်နေရာ">
                              </div>
                             </div>

                       


                          </div>

                        </div>


                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="add_balance()" type="button" class="btn btn-primary"> Sure </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal fade" id="sub_balance" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">ငွေထုတ်မည်</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="row d-flex justify-content-center">
                          <div class="col-12 p-3">

                         


                            <div class="row my-3">
                             
                              <div class="col-12">
                                <select @change="change_sub_balance_type()" v-model="sub_type" name="" class="form-select" id="">
                                  <option value=""> ရွေးမည် </option>
                                  <option value="body">  Body ငွေ</option>
                                  <option value="maung"> Maung ငွေ </option>
                               

                                </select>
                              </div>
                            </div>

                            <div class="row my-3">
                             
                              <div class="col-4">
                                <label for=""> လက်ကျန်ငွေ </label>
                              </div>
                              <div class="col-8">
                                
                                <input v-model="sub_remain_balance" readonly type="text" class="form-control" placeholder="ငွေထည့်ရန်နေရာ">
                              </div>
                             </div>

                             <div class="row my-3">
                             
                              <div class="col-4">
                                <label for=""> Main Balance </label>
                              </div>
                              <div class="col-8">
                                
                                <input v-model="main_balance" readonly type="text" class="form-control" placeholder="ငွေထည့်ရန်နေရာ">
                              </div>
                             </div>

                             <div class="row my-3">
                             
                              <div class="col-12">
                                <input type="number" v-model="sub_amount" class="form-control" placeholder="ငွေထည့်ရန်နေရာ">
                              </div>
                             </div>

                       


                          </div>

                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="sub_balance()" type="button" class="btn btn-primary"> ထုတ်မည် </button>
                      </div>
                    </div>
                  </div>
                </div> -->

                


      <div class="row mb-2"> 
      
        <router-link v-if="check_list['game_one']==1" to="/game_1"  class="col-12 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/game_1.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span>  လေးကောင်ဂျင် </span>
            </div>
          </div>
         
        </router-link>


        <router-link  v-if="check_list['9am_2d']==1" to="/am_section_1"  class="col-6 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/2d_logo_2.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 9AM 2D </span>
            </div>
          </div>
         
        </router-link>


        <router-link v-if="check_list['12am_2d']==1" to="/am_section_2"  class="col-6 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/2d_logo_2.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 12AM 2D </span>
            </div>
          </div>
         
        </router-link>


        <router-link v-if="check_list['2pm_2d']==1"  to="/pm_section_1"  class="col-6 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/2d_logo_2.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 2PM 2D </span>
            </div>
          </div>
         
        </router-link>


        <router-link v-if="check_list['4pm_2d']==1"  to="/pm_section_2"  class="col-6 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/2d_logo_2.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 4PM 2D </span>
            </div>
          </div>
         
        </router-link>

        <router-link v-if="check_list['body']==1"  to="/body"  class="col-6 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/body_logo.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> ဘော်ဒီ/ဂိုးပေါင်း </span>
            </div>
          </div>
         
        </router-link>

        <router-link v-if="check_list['maung']==1"  to="/maung" class="col-6 my-2">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/maung_logo.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> မောင်း </span>
            </div>
          </div>
         
        </router-link>

        


        <router-link v-if="check_list['2d']==1"  class="col-6 my-2"  to="/lottery_2d">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/2d_logo.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 2D  </span>
            </div>
          </div>
         
        </router-link>


        <router-link v-if="check_list['3d']==1"  class="col-6 my-2"  to="/lottery_3d">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/3d_logo.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 3D </span>
            </div>
          </div>
         
        </router-link>

        <router-link v-if="check_list['2d_message']==1"  class="col-6 my-2"  to="/telegram">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/viber.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 2D Message </span>
            </div>
          </div>
         
        </router-link>

        <router-link v-if="check_list['3d_message']==1"  class="col-6 my-2"  to="/telegram_3d">
          <div style="width:100%;height:130px;border:0px solid;border-radius:15px;background:white;" class="align-content-center shadow btn" >
            <div class="d-flex justify-content-center my-1">
              <img  style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/viber.jpg" alt="">
            </div>

            <div class="d-flex justify-content-center  my-2">
                <span> 3D Message </span>
            </div>
          </div>
         
        </router-link>

   

        
      </div> 
    
      </div>
   
    </div>
   

  
  </div>
</template>

<script>

import router from '@/router';
  import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination,Autoplay],
    };
  },
  data () {
    

    return {
      dashboard_letter:"",
      add_type:"",
      add_amount:"",
      is_loading:false,
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
      sub_type:"",
      sub_amount:"",
      main_balance:"",
      sub_remain_balance:"0",
    }
  },
  methods: {

    change_sub_balance_type()
    {
      if( this.sub_type=="maung")
    {
      this.maung_check_balance();
      this.check_balance()

    }
    else if( this.sub_type=="body")
    {
      this.body_check_balance();
      this.check_balance()
    }
     
    },
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
    body_check_balance()
  {


          const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
            
            axios.post(this.$store.state.api_url + "get_body_balance_client",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                      this.sub_remain_balance=response.data
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

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
            
            axios.post(this.$store.state.api_url + "get_maung_balance_client",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                      this.sub_remain_balance=response.data
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

    },


  check_balance()
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

    add_balance() {
      this.is_loading=true;
const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
        let url="";
            if(this.add_type=="maung")
            {
              url="client_change_main_to_maung";
            }
            else if(this.add_type=="body")
            {
              url="client_change_main_to_body";

            }
            
axios.post(this.$store.state.api_url +url,
                {
                    "amount": this.add_amount,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                      console.log(response)
          
                      location.reload();
                    }

                })
                .catch(error => {
                  alert(error.response.data.message)
                    console.error('Error:', error);
                    //   alert('hello')
                });

    },
    sub_balance() {
      this.is_loading=true;
const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
        let url="";
            if(this.sub_type=="maung")
            {
              url="client_change_maung_to_main";
            }
            else if(this.sub_type=="body")
            {
              url="client_change_body_to_main";

            }
            
axios.post(this.$store.state.api_url +url,
                {
                    "amount": this.sub_amount,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                      console.log(response)
          
                      location.reload();
                    }

                })
                .catch(error => {
                  alert(error.response.data.message)
                    console.error('Error:', error);
                    //   alert('hello')
                });

    }
  },
  
  mounted () {
   
    window.addEventListener("popstate", function(event) {
  
  router.push("/");

});


    this.check_balance();
// alert(localStorage.getItem("is_reload"))



   if(localStorage.getItem('is_reload')=="false")
   {
    
    localStorage.setItem('is_reload',true);
   location.reload();

   }
   else{

const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }

            
// axios.post(this.$store.state.api_url + "get_dashboard_letter",
//                 {
//                     get_date: this.get_date,


//                 },
//                 headers
//             )
//                 .then(response => {
//                     if (response.status == 200) {
//                       this.dashboard_letter=response.data
//                     }

//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                     //   alert('hello')
//                 });

   }

   this.check_show_list();

  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height:250px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

</style>