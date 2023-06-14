<template>
    <div class="SideBarHome" >
        <div class="sidebar hide h-full bg-white" :class="{ hide:sideBarClosed }">
        <div class="title capitalize h-[50px] m-5 sticky top-0 left-0 z-[100] bg-white"><a href="" class="flex justify-center items-center text-2xl font-bold text-blue-400 tracking-wide "> <i class="fa-solid fa-face-smile"></i>  adminPanal</a></div>
        <!-- <div class="toggle-menu" @click="toggleSideBar">
            <i class='bx bx-menu toggle-sidebar text-lg cursor-pointer'></i>
        </div> -->
        <ul class="sidebar-menu">
                <li class="cursor-pointer capitalize"><a href="" @click.prevent="goto('Home')"><i class="fa-solid fa-house"></i></a></li>
 
     
            <li class="cursor-pointer capitalize"><a href="" @click.prevent="goto('Home')" class="dash-link"><i class="fa-solid fa-grip"></i></a></li>
     
            <li class="divider text-gray-700 flex justify-start" data-text="main">Main</li>
            <!-- <li  @click.prevent="isActive=!isActive" class="cursor-pointer capitalize">
                <a :class="{ active: isActive }"  href=""><i class="fa-solid fa-inbox"></i><i :class="{ active: isActive }" class="icon-right fa-solid fa-circle-chevron-right"></i></a>
                <ul :class="{ active: isActive }" class="slide-dropdown">
                    <li><a href="">alert</a></li>
                    <li><a href="">Badges</a></li>
                    <li><a href="">Breadcrumbs</a></li>
                    <li><a href="#">buttons</a></li>
                </ul>
             </li> -->
             <li class="cursor-pointer capitalize"><a href="#" @click.prevent="goto('profile')"><i class='bx bx-user'></i> </a></li>
             <li class="cursor-pointer capitalize"><a href="#" @click.prevent="goto('Settings')"><i class="fa-sharp fa-solid fa-gear"></i> </a></li>
             <li class="cursor-pointer capitalize"><a href="#charts" @click.prevent="goto('Home')" ><i class="fa-solid fa-chart-line"></i> </a></li>
             <li class="cursor-pointer capitalize"><a href="#" @click.prevent="goto('Home')"><i class='bx bxs-widget'></i></a></li>
             <!-- <li class="driver cursor-pointer capitalize">table and forms</li> -->
             <li class="cursor-pointer capitalize"><a href="" @click.prevent="goto('CrudDashboard')"><i class="fa-solid fa-table"></i></a></li>

            <!-- <li class="cursor-pointer capitalize">settings</li> -->
        </ul>
        <div class="ads p-5 w-full">
            <div class="wrapper bg-gray-300 p-5 rounded-[10px]">
                <a href="" class="btn-upgrade text-sm flex justify-center items-center font-semibold">Upgrade</a>
                <p class="text-gray-500 text-xs text-center">Become a <span class="">PRO</span> member and enjoy <span class="capitalize">All features</span> </p>
            </div>
        </div>   
     </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import {bus} from "../main";
