<template>
    <div>
      <div class="row d-flex justify-content-center align-items-center gx-0" style="height:70vh;">
        <div class="col-11">
          <div class="shadow p-5 rounded bg-warning text-black">
              <h2 class="text-center">  <span style="color:red;"> 215xBet </span> မှကြိုဆိုပါသည် </h2>
              <input v-model="username" placeholder="Username" class="form-control my-3" type="text" name="" id="">

              <input v-model="password" placeholder="Password" class="form-control my-3" type="password" name="" id="">

              <div class="form-check text-start my-3">
                <input v-model="remember_me" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label " for="flexCheckDefault">
                  Remember Me
                </label>
              </div>

            <!-- <div class="row my-3">
              <div class="col-3">
                  Username 
              </div>
              <div class="col-9">
  
              </div>
  
            </div>
  
            <div class="row my-3">
              <div class="col-3">
                  Password 
              </div>
              <div class="col-9">
  
              </div>
  
            </div> -->
  
            <button @click="login()" class="form-control btn btn-primary"> Login </button>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'


  export default {
    data () {
      
  
      return {
        username:"",
        password:"",
        remember_me:false,
        
        api_url:this.$store.state.api_url,
      }
    },
    mounted () {

      
     
      if(localStorage.getItem("username") && localStorage.getItem("password"))
    {
      this.username=localStorage.getItem("username")
      this.password=localStorage.getItem("password")
      this.remember_me=true;
    }
    
    },
    methods: {
    
    
      login(){
        axios.post(this.api_url+"login", 
          {
            username:this.username,
            password:this.password,

          }
        )
        .then(response => {
          if(response.status==200)
          {
            localStorage.setItem('is_reload',"false");
            if(this.remember_me==true)
            {
              localStorage.setItem("username",this.username);
              localStorage.setItem("password",this.password);

            }
            else
            {
              localStorage.removeItem("username");
              localStorage.removeItem("password");
            }
    


            this.$store.state.is_auth=true;
            this.$store.state.authToken=response.data.token;
            localStorage.setItem('authToken', response.data.token);

            this.$router.push({ name: 'home' });
          }
        
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>