<template>
    <div class="settings bg-gray-100">
       <sideBarVue></sideBarVue>
       <div class="SettingsTitle ">
  <h1 class=" text-gray-700 text-left m-3 ml-10 font-bold capitalize">Settings</h1> 
  <div class="settings-page m-[20px] grid gap-5">
    <div class="p-[20px] bg-white rounded-[10px] text-left">
            <h2 class="mt-0 mb-[10px] font-bold">General Info</h2>
            <p class="mt-0 mb-[20px] text-gray-400 text-sm">General Information About Your Account</p>
            <div class="mb-[15px]">
              <label class="text-gray-400 text-sm block mb-[10px]" for="first">First Name</label>
              <input
                class="border-none border-ccc p-[10px] rounded-md block w-full"
                type="text"
                id="first"
              v-model="firstName"
                v-text="firstName"
                placeholder="First Name"
              />
            </div>
            <div class="mb-[15px]">
              <label class="text-gray-400 text-sm block mb-[5px]" for="last">Last Name</label>
              <input
                class="border-none border-ccc  p-[10px] rounded-md block w-full"
                id="last"
                type="text"
                v-model="lastName"
                placeholder="Last Name"
                v-text="lastName"
              />
            </div>
            <div>
              <label class="text-gray-400 text-sm block mb-[5px]" for="email">Email</label>
              <div class="emailBox relative mb-2">
                <input
                class="email border-none border-ccc p-[10px] rounded-md  w-full mr-[10px] "
                id="email"
                type="email"
                value="o@nn.sa"            
                :disabled="validated"
                v-model="email"
                placeholder="email"
                v-text="email"
              />
              <a href="" class="editEmail" @click.prevent="enapled"><i class="fa-solid fa-pencil"></i></a></div>
            </div>
            <div class="update text-right">
                 <a class="text-blue-700 text-base text-right" href="#" @click.prevent="changeData">Change</a>
            </div>
          </div>
           <!-- Start Settings Box -->
          <div class="widgets-control p-[20px] bg-white rounded-[10px] text-left">
            <h2 class="mt-0 mb-[10px] font-bold">Widgets Control</h2>
            <p class="mt-0 mb-[20px] text-gray-400 text-base">Show/Hide Widgets</p>
            <div class="control flex items-center mb-[15px]">
              <input type="checkbox" id="one" :checked="showDarft" v-model="showDarft" @click="ischecked('showDarft',!showDarft)" />
              <label for="one">Quick Draft</label>
            </div>
            <div class="control flex items-center mb-[15px]">
              <input type="checkbox" id="two" :checked="showTargets" v-model="showTargets" @click="ischecked('showTargets',!showTargets)" />
              <label for="two">Yearly Targets</label>
            </div>
            <div class="control flex items-center mb-[15px]">
              <input type="checkbox" id="three" :checked="showTasks"  v-model="showTasks" @click="ischecked('showTasks',!showTasks)"/>
              <label for="three">Latest Tasks</label>
            </div>
            <div class="control flex items-center mb-[15px]">
              <input type="checkbox" id="four" :checked="showTopItems" v-model="showTopItems" @click="ischecked('showTopItems',!showTopItems)"/>
              <label for="four">Top Search Items</label>
            </div>
          </div>
          <!-- End Settings Box -->
          <!-- End Settings Box -->


  </div>
 </div>
    </div>
    
