<template>
  <meta name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

  <div style=" background: pink;">
    <div class="d-flex justify-content-center ">
      <div style="width:500px;height:100vh;background:lightblue;overflow:scroll;">
        <div v-if="$store.state.is_loading == false">

          <div class="header_top_nav" id="header_top_nav" style="margin-bottom:80px;display:none;">
            <div class="row gx-0"
              style="top:0;z-index:10000;height:80px;background:white;position:fixed;width:100%;max-width:500px;">
              <div class="col-6">
                <div class="d-flex justify-content-start my-1 ps-2 py-2">
                  <img style="border:0px solid;border-radius:15px;width:50px;height:50px;" src="images/maung.png"
                    alt="">
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-end my-1 pe-2 py-2">
                  <button class="btn btn-danger"> အကောင့်ဖြင့်၀င်ပါ </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="current_route != '/'" class="row gx-0">

            <div class="col-12 px-1 mb-2 mt-2 " style="">
              <div class="noti_div " style="line-height: 40px;
        height: 40px;">
                <p class="noti_text" style=" "> {{ dashboard_letter }}
                </p>
              </div>
            </div>
          </div>


          <router-view />

          <!-- <div class="header_footer_nav" style="margin-top:80px;" v-if="$store.state.is_auth==false">
          <div class="row gx-0" >
           
            <div class="col-12" >
              <div  style="bottom:0;z-index:10000;height:60px;background:white;position:fixed;width:100%;max-width:500px;" class="d-flex justify-content-end my-1 p-2 py-2">
              <router-link to="/login" class="btn btn-danger form-control"> အကောင့်ဖြင့်၀င်မည် </router-link>
              </div>
            </div>
          </div>
        </div> -->
        </div>


        <div class="center_loading" style="height:100vh" v-if="$store.state.is_loading == true">

          <img class="load_img" src="./assets/loading.gif" alt="">
          <img class="load_text" src="./assets/load_text.gif">
        </div>



      </div>
    </div>
  </div>




</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router';
import router from './router';
export default {
  data() {


    return {
      is_auth: this.$store.state.is_auth,
      app_version: "1.0." + Math.floor(Math.random() * (12 - 1 + 1)) + 1,
      is_update: false,
      dashboard_letter: "",
      channel_dashboard: Pusher.subscribe('get_dashboard_state'),
      current_route: "",

    }
  },
  methods: {
    preventZoom(event) {
      if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.type === 'wheel')) {
        event.preventDefault();
      }
    }
  },
  beforeUnMount() {
    document.removeEventListener('keydown', this.preventZoom);
    document.removeEventListener('wheel', this.preventZoom);
  },
  watch: {
    // Watch for route changes and update currentRoute
    '$route'(newRoute) {
      this.current_route = newRoute.path;


      const headers = {
        headers:
        {
          Authorization: `Bearer ` + this.$store.state.authToken,
          Accept: 'application/json',
        }

      }

      console.log(this.current_route)

      if (this.current_route == "") {
        
       
      

        // this.$store.state.authToken="";
        //  localStorage.setItem('authToken',"")

      }
      else {


        console.log(this.$store.state.authToken)


        axios.post(this.$store.state.api_url + "get_dashboard_letter",
          {
            //    get_date: this.get_date,


          },
          headers
        )
          .then(response => {
            if (response.status == 200) {
              this.dashboard_letter = response.data
            }

          })
          .catch(error => {
            console.error('Error:', error);
            //   alert('hello')
          });
      }
    }
  },
  mounted() {
    // Should log "/main" if you're on the /main route


    this.channel_dashboard.bind('get_dashboard_state', (data) => {

      const headers = {
        headers:
        {
          Authorization: `Bearer ` + this.$store.state.authToken,
          Accept: 'application/json',
        }

      }


      axios.post(this.$store.state.api_url + "get_dashboard_letter",
        {
          //    get_date: this.get_date,


        },
        headers
      )
        .then(response => {
          if (response.status == 200) {
            this.dashboard_letter = response.data
            alert(response.data)
          }

        })
        .catch(error => {
          console.error('Error:', error);
          //   alert('hello')
        });



    });

    const headers = {
      headers:
      {
        Authorization: `Bearer ` + this.$store.state.authToken,
        Accept: 'application/json',
      }

    }




    document.addEventListener('keydown', this.preventZoom);
    document.addEventListener('wheel', this.preventZoom, { passive: false });

    this.$store.state.is_loading = false;


    // alert(this.$store.state.is_loading)


    console.log(headers)

    axios.post(this.$store.state.api_url + "check_login",
      {



      }, headers
    )
      .then(response => {
        if (response.status == 200) {
          this.$store.state.is_auth = true;



        }
        else {

          document.getElementById("header_top_nav").style.display = "block";

          this.$router.push({ name: 'login' });

        }

      })
      .catch(error => {
        console.log(error)
        //   alert("push_")
        this.$router.push({ name: 'login' });
      });

    /*
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
        title: 'Error',
      })
    
    ;
    
    /*(async () => {
      await Toast.fire({
        icon: 'success',
        title: 'Success',
      })
      await Toast.fire({
        icon: 'error',
        title: 'Error',
      })
      await Toast.fire({
        icon: 'warning',
        title: 'Warning',
      })
      await Toast.fire({
        icon: 'info',
        title: 'Info',
      })
      await Toast.fire({
        icon: 'question',
        title: 'Question',
      })
    })()
    */


  },
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.center_loading {
  // height: 200px;
  top: 0;
  position: relative;
  // border: 3px solid green;
}


.center_loading .load_text {
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.center_loading .load_img {
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid;
  border-radius: 50%;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 80px -8px rgba(0, 255, 191, 1);
  -moz-box-shadow: 0px 0px 80px -8px rgba(0, 255, 191, 1);
  box-shadow: 0px 0px 80px -8px rgba(0, 255, 191, 1);
}

.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast.swal2-icon-warning {
  background-color: #f8bb86 !important;
}

.colored-toast.swal2-icon-info {
  background-color: #3fc3ee !important;
}

.colored-toast.swal2-icon-question {
  background-color: #87adbd !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}


.noti_div {
  width: 100%;
  background-color: white;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.noti_text {
  display: inline-block;
  color: red;
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
