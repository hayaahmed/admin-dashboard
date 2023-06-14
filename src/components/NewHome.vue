<template>
    <div  class="home bg-gray-100">
       <div class="SideBarHome" >
        <div class="sidebar h-full bg-white" :class="{ hide:sideBarClosed }">
        <div class="title capitalize h-[50px] m-5 sticky top-0 left-0 z-[100] bg-white"><a href="" class="flex justify-center items-center text-2xl font-bold text-blue-400 tracking-wide "> <i class="fa-solid fa-face-smile"></i>  adminPanal</a></div>
        <div class="toggle-menu" @click="toggleSideBar">
            <i class='bx bx-menu toggle-sidebar text-lg cursor-pointer'></i>
        </div>
        <ul class="sidebar-menu">
            <li class="cursor-pointer capitalize"><a href="#" @click.prevent class="active" ><i class="fa-solid fa-house"></i> home</a></li>
            <li class="cursor-pointer capitalize"><a href="#" @click.prevent><i class="fa-solid fa-grip"></i> dashboard</a></li>
            <li class="divider text-gray-700 flex justify-start" data-text="main">Main</li>
            <li  @click.prevent="isActive2=!isActive2" class="cursor-pointer capitalize">
                <a :class="{ active: isActive2 }"  href=""><i class="fa-solid fa-inbox"></i> elements <i :class="{ active: isActive2 }" class="icon-right fa-solid fa-circle-chevron-right"></i></a>
                <ul :class="{ active: isActive2 }" class="slide-dropdown">
                    <li><a href="">alert</a></li>
                    <li><a href="">Badges</a></li>
                    <li><a href="">Breadcrumbs</a></li>
                    <li><a href="#">buttons</a></li>
                </ul>
             </li>
             <li class="cursor-pointer capitalize"><a href="#" @click.prevent="goto('profile')"><i class='bx bx-user'></i> profile</a></li>
             <li class="cursor-pointer capitalize"><a href="#" @click.prevent="goto('Settings')"><i class="fa-sharp fa-solid fa-gear"></i> Settings</a></li>

             <li class="cursor-pointer capitalize"><a href="#charts"><i class="fa-solid fa-chart-line"></i> charts</a></li>
             <li class="cursor-pointer capitalize"><a href="#widgets"><i class='bx bxs-widget'></i> widgets</a></li>
             <li class="cursor-pointer capitalize"><a href="" @click.prevent="goto('CrudDashboard')"><i class="fa-solid fa-table"></i> tables</a></li>
        </ul>
        <div class="ads p-5 w-full">
            <div class="wrapper bg-gray-300 p-5 rounded-[10px]">
                <a href="" class="btn-upgrade text-sm flex justify-center items-center font-semibold">Upgrade</a>
                <p class="text-gray-500 text-xs text-center">Become a <span class="">PRO</span> member and enjoy <span class="capitalize">All features</span> </p>
            </div>
        </div>   
     </div>
    </div>
        <!-- <p class="center uppercase">my dashboard</p> -->
       <section id="content" >
        <nav @click.prevent class="bg-white h-16 flex items-center gap-7 sticky top-0 left-0 z-[100]">
            <!-- <i class='bx bx-menu toggle-sidebar text-lg cursor-pointer' ></i> -->
        <form action="#" class="ml-[50px] w-[400px] mr-auto">
           <div class="form-groub relative">
            <input class="w-full bg-gray-200 border-none outline-none rounded-md py-[10px] px-9" type="text" placeholder="Search...">
            <i class='bx bx-search icon absolute' ></i>
           </div>
        </form>
        <a @click.prevent href="" class="navLink">
            <i class='bx bxs-bell icon' ></i>
            <span class="badge">5</span>
        </a>
        <a @click.prevent href="" class="navLink">
            <i class='bx bxs-message-square-dots icon'></i>
            <span class="badge">8</span>
        </a>
        <span class="divider w-[1px] h-[6px] bg-gray-400 block"></span>
        <div class="profile">
            <!-- @keydown.esc="closeList" -->
            <img   @click="activeList"  src="data:image/jpeg;base64,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"  alt="">
            <ul :class="{show: listActive }" class="profile-link absolute right-0 bg-gray-50 py-[10px] px-0 rounded-[10px]">
                <li><a @click.prevent="goto('profile')" href="#"><i class='bx bxs-user-circle' ></i> Profile</a></li>
                <li><a @click.prevent="goto('Settings')" href="#"><i class="fa-solid fa-gear"></i> Settings</a></li>
                <li><a @click.prevent href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
            </ul>
        </div>
       
        </nav>
        <main id="dashboard" class="w-full text-left mt-8 mb-5">
        <h1 class="title text-[28px] font-semibold mb-[10px]">Dashboard</h1>
        <ul class="breadcrumbs flex gap-2">
            <li><a href="#">home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
        </ul>
        <div class="into-data mt-9 grid">
            <div class="card">
                <div class="head">
                    <div>
                        <h2>1600</h2>
                        <p>traffic</p>
                    </div>
                    <i class='bx bx-trending-up icon'></i>
                </div>
                <span class="progress" data-value="60"></span>
                <span class="label">60%</span>
            </div>
            <div class="card">
                <div class="head">
                    <div>
                        <h2>1300</h2>
                        <p>pageView</p>
                    </div>
                    <i class='bx bx-trending-down icon-down'></i>
                </div>
                <span class="progress" data-value="50"></span>
                <span class="label">50%</span>
            </div>
            <div class="card">
                <div class="head">
                    <div>
                        <h2>254</h2>
                        <p>sales</p>
                    </div>
                    <i class='bx bx-trending-up icon'></i>
                </div>
                <span class="progress" data-value="70"></span>
                <span class="label">70%</span>
            </div>
            <div class="card">
                <div class="head">
                    <div>
                        <h2>450</h2>
                        <p>visitors</p>
                    </div>
                    <i class='bx bx-trending-down icon-down'></i>
                </div>
                <span class="progress" data-value="40"></span>
                <span class="label">40%</span>
            </div>
        </div>
        <div class="data flex gap-5 mt-8 flex-wrap mb-8">
          <div class="content-data">
            <div class="head">
                <h3>Sales Report</h3>
                <div class="menu">
                    <i  class="fa-solid fa-ellipsis icon"></i>
                    <ul class="menu-link">
                        <li><a @click.prevent href="#">Edit</a></li>
                        <li><a @click.prevent href="#">Save</a></li>
                        <li><a @click.prevent href="#">Remove</a></li>
                    </ul>
                </div>
            </div>
            <div class="charts">
                <section id="charts">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </section>
            </div>

          </div>
          <div class="content-data">
            <div class="head">
                <h3 >Chatbox</h3>
                <div class="menu">
                    <i  class="fa-solid fa-ellipsis icon"></i>
                    <ul class="menu-link">
                        <li><a @click.prevent href="#">Edit</a></li>
                        <li><a @click.prevent href="#">Save</a></li>
                        <li><a @click.prevent href="#">Remove</a></li>
                    </ul>
                </div>
            </div>
            <div class="chat-box w-full max-h-[300px] overflow-y-auto">
                <p class="day text-center"><span class="inline-block py-[6px] px-[12px] rounded-[20px] font-semibold text-xs bg-blue-100 text-blue-600 mb-3">Today</span></p>
                <div class="msg">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGBgaGBkYHBoaGhoYGBoYGhgZGhgYGBgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//
                        EAD4QAAEDAgMFBAgGAQIHAQAAAAEAAhEDIQQSMQVBUWFxIoGRoQYTMlKxwdHhFUJikvDxghTSFjNTcqKy4iP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQACAgIDAQADAQAAAAAAAAAAAQIREiEDMUFRBBNhQv/aAAwDAQACEQMRAD8A7B9JCFNPwoFNImgLWAiFWthrJoMRGtQIxRQRKdAgrVGHEyrupBMKFqbUX1IRQxFa1AUeYxEDV4BWhIojKvZV4qJQAhWwwJQ2ULrRc1BLE7IcSKLACjAKimUD
                        KVgkajSn3IFRiBNGY9iE8FanqVU0RwTsmjOZRuispwmX01QtQOj1QSguKK5L1EhgnuVJV3MUerQKjaARGheaERrVJsyMqqjtavPYmRQMOVsyG4QvByBlyrNKFKlADAV5QGvRGuQB55VWBS8qrCgAiq5qhrrqS5AFCFC9Ko5yZJ5xVQV6UMuQBcqrmrwcrEygAeVCexMQhvCAFXiyBmCYqBKPagRVz1XOoUSgDo2tRGtWPj/SChSpl4ex5jssa4Fzju09kcyud2f6bVM49cxnqzY+rBDm/qu45hy/oihJ7CXNFOmzv
                        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"  alt="">
              <div class="chat">
               <div class="profile">
                <span class="username">Haya</span>
                <span class="time">18:15</span>
               </div>
               <p>Hello</p>
              </div>
                </div>
              <div class="msg me" v-for="(chat,index) in msgsMe" :key="index">
                        <div class="chat">
               <div class="profile">
                <span class="time">{{chat.time}}</span>
               </div>
               <p>{{chat.msg}}</p>
              </div>
              </div>
              <div class="msg" v-for="(msg,i) in myReplyMsgs" :key="'A'+ i">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGBgaGBkYHBoaGhoYGBoYGhgZGhgYGBgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//
                        EAD4QAAEDAgMFBAgGAQIHAQAAAAEAAhEDIQQSMQVBUWFxIoGRoQYTMlKxwdHhFUJikvDxghTSFjNTcqKy4iP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQACAgIDAQADAQAAAAAAAAAAAQIREiEDMUFRBBNhQv/aAAwDAQACEQMRAD8A7B9JCFNPwoFNImgLWAiFWthrJoMRGtQIxRQRKdAgrVGHEyrupBMKFqbUX1IRQxFa1AUeYxEDV4BWhIojKvZV4qJQAhWwwJQ2ULrRc1BLE7IcSKLACjAKimUD
                        KVgkajSn3IFRiBNGY9iE8FanqVU0RwTsmjOZRuispwmX01QtQOj1QSguKK5L1EhgnuVJV3MUerQKjaARGheaERrVJsyMqqjtavPYmRQMOVsyG4QvByBlyrNKFKlADAV5QGvRGuQB55VWBS8qrCgAiq5qhrrqS5AFCFC9Ko5yZJ5xVQV6UMuQBcqrmrwcrEygAeVCexMQhvCAFXiyBmCYqBKPagRVz1XOoUSgDo2tRGtWPj/SChSpl4ex5jssa4Fzju09kcyud2f6bVM49cxnqzY+rBDm/qu45hy/oihJ7CXNFOmzv
                        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"  alt="">
              <div class="chat">
               <div class="profile">
                <span class="username">{{msg.name}}</span>
                <span class="time">{{msg.time}}</span>
               </div>
               <p>{{ msg.msg }}</p>
              </div>
                </div>
            </div>
            <form class="mt-2" action="">
                <div class="form-group sending">
                    <input type="text" placeholder="type..." v-model="replyMsg">
                    <button @click.prevent="addmsg" class="btn-send border-none rounded-md cursor-pointer py-0 px-4 text-gray-300 bg-blue-600 hover:bg-blue-700" type="submit"><i class='bx bxs-send'></i></button>
                </div>
            </form>
        </div>

        </div>
       
        <section  id="widgets" class="widgets grid gap-5">
             <!-- quick draft widgets s -->
            <div v-if="showDarft" class="quick-draft bg-white p-5 rounded-[10px]" >
                <h2 class="mt-0 mb-3 font-medium text-2xl">Quick draft</h2>
            <p class="pp capitalize mt-0 mb-5 text-base text-gray-400">write a draft for your tasks or ideas</p>
            <form action="" @submit.prevent>
                <input class="i block mb-5 p-3 w-full border-none rounded-md bg-slate-200" type="text" placeholder="title" v-model="DraftTitle">
                <textarea class="block mb-5 p-3 w-full border-none rounded-md bg-slate-200 resize-none min-h-[180px]" id="" v-model="draft" placeholder=" Your Thoughts"></textarea>
                <input type="submit" @click.prevent="addTask" class="save btn-shape cursor-pointer bg-blue-800 block w-fit border-none text-sm text-white ml-auto hover:bg-blue-600" value="save">
            </form>
            </div>
   <!-- quick draft widgets e -->
          <div v-if="showTargets" class="targets  bg-white p-5 rounded-[10px]">
            <h2 class="capitalize font-medium text-2xl mt-0 mb-3">yearly targets</h2>
            <p class="z capitalize text-gray-400 text-base mb-20">targets of the year</p>
            <!-- remove justify-center if want the details progress bar take the space or leave it and make the progress flex:1; give it premession to grow -->
            <div class="target-row blue mb-5 flex justify-center items-center">
                <div class="icon flex justify-center items-center">
                    <i class="fa-solid fa-dollar-sign fa-lg text-blue-800"></i>
                </div>
              <div class="details">
                <span class="text-grey-500 text-sm">Money</span>
                <span class="block mt-2 mb-3 font-bold">$20.000</span>
               <div class="progress relative">
                <span class="bg-blue-700 blue" style="width:85%">
                    <span class="bg-blue-700">85%</span>
                </span>
               </div>
              </div>

            </div>
            <div class="target-row orange mb-5 flex justify-center items-center">
                <div class="icon flex justify-center items-center">
                    <i class="fa-solid fa-cash-register fa-lg text-orange-800"></i>
                </div>
              <div class="details">
                <span class="text-grey-500 text-sm">Sales</span>
                <span class="block mt-2 mb-3 font-bold">300</span>
               <div class="progress relative">
                <span class="bg-orange-700 orange" style="width:75%">
                    <span class="bg-orange-700">75%</span>
                </span>
               </div>
              </div>
            </div>
              <div class="target-row green mb-5 flex justify-center items-center">
                <div class="icon flex justify-center items-center">
                    <i class="fa-solid fa-users fa-lg text-green-800"></i>
                </div>
              <div class="details">
                <span class="text-grey-500 text-sm">team</span>
                <span class="block mt-2 mb-3 font-bold">12</span>
               <div class="progress relative">
                <span class="bg-green-700 green" style="width:55%">
                    <span class="bg-green-700">55%</span>
                </span>
               </div>
              </div>

            </div>
          </div>
          <!-- lastet tasks or ideas -->
          <div v-if="showTasks" class="latest-tasks  bg-white p-5 rounded-[10px]">
            <h2 class="c capitalize font-medium text-2xl mt-0 mb-5">latest tasks or ideas</h2>  
            <div class="taskslist flex items-center justify-between" v-for="(task,index) in savedTasks" :key="index" @click="task.done=!task.done" :class="{'done':task.done}">
        <div class="taskbox  cursor-pointer">
          <h3 class="capitalize cursor-pointer font-medium text-[15px] mt-0 mb-[5px]" >{{ task.taskTitle }}</h3>
          <p class="capitalize cursor-pointer text-gray-500 m-0">{{ task.taskWords }} </p>
        </div>
        <!-- <span class="edit" @click="edittask(index)"><i class="fa-solid fa-pen-to-square"></i></span> -->
        <span class="delete transition-[0.3s] hover:text-red-600 cursor-pointer" @click=" deleteSavedTask(index)"><i class="fa-solid fa-trash-can"></i></span>
      </div> 
            <div class="taskslist flex items-center justify-between" v-for="(task,index) in tasks" :key="index" @click="task.done=!task.done" :class="{'done':task.done}">
        <div class="taskbox  cursor-pointer">
          <h3 class="capitalize cursor-pointer font-medium text-[15px] mt-0 mb-[5px]" >{{ task.taskTitle }}</h3>
          <p class="capitalize cursor-pointer text-gray-500 m-0">{{task.taskWords}}</p>
        </div>
        <!-- <span class="edit" @click="edittask(index)"><i class="fa-solid fa-pen-to-square"></i></span> -->
        <span class="delete transition-[0.3s] hover:text-red-600 cursor-pointer" @click="deletetask(index)"><i class="fa-solid fa-trash-can"></i></span>
      </div> 
          </div>
          <!-- top search -->
          <div v-if="showTopItems" class="search-items bg-white p-5 rounded-[10px]">
            <h2 class="mt-0 mb-5 font-medium text-2xl">Top Search Items</h2>
            <div class="items-head flex items-center justify-between text-gray-500 mb-[10px]">
              <div>Keyword</div>
              <div>Search Count</div>
            </div>
            <div class="items flex items-center justify-between pt-4 pb-4">
              <span>Products</span>
              <span class="bg-gray-200 btn-shape text-sm">220</span>
            </div>
            <div class="items flex items-center justify-between pt-4 pb-4">
              <span>Sale</span>
              <span class="bg-gray-200 btn-shape text-sm">180</span>
            </div>
            <div class="items flex items-center justify-between pt-4 pb-4">
              <span>offers</span>
              <span class="bg-gray-200 btn-shape text-sm">160</span>
            </div>
            <div class="items flex items-center justify-between pt-4 pb-4">
              <span>Home Supplies</span>
              <span class="bg-gray-200 btn-shape text-sm">145</span>
            </div>
          </div>
          <!-- current project -->
          <div class="last-project p-5 bg-white rounded-[10px] relative">
            <h2 class="mt-0 mb-5 capitalize font-medium text-2xl">Current project progress</h2>
            <ul class="relative m-0">
              <li class="mt-6 flex items-center done">Got The Project</li>
              <li class="mt-6 flex items-center done">Started The Project</li>
              <li class="mt-6 flex items-center done">The Project About To Finish</li>
              <li class="mt-6 flex items-center current capitalize">make sure that everything is done</li>
              <li class="mt-6 flex items-center">Finish The Deal & Get Money</li>
            </ul>
            <img class="launch-icon hide-mob opacity-30" src="./imgs/project.png">
          </div> 
           <!-- Start Reminders Widget -->
           <div class="reminders p-5 bg-white rounded-[10px] relative">
            <h2 class="mt-0 mb-5 capitalize font-medium text-2xl">Reminders</h2>
            <ul class="m-0">
              <li class="flex items-center mt-[15px]">
                <span class="key bg-blue-700 block mr-[15px] rounded-[50%]"></span>
                <div class="pl-[15px] blue">
                  <p class="f text-sm font-bold mt-0 mb-2">Check The Tasks List</p>
                  <span class="text-[13px] text-gray-400">28/09/2022 - 12:00am</span>
                </div>
              </li>
              <li class="flex items-center mt-[15px]">
                <span class="key bg-green-500 block mr-[15px] rounded-[50%]"></span>
                <div class="pl-[15px] green">
                  <p class="f text-sm font-bold mt-0 mb-2">Check the Deals</p>
                  <span class="text-[13px] text-gray-400">28/09/2022 - 12:00am</span>
                </div>
              </li>
              <li class="flex items-center mt-[15px]">
                <span class="key bg-orange-500 block mr-[15px] rounded-[50%]"></span>
                <div class="pl-[15px] orange">
                  <p class="f text-sm font-bold mt-0 mb-2">Call All The Clients</p>
                  <span class="text-[13px] text-gray-400">28/09/2022 - 12:00am</span>
                </div>
              </li>
              <li class="flex items-center mt-[15px]">
                <span class="key bg-red-600 block mr-[15px] rounded-[50%]"></span>
                <div class="pl-[15px] red">
                  <p class="f text-sm font-bold mt-0 mb-2">Finish The Work</p>
                  <span class="text-[13px] text-gray-400">28/09/2022 - 12:00am</span>
                </div>
              </li>
            </ul>
          </div>
          <!-- End Reminders Widget -->
            

        </section>
      
      
       
       </main>
       <!-- <home-crud-vue></home-crud-vue> -->
       </section>
   
    </div>
    
