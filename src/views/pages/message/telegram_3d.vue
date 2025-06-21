<template>
    <div style="background:white;">
        <div v-if="is_nav" style="background:white;width:200px;height:100vh;position:fixed;z-index:100000;">
           

            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-end">
                    <button @click="show_nav()" class="btn btn-info"> <img style="width:25px;height:25px;" src="images/menu-bar.png" alt="">  </button>


                </li>
                <a href="/main" class="list-group-item" > မူလစာမျက်နှာ  </a>
                <a  href="/maung" class="list-group-item"> မောင်း  </a>
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

        <div class="row gx-0">
            <div class="col-12  p-1">
                <input  @change="get_telegram_message()" type="date" v-model="get_date"  class="form-control bg-warning" name="" id="">
            </div>
            <!-- <div class="col-6 p-1">
                <select @change="get_telegram_message()" v-model="get_am_pm"  class=" form-control"> 
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
    
                </select>
    
            </div> -->
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




        <div v-if="!is_save_loading && !is_read_loading" class=" gx-0 " style="margin-bottom: 0px; height:80vh;overflow-y:scroll;">
            
            <!-- <div class="row my-3">
                <div class="col-6">
                    <button class="btn btn-info form-control" @click="joinTelegramGroup()"> Join Telegram </button>
                </div>
                <div class="col-6">
                    <button class="btn btn-info form-control" @click="check_telegram()" > Check Telegram </button>
                </div>
                
                <div class="col-12 my-3" v-if="username && telegram_id">
                  <span style="font-weight:900;color:red;">  {{ username }} </span>  နဲ့အောင်မြင်စွာချိတ်ချက်ထားပါသည်
                </div>

            </div> -->

            <div class="row my-1 gx-0" style="margin-bottom:100px !important;" >
                <div class="col-12  py-1 px-3 ">
                   
                    <div class="row" id="tg_messages"> 
                        <div  v-for="(tg,indx) in telegram_message" class="col-12" >
                            <div class="row" @click="short_long('current_message_id_'+indx)" :id="'last_message_'+indx">
  
                              <div class="col d-flex justify-content-center align-items-center" style="max-width:100px;">
                                  <h5 style="border: 1px solid;width:40px;border-radius:10%;" class="p-1"> {{++indx}} </h5>
                              </div>

                            <div style="max-height:80px;overflow:hidden;" :id="'current_message_id_'+indx" class="col bg-info shadow my-2 px-3 py-1 rounded col">
                                <div class="row">
                              
                                    <div class="col-12 text-end">
                                        <div style="white-space: pre-wrap;word-wrap: break-word;">
                                            {{ tg["edit_message_text"]??tg["message_text"] }}
                                          </div>
                                    </div>
    
                                    <div class="col-12 my-1 text-end"  style="font-size:12px;">
                                        {{ format_time(tg["created_at"]) }}
                                    </div>
    
                                 
                                </div>
                            </div>
                           
                          </div>
                         
                     

                            
                            </div>
                    </div>
                      
                     
                </div>
            </div>

         




        </div>

        <div class="p-2"   style="bottom:0;position:fixed;width:100%;max-width:500px;z-index:1000;">
      
                <div class="row gx-0">
                    <div class="col-12 my-1">
                        <textarea id="textarea_box"  v-model="message_data" class="form-control" :rows="auto_grow()" ></textarea>
                    </div>
                    <div class="col-4 px-2">
                        <button class="form-control btn btn-danger" @click="  cancleMessage()"> Cancle </button>
                     </div>
                     <div class="col-4 px-2">
                        <button class="form-control btn btn-warning" @click="  getClipboardData()"> Paste </button>
                     </div>


                    <div class="col-4 px-2">
                       <button :disabled="is_sending" class="form-control btn btn-warning" @click="send_message()"> Send </button>
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
            main_balance:0,
            message_data:"",
            channel: null,
            is_sending:false,
            telegram_message:[],
            get_am_pm:"",
            get_date:"",

            currentDate: "",
            currentMatch: [],
            selected_data: [],
            get_amount: 0,
            message: "hello",
            is_nav:false,
            league_list:[],
            match_data:[],
            league_id:"",
            telegram_id:"",
            username:"",
        }
    },


    mounted() {
        let date = new Date();
         this.get_am_pm = date.getHours() >= 12 ? "pm" : "am";
         this.get_date=date.getFullYear() + "-" +
    String(date.getMonth() + 1).padStart(2, '0') + "-" +
    String(date.getDate()).padStart(2, '0');
        window.handleClipboardData = this.handleClipboardData;



this.get_user_telegram();

        window.addEventListener("popstate", function(event) {
   
        router.push("/main");
});
this.get_telegram_message();
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        this.currentDate = `${yyyy}-${mm}-${dd}`;

        
this.get_channel();
    },
    methods: {

        cancleMessage()
        {
            this.message_data="";
        },
        short_long(data)
        {
            console.log(data);
            let current= document.getElementById(data);
            if(current.style.maxHeight=="80px")
        {
            current.style.maxHeight="100%";
        }else{
            current.style.maxHeight="80px";
        }
            current.scrollIntoView();
        },

        get_channel()
        {
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
       
        axios.post(this.$store.state.api_url + "get_channel_code",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                  
                        this.channel=Pusher.subscribe('update_message_channel_'+response.data);
                   
                    }

                    this.channel.bind('update_event', (data) => {
            this.get_update_message();
         
        });
                    console.log(response.data)

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });

        },


        get_update_message()
        {
        
            const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
       
        axios.post(this.$store.state.api_url + "get_update_message",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                        console.log(response.data)
                        this.telegram_message.forEach(et => {
                           response.data.forEach(er => {
                            if(er.id==et.id)
                           {
                            et.edit_message_text=er.edit_message_text;
                           }
                            
                           });
                   });
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
    
        joinTelegramGroup() {
            // Replace 'your_group_chat_id' with your actual Telegram group chat ID
            const telegramGroupLink = 'https://t.me/KAM2DBot?start=kam5kpg0001';
            window.open(telegramGroupLink, '_blank'); // Open link in a new tab
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
        this.message_data=text;


    } catch (err) {
        alert(err);
        console.error('Failed to read clipboard contents: ', err);
    }
}

},


     handleClipboardData(data1)
        {
            try {
              

                const text = data1;
               this.message_data=text;
            } catch (err) {
                alert(err);
                console.error('Failed to read clipboard contents: ', err);
            }

      
          


      
        },

     get_user_telegram()
     {
        const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
       
        axios.post(this.$store.state.api_url + "get_user_telegram",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                    this.username=response.data.username
                    this.telegram_id=response.data.telegram_id
                   
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
     },


     format_time(get_data)
     {
        const dateStr = get_data
const date = new Date(dateStr);

// Get hours, minutes and determine AM/PM
let hours = date.getHours();
let minutes = date.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';

// Convert 24-hour format to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // If the hour is 0, set it to 12

// Pad minutes with leading zeros if needed
minutes = minutes < 10 ? '0' + minutes : minutes;

const formattedTime = `${hours}:${minutes} ${ampm}`;
return formattedTime;
     },

     auto_grow() {
        if(this.message_data.split('\n').length<=3)
     {
      
        return 3;
     }
     else if(this.message_data.split('\n').length<=10 && this.message_data.split('\n').length>3)
     {
        return this.message_data.split('\n').length;
     }
     else{
        return 10;
     }

},


     get_telegram_message()
     {
        const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
       
        axios.post(this.$store.state.api_url + "get_telegram_message_3d",
                {
                   get_date: this.get_date,
                   get_am_pm: this.get_am_pm,

                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                   console.log(response)
                   this.telegram_message=response.data

                   if(this.telegram_message.length!=0)
                   {

                    setTimeout(() => {
                    const messagesContainer = document.getElementById('tg_messages');

                        const lastMessage = messagesContainer.lastElementChild;
                    lastMessage.scrollIntoView();
                   
                    }, 1);
                  
                   }
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    //   alert('hello')
                });
     },

     send_message()
     {
        this.is_sending=true
        const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
           // this.is_save_loading=true;
        axios.post(this.$store.state.api_url + "send_message_by_telegram_3d",
                {
                  message: this.message_data,


                },
                headers
            )
                .then(response => {
                    this.is_sending=false
                //    this.is_save_loading=false;
                 this.message_data="";
                 this.get_telegram_message();

                })
                .catch(error => {
                    this.message_data="";
                 this.get_telegram_message();
                 this.is_sending=false;
                 
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
     },


     check_telegram()
     {


        const headers = {
                headers:
                {
                    Authorization: `Bearer ` + this.$store.state.authToken,
                    Accept: 'application/json',
                }

            }
            
            axios.post(this.$store.state.api_url + "check_telegram",
                {
                  //  get_date: this.get_date,


                },
                headers
            )
                .then(response => {
                    if (response.status == 200) {
                    this.username=response.data.username
                    this.telegram_id=response.data.telegram_id
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
     

       

    },
}
</script>

<style lang="scss" scoped></style>