</template>
<script>
import sideBarVue from './sideBar.vue';
export default {
    components: { sideBarVue },
    name:'Settings',
    data(){
        return{
            hello:"hi from home",
            username:"",
            validated:true,
            firstName:"haya",
            lastName:"ahmed",
            email:"haya@gmail.com",
            showTargets:true,
            showDarft:true,
            showTasks:true,
            showTopItems:true,
            data:[]
    ,    }
    },
    methods:{
        changeData(){
          //  this.data.push({name:this.firstName,lastName:this.lastName,email:"haya@gmail.com",phoneNum:'0123456789'});
            localStorage.setItem('AdminName',JSON.stringify(this.firstName));
            localStorage.setItem('AdminLastName',JSON.stringify(this.lastName));
            localStorage.setItem('AdminEmail',JSON.stringify(this.email));
        },
        enapled(){
            this.validated=!this.validated;
            console.log(this.validated);
        },
        ischecked(checked,checkedVal){
            console.log(`${checked} val is: ${checkedVal}`);
            localStorage.setItem(`${checked}`,JSON.stringify(checkedVal));
        }
    },
    created(){
       // this.data=localStorage.getItem('AdminData')?JSON.parse( localStorage.getItem("AdminData")):[];
       this.firstName=localStorage.getItem('AdminName')?JSON.parse( localStorage.getItem("AdminName")):this.firstName;
       this.lastName=localStorage.getItem('AdminLastName')?JSON.parse( localStorage.getItem("AdminLastName")):this.lastName;
       this.email=localStorage.getItem('AdminEmail')?JSON.parse( localStorage.getItem("AdminEmail")):this.email;
       this.showDarft=localStorage.getItem('showDarft')?JSON.parse(localStorage.getItem('showDarft')):true;
       this.showTargets=localStorage.getItem('showTargets')?JSON.parse(localStorage.getItem('showTargets')):true;
       this.showTasks=localStorage.getItem('showTasks')?JSON.parse(localStorage.getItem('showTasks')):true;
       this.showTopItems=localStorage.getItem('showTopItems')?JSON.parse(localStorage.getItem('showTopItems')):true;

   console.log(this.showDarft);

    }
}
</script>
<style lang="scss" scoped>
$grey:white;
$blue: rgb(2 132 199);
$dark-blue:rgb(3 105 161);
$light-gray:rgb(229 231 235);
$dark-gray:rgb(156 163 175);
$text-dark-color:rgb(55 65 81 );
$green:#22c55e;
.settings{
    position: relative;
    left: 20px;
    /* font-family: 'Open Sans', sans-serif; */
    font-family: Arial, Helvetica, sans-serif;

    .SettingsTitle{
   
   padding: 50px;
       text-transform: capitalize;
       color: #605f5f;
       font-family: 'Lora', serif;
       // letter-spacing: 1px;
       font-size: 22px;
       line-height: 1.2;
       h1{
         position:relative;
         &::before,&::after{
         position:absolute;
         content: "";
         height: 3px;
         bottom: -10px;
         left: 0;
         }
         &::before{
           background-color: white;
           width: 100px;
         }
         &::after{
           background-color: black;
           width: 40px;
         }
       }

       @media (max-width:800px) {
       font-size: 16px;
         font-weight: 500;
     
   }
   }
   .settings-page{
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    @media (max-width:767px) {
        grid-template-columns: minmax(100px, 1fr);
    margin-left: 10px;
    margin-right: 10px;
    gap: 10px;
    }
    div{
        div{
        .emailBox{
            /* width: calc(100% - 80px); */
            .email{
           
           }
           .editEmail{
            position: absolute;
            top: 30%;
            right: 20px;
           }
        }
        }
    }
    .widgets-control{
        font-family:'Times New Roman', Times, serif;
        .control{
            label{
                cursor: pointer;
                position: relative;
                padding-left: 30px;
                &:hover{
                    &::before{
                        border-color: $blue;
                    }
                }
                &::before,&::after{
                    position: absolute;
                    left:0;
                    top: 50%;
                    margin-top: -9px;//to center it vertical
                    border-radius: 3px;
                }
                &::before{
                    content: "";
                    width: 14px;
                    height: 14px;
                    border: 2px solid $dark-gray;
                }
                &::after{
                    font-family: var(--fa-style-family-classic);
                    content: '\f00c';
                    font-weight: 900;
                    color: white;
                    background-color: $blue;
                    font-size: 12px;
                    width: 16px;
                    height: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.3s;
                    transform: scale(0) rotate(360deg);
                    
                }
            }
            input[type='checkbox']{
                -webkit-appearance: none;
                -appearance:none ;
            &:checked{
                &+label::after{
                    transform: scale(1);

                }
            }
        }
        } 
    }
   }
   .border-ccc{
                border: 1px solid #ccc;
            }
}

</style>