</template>
<script>
import {bus} from "../main";
// import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'
import sideBarVue from './sideBar.vue';
import homeCrudVue from './homeCrud.vue'
import {mapActions} from 'vuex'
export default {
    components: { sideBarVue, homeCrudVue, 
         apexchart: VueApexCharts, },
    name:'Home',
    //props:['sideBarClosed'],
    data(){
        return{
            username:"",
            search:"",
            isActive2:false,
            //chat
            msgsMe: [
               {time:"18:15", msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eum modi voluptatem culpa, obcaecati provident nemo impedit corrupti quae porro autem cumque quaerat.' },
               {time:"18:16", msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eum modi voluptatem culpa' },
               {time:"18:17", msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
            ],
            myReplyMsgs:[],
            replyMsg:"",
            isActive:false,
            listActive:false,
    
            sideBarClosed:false,
            //draft
            draft:"",
            DraftTitle:"",
            //tasks to do 
            tasks:[],
            savedTasks:[{taskTitle:"task 1",taskWords:"your first task",done:false}],
            //chart
            menuChartActive:false,
            menuChatActive:false,
            //widgets show settings
            showTargets:"",
            showDarft:"",
            showTasks:"",
            showTopItems:"",

            series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
          
        }
    },
    methods:{
        ...mapActions(['redirectto']),
        closeList(){
            if(this.listActive===true){
                        this.listActive=false;
                    }
        },
        addmsg(e){
            this.myReplyMsgs.push({name:"Ahmed",time:"18:18",msg:`${this.replyMsg}`});
            this.replyMsg="";
        },
        toggleSideBar(e){
         //   localStorage.setItem('toggleSidebar',this.sideBarClosed);
            let sideDivider=document.querySelector(".divider");
            let toggleMenu=document.querySelector(".SideBarHome .toggle-menu");
            if(toggleMenu){
                e.preventDefault();
                this.sideBarClosed=!this.sideBarClosed;
                document.querySelector("#content").classList.toggle("closed");
                // console.log(this.sideBarClosed);
              //  bus.$emit('toggleSideBar',this.sideBarClosed);
            

                if(this.sideBarClosed==true){
                    sideDivider.textContent='-';
                }
                else{
                    sideDivider.textContent=sideDivider.dataset.text;
                }
        }
          
        },
        seeToggling()
        { 
        
            this.sideBarClosed=true;
              //  console.log(this.closeSidemenu);
           },
           activeList(e){
            e.preventDefault();
            this.listActive=!this.listActive;
           },
           reveal(){
            let reveals=document.querySelectorAll(".reveal");
            for (let i = 0; i < reveals.length; i++) {
                let windowHeight=window.innerHeight;
                let revealTop=reveals[i].getBoundingClientRect().top;
                let revealPoint=150;
                if(revealTop>windowHeight - revealPoint){
                    reveals[i].classList.add("scroll");
                }
                else{
                    reveals[i].classList.remove("scroll");
                }
                
            }

           },
           goto(routed){{
            this.redirectto({val:routed});
           }

           },
           deletetask(index){
            this.tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(this.tasks));
           },
           deleteSavedTask(index){
            this.savedTasks.splice(index,1);
           },
           addTask(){
            if(this.draft!==""&&this.DraftTitle!==""){
              this.tasks.push({taskTitle:this.DraftTitle,taskWords:this.draft,done:false});
              localStorage.setItem("tasks",JSON.stringify(this.tasks));
            }
            this.draft="";
            this.DraftTitle="";

           },
           edittask(index){

           }
        }
,created(){
    this.tasks=localStorage.getItem("tasks")?JSON.parse( localStorage.getItem("tasks")):[];
   // console.log(this.tasks);
   this.showDarft=localStorage.getItem('showDarft')?JSON.parse(localStorage.getItem('showDarft')):true;
       this.showTargets=localStorage.getItem('showTargets')?JSON.parse(localStorage.getItem('showTargets')):true;
       this.showTasks=localStorage.getItem('showTasks')?JSON.parse(localStorage.getItem('showTasks')):true;
       this.showTopItems=localStorage.getItem('showTopItems')?JSON.parse(localStorage.getItem('showTopItems')):true;
       //sidebar
     //  this.sideBarClosed=localStorage.getItem('toggleSidebar')?JSON.parse(localStorage.getItem('toggleSidebar')):false;
 
       
    },
    mounted(){
    //     let tableScroll=document.querySelector(".into-data");
    //   console.log(tableScroll.offsetTop);
        let profileLinks=document.querySelector(".profile-link");
        let profileImg=document.querySelector(".profile img");
        //close menu 
        //olso we can use the original way on vue i recognize where is the mistake
        let menu=document.querySelectorAll(".content-data .head .menu");
                let icon=document.querySelectorAll(".content-data .head .menu .icon");
        icon.forEach(item=>{
            item.addEventListener("click",(e)=>{
              item.parentElement.getElementsByClassName("menu-link")[0].classList.toggle("open");
            })
        });
       
        
        window.addEventListener("click",(e)=>{
            if(e.target !==profileImg){
                if(e.target!==profileLinks){
                    if(this.listActive===true){
                        this.listActive=false;
                    }
                }
            }
            menu.forEach(item => {
                const Icon=item.querySelector(".icon");
        const menuLink=item.querySelector(".menu-link");
       
            if(e.target !== Icon){
                if(e.target!==menuLink){
                   if( menuLink.classList.contains("open")){
                    menuLink.classList.remove("open");
                   }
                }
                
            }
        
                
            });
 
         });

    // let progresscss=  window.getComputedStyle(document.querySelector('.progress'), '::before');
     //progresscss.backgroundColor='#22c55e';
     document.querySelectorAll(".progress").forEach(e => {
        //or set => e.dataset.value
        e.style.setProperty('--afterwidth',`${e.getAttribute('data-value')}%`);
      // console.log(e.getAttribute('data-value'));
     });;
   let ourdataProposal = document.querySelector(".data");
   window.onscroll=function(){
   
     if(window.scrollY>=ourdataProposal.offsetTop-200){
        ourdataProposal.classList.add("scroll");
     }
   }
    }

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,400&family=Open+Sans:wght@300;500&display=swap');
$grey:white;
$blue: rgb(2 132 199);
$dark-blue:rgb(3 105 161);
$light-gray:rgb(229 231 235);
$dark-gray:rgb(156 163 175);
$text-dark-color:rgb(55 65 81 );
$green:#22c55e;
@keyframes  fadeDown{
      0%{
        opacity: 0;
        transform: translateY(-30px) scale(0.9);
      }
      100%{
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      
    } 
    @keyframes fadeUp {
        from{
        opacity: 0.5;
        transform: translatex(30px) scale(0.9);
      }
      to{
        opacity: 1;
        transform: translatex(0) scale(1);
      }

    

    }
    @keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(300px);
  }
  to {
    opacity: 1;
  }
}
@keyframes appear-disappear {
    0%{
        background-color: $blue;
    }
    100%{
        background-color: white;
    }
}
    .reveal{
        position: relative;
        transform: translatey(150px);
        opacity: 0;
    }
    .btn-shape{
        padding: 4px 10px;
        border-radius: 6px;
    }
.home{
    font-family: 'Open Sans', sans-serif;
    
    #content{
        position: relative;
        left: 260px;
        width: calc(100% - 260px);
        transition: all 0.5s ease;
        &.closed{
            width:calc( 100% - 60px);
            left: 60px;

        }
        nav{
            padding: 20px 0;
            .form-groub{
                input{
                    transition: all 0.3s ease;
                    &:focus{
                        box-shadow: 0 0 0 1px $blue,0 0 0 4px rgb(112, 177, 209);
                    }
                }
                .icon{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 16px;
                }

            }
            a{
                &.navLink{
              //  color: rgb(245, 242, 242) !important;
              color: $text-dark-color !important;;
                position: relative;
                .icon{
                    font-size: 18px;
                }
                .badge{
                    position: absolute;
                    top: -12px;
                    right: -12px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 2px solid $grey;
                    background: rgb(235, 12, 12);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: $grey;
                    font-size: 12px;
                    font-weight: 700;

                }
                }
            }
            .profile{
                position: relative;
                padding-right: 20px;
                

                // background-color: rgb(245, 245, 245);
                img{
                    widows: 36px;
                    height: 36px;
                    border-radius: 50%;
                    object-fit: cover;
                    cursor: pointer;
                }
                .profile-link{
                    box-shadow: 4px 4px 16px rgba(0 ,0 ,0 ,0.1);
                    width: 160px;
                    transition: all 0.3s ease;

                    top:calc(100% + 10px);
                    pointer-events: none;
                    opacity: 0;
                    &.show{
                        pointer-events: visible;
                        top: 100%;
                    opacity: 1;
                    }
                    a{
                        display: flex;
                        align-items: center;
                        padding: 10px 16px;
                        gap: 10px;
                        font-size: 14px;
                      //  color: $grey;
                      color: $text-dark-color;
                        &:hover{
                            background-color: $light-gray;
                        }

                    }
                }

            }

        }
        main{
        padding: 24px 20px 20px 20px;
        .breadcrumbs{
            li{
                &.divider{
                    color: $dark-gray;
                    pointer-events: none;
                }
                font-size: 14px;
                a{
                    color: $blue;
                    font-size: 14px;
                    &.active{
                        color:$dark-gray;
                    }
                }
            }
        }
        .into-data{
            grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
            gap: 20px;
            animation:fadeDown 0.3s linear;
            .card{
                padding: 20px;
                border-radius: 10px;
                background: white;
                box-shadow: 4px 4px 16px rgba(0 ,0 ,0 ,0.05);
                .head{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h2{
                        font-size: 24px;
                        font-weight: 600;
                    }
                    p{
                        font-size: 14px;
                        text-transform: capitalize;
                    }
                    .icon{
                    font-size: 20px;
                    color: green;
                }
                .icon-down{
                    font-size: 20px;
                    color: red;
                }
                }
                .progress{
                    display: block;
                    width: 100%;
                    height: 10px;
                    background-color: $light-gray;
                    margin-top: 24px;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }
                .progress::before{
                    content:"" ;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color:$blue;
                    height: 100%;
                    width:var( --afterwidth,50%);
                }
                .label{
                    font-size: 14px;
                    font-weight: 700;
                }
            

            }
        }
        .data{
            transition: 0.3s;
             opacity: 0.3;
            &.scroll{
             animation: fadeInRight 1s ease forwards;
                }
            .content-data{
                flex-grow: 1;
                flex-basis: 400px;
                border-radius: 10px;
                max-width: 100%;
                padding: 20px;
                background-color: white;
                box-shadow: 4px 4px 16px rgba(0 ,0 ,0 ,0.1);
              
                .head{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    h3{
                    font-size: 20px;
                    font-weight: 600;
                }
                .menu{
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    justify-content: center;
                    .icon{
                        cursor: pointer;
                    }
                    .menu-link{
                        position: absolute;
                        top: calc(100% + 10px);
                       // top: 100%; 
                        right: 0;
                        width: 140px;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 4px 4px 16px rgba(0 ,0 ,0 ,0.1);
                        z-index: 100;
                        padding: 10px 0;
                        opacity: 0;
                        pointer-events: none;
                        transition: all 0.3s ease;
                        &.open{
                            top: 100%;
                            opacity: 1;
                        pointer-events: visible;  
                        }
                        a{
                            display: block;
                            padding: 5px 15px;
                         //   color: $grey;
                         color: $text-dark-color;
                            font-size: 14px;
                            transition: all 0.3s ease;
                            &:hover{
                                background-color: $light-gray;
                            }

                        }
                    }
                }
                }
                .charts{
                     width: 100%;
                     max-width: 100%;
                     overflow-x: auto;
                    scrollbar-width: none;
                    max-width: 100%;
                        &::-webkit-scrollbar{
                    display: none;
                        }

                }
                .chat-box{
                    scrollbar-width: none;
                    max-width: 100%;
                        &::-webkit-scrollbar{
                    display: none;
                        }
                    .msg{
                        display: flex;
                        align-items: flex-start;
                        grid-gap: 6px;
                        img{
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            object-fit: cover;
                        }
                        .chat{
                        .profile {
                            .username{
                                font-size: 14px;
                                font-weight: 600;
                                display: inline-block;
                                margin-right: 6px;
                            }
                            .time{
                                color: $dark-gray;

                            }
                        }
                        p{
                         font-size: 14px;
                         padding: 6px 10px;
                         display: inline-block;
                         max-width:240px;
                         line-height: 150%;


                        }
                    }
                    &:not(.me){
                            p{
                            background:$blue;
                         border-radius: 0 5px 5px 5px;
                         color: $light-gray;
                         word-break: break-all
                            }
                        }
                        &.me{
                        justify-content: flex-end;
                        .profile{
                            text-align: right;
                        }
                        p{

                            background-color: $light-gray;
                            border-radius: 5px 0 5px 5px;
                        }
                    }
                    }
                  
                }
                .form-group{
                    display: flex;
                    grid-gap: 10px;
                    width: 100%;
                    input{
                        padding:12px 16px;
                        flex-grow: 1;
                        background-color: $light-gray;
                        border: none;
                        border-radius: 5px;
                        outline: none;
                        transition: all 0.3s ease;
                        width: 100%;
                        &:focus{
                            box-shadow: 0 0 0 1px $blue,0 0 0 4px rgb(60, 148, 193);
                        }
                    }
                    .btn-send{
                        transition: all 0.3s ease;
                        padding: 0px 16px;
                    }
                }
            

            }

        }
        .widgets{
            grid-template-columns: repeat(auto-fill, minmax(450px,1fr));
            margin-right:20px;
            margin-left: 20px;
            @media (max-width:767px) {
                grid-template-columns: minmax(200px,1fr);
                margin-right:10px;
            margin-left: 10px;
            gap: 10px;
            }
            .quick-draft{
            .save{
                transition: 0.3s;
            }
        }
        .targets{
            .blue{
                .icon,.progress{
                    background-color: rgb(0 117 255/0.2);
                }
            }
            .orange{
                .icon,.progress{
                    background-color: rgb(245 158 11/0.2);
                }
               
            }
            .green{
                .icon,.progress{
                    background-color: rgb(34 197 94/0.2);
                }
            }

        .target-row
        {
            .icon{
                width:80px;
                height:80px;
                margin-right: 15px;
            }
            .details{
                flex: 1;
                .progress{
                    height: 4px;
                    >.blue{
                        span::after{
                            border-top-color: rgb(29 78 216) ;
                        }
                    }
                    >.orange{
                        span::after{
                            border-top-color:  rgb(245 158 11); 
                        }
                    }
                    >.green{
                        span::after{
                            border-top-color: rgb(34 197 94) ;
                        }
                    }
                    >span{
                        position:absolute;
                        left: 0;
                        top: 0;
                        height: 100%;
                       span{
                        position: absolute;
                        bottom: 16px;
                        right: -16px; //to be in the middle for the arrow
                        color: white;
                        padding: 2px 5px;
                        border-radius: 6px;
                        font-size: 13px;
                        &::after{
                            content:"";
                            border-color: transparent;
                            border-width: 5px;
                            border-style: solid;
                            position: absolute;
                            bottom: -9px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                       }
                    }

                }

            }

        }
        }
        .latest-tasks{
            .taskslist{
                &:not(:last-of-type){
                    margin-bottom: 15px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee;
                   
                }
                &.done{
                        opacity: 0.4;
                        h3,p{
                            text-decoration: line-through;

                        }
                    }
                .taskbox{

                    flex-grow: 1;
                }

            }
        }
        .last-project{
            ul{
                //the line
                &::before{
                    position: absolute;
                    content: "";
                    left: 10px;
                    width: 3px;
                    height: 100%;
                    background-color: $blue;
                }
                li{
                    //the circles
                    @media screen and (max-width:768px) {
                        font-size: 12px;
                    }
                    &::before{
                        content: "";
                        display: block;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background-color: white;
                        border: 2px solid white;
                        outline: 2px solid $blue;
                        margin-right: 15px;
                        z-index: 1;

                    }
                    //the shadow circles inside the circles
                    &.done::before{
                        background-color: $blue;
                    }
                    &.current::before{
                        animation: appear-disappear 1s infinite alternate;
                    }
                 
                }
            }
            img{
                position: absolute;
                bottom: 5px;
                right: 5px;
                width: 150px;
            }
        }
        .reminders{
            ul{
                li{
                    .key{
                        width: 15px;
                        height: 15px;

                    }
                    .red{
                    border-left: 2px solid red;    
                    }
                    .green{
                        border-left: 2px solid rgb(21, 183, 21);    
                    }
                    .blue{
                        border-left: 2px solid $blue;    
                    }
                    .orange{
                        border-left: 2px solid orange;    
                    }
                }
            }
        }
    }
       


    }

    }
    .sidebar{
    max-width: 260px;
    width: 100%;
    color: rgb(57, 65, 78);
    overflow-y: scroll;
    // overflow: visible;
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
    top:10%;
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
               padding: 12px 16px 12px 0;
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
                input{

        }}
    }
    }
        
        // .sidebar.hide{
        //     max-width: 60px;
        // .title{
        //     justify-content: flex-start;
        //     a{
        //         color: transparent;
        //     }
        //     i{
        //       //  color: $light-gray;
        //       color: $text-dark-color;
        //         margin-left:150px;
        //         padding-right: 6;
        //     }

        // }
        // .sidebar-menu{
        //     padding: 0 6px;

        //     li{
        //         i.icon-right{
        //                display: none;

        //             }
        //         &:hover{
        //             color: transparent;
        //             i{
        //                 color: $grey;
        //             }
        //         }
        //         &.active{
        //             // color: transparent;
        //             // background-color: transparent;
        //             display: none;
        //         }
        //         &.divider{
        //        justify-content: center;
        //     }
        // }
        //     ul.slide-dropdown{
        //         display: none;
        //     }
        //     a{
        //         color: transparent;
        //         i{
        //            // color: rgb(246, 241, 241);
        //            color: $text-dark-color;
        //             margin-right: 20px;

        //         }
        //     &.active{
        //         color: transparent;
        //         i{
        //            color: $grey !important;
        //           //color: $text-dark-color !important;
             
        //         };
        //     }
        //     &:hover{
        //         color: transparent;
        //        // background-color: $text-dark-color;
        //       //  color:$grey ;
        //             i{
        //              color: $grey !important;
        //              //  color: $text-dark-color !important;
        //                &:hover{
        //                // background-color: $text-dark-color;
        //                  color:$grey ;
        //                }
                    
        //             }
        //             }
        // }
        // }
        // .ads{
        //     display: none;
        // }
        // }
        
    }
    .hide-mob{
        @media screen and (max-width:768px) {
            display: none;
        }
    }
}
html{
    overflow-x: hidden;
    scroll-behavior: smooth;
}
</style>