export default{
    name:"sideBar",
    props:['sideBarClosed'],
    data(){
        return{
            dropp:false,
            isActive:false,
         //   sideBarClosed:false,
        }
    }, 
    methods:{
        ...mapActions(['redirectto']),
      
         toggleSideBar(e){
            let sideDivider=document.querySelector(".divider");
            let toggleMenu=document.querySelector(".SideBarHome .toggle-menu");
            console.log(toggleMenu);
            if(toggleMenu){
                e.preventDefault();
                this.sideBarClosed=!this.sideBarClosed;
                console.log(this.sideBarClosed);
                bus.$emit('toggleSideBar',this.sideBarClosed);

                if(this.sideBarClosed==true){
                    sideDivider.textContent='-';
                }
                else{
                    sideDivider.textContent=sideDivider.dataset.text;
                }
        }
            console.log(this.sideBarClosed);
          
        },
        goto(routed){
            this.redirectto({val:routed});
        },
     

    },
    mounted(){
        let sideDivider=document.querySelector(".divider");
        let sidebar=document.querySelector(".sidebar");
        if(sidebar.classList.contains("hide")){
            sideDivider.textContent='-';
        }
        }
        ,created(){
            //on the newhome created to comunicate it 

             //  bus.$on('toggleSideBar',(data)=>{
        //    this.sideBarClosed=data;
           // this.closeSidemenu=this.sideBarClosed;
            // if(this.sideBarClosed==true){
            //     document.querySelector("#content").classList.add("closed");
            // }
            // else{
            //     document.querySelector("#content").classList.remove("closed");
            //   //  this.sideBarClosed=false;
            // }
       // });
        }
}
</script>
<style lang="scss">
$grey: rgb(31 41 55);
$blue: rgb(2 132 199);
$dark-blue:rgb(3 105 161);
$light-gray:rgb(229 231 235);
$dark-gray:rgb(156 163 175);
$text-dark-color:rgb(55 65 81 );
.SideBarHome{
.sidebar{
    max-width: 260px;
    width: 100%;
    color: rgb(57, 65, 78);
    overflow-y: auto;
    overflow: visible;
     scrollbar-width: none;
    position: fixed;
    transition:all 0.3s ease;
    z-index: 1000;
    top: 0;
    left: 0;
    &.hide{
        max-width: 60px;
        .title{
            justify-content: flex-start;
            a{
                color: transparent;
            }
            i{
              //  color: $light-gray;
              color: $text-dark-color;
                margin-left:150px;
                padding-right: 6;
            }

        }
        .sidebar-menu{
            padding: 0 6px;

            li{
                i.icon-right{
                       display: none;

                    }
                &:hover{
                    color: transparent;
                    i{
                        color: $grey;
                    }
                }
                &.active{
                    // color: transparent;
                    // background-color: transparent;
                    display: none;
                }
                &.divider{
               justify-content: center;
               font-size: 15px;
               &:hover{
                 color: rgb(55 65 81);
               }
            }
        }
            ul.slide-dropdown{
                display: none;
            }
            a{
                color: transparent;
                i{
                   // color: rgb(246, 241, 241);
                   color: $text-dark-color;
                    margin-right: 20px;

                }
            &.active{
                color: transparent;
                i{
                   color: $grey !important;
                  //color: $text-dark-color !important;
             
                };
            }
            &:hover{
                color: transparent;
               // background-color: $text-dark-color;
              //  color:$grey ;
                    i{
                     color: $grey !important;
                     //  color: $text-dark-color !important;
                       &:hover{
                       // background-color: $text-dark-color;
                         color:$grey ;
                       }
                    
                    }
                    }
        }
        }
        .ads{
            display: none;
        }
    }
    &::-webkit-scrollbar{
display: none;
    }
    .title{
        transition: all 0.3s ease;
    }
    .toggle-menu {
    position: absolute;
    right: 0;
    top:8%;
    background-color: $grey;
   //background: transparent;
   // color: $light-gray;
   color: $text-dark-color;
    text-align: center;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.toggle-menu .toggle-sidebar {
    width: 30px;
    padding: 8px 10px;
    font-size: 18px;
}
    ul{
        &.sidebar-menu{
        // display: block;
        margin: 50px 0;
        padding: 0 20px;

       > li{
            // margin: 10px;
          &.divider{
            transition: all 0.3s ease;
            margin: 0;
            margin-top: 48px;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 700;
            white-space:nowrap;

          }
          >  a{
            // display: block;
            display: flex;
               align-items: center;
               font-size: 14px;
               //color: rgb(246, 241, 241);
               color: $text-dark-color;
               padding: 12px 12px 12px 0;
               transition: 0.3s all ease;
               border-radius: 10px;
               margin: 4px 0;
               white-space:nowrap;
               &:hover{
              //  background: rgb(238, 235, 235);
              background-color: $text-dark-color;
                color:$grey ;
               }
               &.active,&.active:hover{
                background: $blue;
                color: $grey;
               }
            i{
                min-width: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 6px;
                &.icon-right{
                    margin-left: auto;
                    transition: all 0.3s ease;
                    &.active{
                        transform: rotateZ(90deg);

                    }
                }
            }
        }

    
        }
        li{
            ul.slide-dropdown{
                padding-left: 54px;
                max-height: 0;
                overflow-y: hidden;
                transition: 0.3s all ease;
                a{
                    display: flex;
               align-items: center;
               margin: 4px 0;
               margin: 10px;
                &:hover{
                    color: $blue;
                }
            
            }
                &.active{
                    max-height: 1000px;
                }

            }
        }
    }
    }
    .ads{
        color: $grey;
        .btn-upgrade{
            padding: 12px 0;
            color:rgb(235, 229, 229) ;
            background-color: $blue;
            transition: 0.3s all ease;
            border-radius: 5px;
            &:hover{
                background-color: $dark-blue;
            }
            
        }
        p{
            padding-top: 5px;
            span{
                font-weight: 700;
            }
        }
    }
}
   
    ul{
        li{
            list-style: none;

    }}
    @media screen and (max-width:768px) {
        #content{
            position: relative;
        width: calc(100% - 60px);
        left: 60px;
        transition: all 0.3s ease;
        }
      nav{  .navLink,.divider{
        display: none;

        }
        .content-data{
             .form-group{ 
                flex-basis: 375px;

        }
    }
    }
}
}
</style>