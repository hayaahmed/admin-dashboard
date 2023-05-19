<template>
  <div class="newhome">
  
    <div class="title ">
  <h1 class=" text-gray-700 text-left m-3 ml-10 font-normal">{{ dashbourdcrud }}</h1> 
 </div>
 <div class="addEmp">
    <button @click="()=>showAddPopUp=true" class="btn add"> + Add new</button>
   </div>
<div class="dashboard">

    <!-- add Popup -->
    <div class="popup" v-if="showAddPopUp">
        <div class="popupWapper">
            <div class="myform">
                <h3 class="uppercase text-base m-3">Create new</h3>
                <span @click="()=>showAddPopUp=false" class="close">x</span>
                    <!-- cant be empty -->
         <div class="flex items-center justify-around flex-row">
            <div class="box">
                    <input type="text" v-model="empname" placeholder="employee name">
                    <span class="error" v-show="nameerror">cant be empty</span>
                    <input type="text" v-model="emplastname" placeholder="employee lastname">
                    <span class="error" v-show="lastNameError">cant be empty</span>
                    <input type="text" v-model="empage" placeholder="employee age">
                    <span class="error" v-show="ageerror">cant be empty</span>
                    <!-- <label for="">Gender</label> -->
                  </div>
                
                    <!-- <input type="text" v-model="gender" placeholder="employee gender"> -->
                  
                   <div class="box">
                    <select name="choose gender" v-model="gender">
                        <option value="" selected disabled>choose gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <span class="error" v-show="genderError">you should choose the gender</span>
                    <input type="text" v-model="birthDate" placeholder="employee BirthData">
                    <span class="error" v-show="birthDateError">cant be empty</span>
                    <input type="text" v-model="email" placeholder="employee email">
                    <span class="error" v-show="emailError">cant be empty</span>
                   </div>
         </div>

                    <button @click="addemployee" class="btn">{{ btnText }}</button>
                    
            </div> 
        </div> 
    </div>

    <!-- Edit Popup-->
    <div class="popup" v-if="showEditPopUp">
        <div class="popupWapper">
            <div class="myform">
                <h3 class="uppercase text-base m-3"> Edit</h3>
                <span @click="()=>showEditPopUp=false" class="close">x</span>
                    <!-- cant be empty -->
               <div class="flex items-center justify-around flex-row">
                <div class="box">
                    <input type="text" v-model="editData.firstName" placeholder="employee name">
                    <span class="error" v-show="nameerror">cant be empty</span>
                    <input type="text" v-model="editData.lastName" placeholder="employee lastname">
                    <span class="error" v-show="lastNameError">cant be empty</span>
                    <input type="text" v-model="editData.age" placeholder="employee age">
                    <span class="error" v-show="ageerror">cant be empty</span>
                    <!-- <input type="text" v-model="editData.gender" placeholder="employee gender"> -->

                 </div>
                 <div class="box">
                    <select name="choose gender" v-model="editData.gender">
                        <option value="" selected disabled>choose gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <!-- <input type="text" v-model="gender" placeholder="employee gender"> -->
                    <span class="error" v-show="genderError">you should choose the gender</span>
                    <input type="text" v-model="editData.birthDate" placeholder="employee BirthData">
                    <span class="error" v-show="birthDateError">cant be empty</span>
                    <input type="text" v-model="editData.email" placeholder="employee email">
                    <span class="error" v-show="emailError">cant be empty</span>
                 </div>
       </div>

                    <button  @click="updateemployee" class="btn">Edit</button>
            </div> 
        </div> 
    </div>

   
    <!-- table List -->
    <section id="tables">
    <div  class="thetable fix-width scroll-inner">
    <table class="table">
    <thead>
        <!-- row -->
        <tr> 
            <th>Employee Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Operations</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(emp,index) in data" :key="index">
            <td data-label="Employee Name">{{ emp.firstName }}</td>
            <td data-label="Last Name">{{ emp.lastName }}</td>
            <td data-label="Age">{{ emp.age }}</td>
            <td data-label="Gender">{{ emp.gender }}</td>
            <td data-label="Birth Date">{{ emp.birthDate }}</td>
            <td data-label="Email">{{ emp.email }}</td>
            <td data-label="Operations"> <button class="btn" @click="updateit(emp)"><i class="fa-solid fa-pen"></i></button> <button class="btn delete" @click="deleteit(emp.id,index)"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    </tbody>
 </table>
</div>
</section>
</div>

  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert2';
export default {
    name:'homeCrud',
    data(){
        return{
            dashbourdcrud:"Employees CRUD Dashboard",
            btnText:"Add Employee",
            sucess:"",
            edit:false,
            added:false,
            data:[],
            empname:"",
            emplastname:"",
            empage:"",
            empid:"",
            birthDate:"",
            gender:"",
            email:"",
            emailError:"",
            nameerror:false,
            ageerror:false,
            lastNameError:false,
            genderError:false,
            birthDateError:false,
            showEditPopUp:false,
            showAddPopUp:false,
            showSideBar:false,
            editData:{},
            hover:false,
        }
    },
    methods:{
      async  addemployee(){
        //check if input is empty before submit
        if (!this.empname) {
        this.nameerror=true;
      }
      else{
        this.nameerror=false;
      }
      if (!this.emplastname) {
        this.lastNameError=true;
      } 
      else{
        this.lastNameError=false;
      }
      if(!this.empage){
        this.ageerror=true;
      }
      else{
        this.ageerror=false;
      }
      if(!this.gender){
        this.genderError=true;
      }
      else{
        this.genderError=false;
      }
      if(!this.birthDate){
        this.birthDateError=true;
      }
      else{
        this.birthDateError=false;
      }
      if(!this.email){

        this.emailError=true;
      }
      else if (!this.validEmail(this.email)){
        this.emailError=true;
      }
      else{
        this.emailError=false;
      }

      if(!this.nameerror&&!this.ageerror&&!this.lastNameError&&!this.genderError&&!this.birthDateError&&!this.emailError){
      axios.post("https://dummyjson.com/users/add",{
            firstName:this.empname,
            lastName:this.emplastname,
            age:Number(this.empage),
            gender:this.gender,
            birthDate:this.birthDate,
            email:this.email,
        })
        .then(({data})=>{
            //add to the begin of the list
            this.data.unshift({
                firstName:data.firstName,
                lastName: data.lastName,
                age:data.age,
                gender:data.gender,
                birthDate:data.birthDate,
                email:data.email
            })
            swal.fire("employee added successfully");   
            this.showAddPopUp=false;
        });
      
      }
        },
        validEmail(email) {
      var re =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return re.test(email);
    },
        async getemps(){
            //get 5 rows of data ,select firstName ,lastName,age form fake api https://dummyjson.com
            await axios.get('https://dummyjson.com/users?limit=5&select=firstName,lastName,age,gender,birthDate,email').then(({data:mydata})=>{
                    let res = mydata.users;
                    console.log(res);
                  this.data=res;
                  });            

        },
       async updateit(emp){
        this.showEditPopUp=true;
        this.editData=emp;
        
        
        },
       async deleteit(id,index){
            //delete from db and list
            swal.fire({
                    title: 'Are you sure?',
                    text: "You want to delete this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then(async(result) => {
                    if (result.isConfirmed) {
                        let res2=await axios.delete(`https://dummyjson.com/users/${id}`);
                        if(res2.status==200){
                            this.data.splice(index,1);
                            swal.fire(
                        'Deleted!',
                        'employee deleted sucessfully',
                        'success'
                        )
                        }    
                        else{
                        console.log("something went wrong");
       }  
                    }
                    })

              

              
        },
       async updateemployee(){
           //update data with obj which has the new data
            let result=await axios.put(`https://dummyjson.com/users/${(this.editData.id)}`,this.editData); 
        if(result.status==200){     
            swal.fire("employee updated successfully");   
             this.showEditPopUp=false;
        }
    }
    },
    created(){
       this.getemps();
    //   let table= document.querySelector("#tables");
    //    window.onscroll=function(){
    //     let skilllsoffsettop = table.offsetTop;
    // //outer height of skills
    // let skillsouterhieght = table.offsetHeight;

    // let windowhieght = this.innerHeight;
    // let windowscrolltop = this.pageYOffset;
    // //reach skill  our skills section
    // if (windowscrolltop > (skilllsoffsettop + skillsouterhieght - windowhieght)) {
    //     // if(window.scrollY>=ourskills.offsetTop- 30){//more easies
    //      document.querySelector(".thetable").classList.add("scroll");
    // }
    // else{
    //   document.querySelector(".thetable").classList.remove("scroll");
    // }

    //    }
    }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,400&family=Open+Sans&display=swap');@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Open+Sans&display=swap');
$main-color:#5F9EA0;
$blue: rgb(2 132 199);
$light-gray:rgb(244, 245, 247);
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@keyframes fadeUp {
  0%{
        opacity: 0;
        transform: translateY(30px) scale(0.9);
      }
      100%{
        opacity: 1;
        transform: translateY(0) scale(1);
      }

    }
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
.newhome{
  margin: 40px 30px;
    height: 100vh;
    @media (max-width:800px) {
      height: fit-content;
      
    }
    background-color: $light-gray;
    position: relative;
    .title{
        text-transform: capitalize;
        color: #605f5f;
        font-family: 'Lora', serif;
        // letter-spacing: 1px;
        font-size: 22px;
        line-height: 1.2;

        @media (max-width:800px) {
        font-size: 16px;
          font-weight: 500;
      
    }
    }
    .addEmp{
    text-align: right;
    .add{
        padding:10px;
        border: none;
        color: white;
        font-size: 18px;
        background-color:$blue;;
        border-radius: 5px;
        margin-right: 50px;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
          color: $blue;
          background-color: white;
        }
    }
 }
.dashboard{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .popup
    {
            position: absolute;
            inset: 0px;
             top: 0;
            background-color: #2b28271f;
            width: 100%;
            height: 100%;
            z-index: 5200;
            .popupWapper{
                display: flex;
                align-items: center;
                justify-content: center;
            }
    }

.myform{
    margin-top:100px ;
    background-color:white ;
    padding: 30px;
    border-radius: 5px;
    position: relative;
    width: 600px;
    @media (max-width:768px) {
        padding: 20px;
        width: 340px;
    }
    .close{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: $blue;
        color: white;
        width: 40px;
        height: 40px;
        font-size: 22px;
        border-radius: 50%;
        position: absolute;
        top: 15px;
        right: 15px;
        &:hover{
            color: red;
        }
    }
    input{
        width: 250px;
        height: 2.3rem;
        font-size: 16px;
        background-color: rgb(225, 223, 223);
        border:0;
        outline: 0;
        border-radius: 5px;
        margin: 10px;
        padding-left: 20px;
        display: block;

      @media (max-width:768px) {
            width: 150px;
          }
          &:focus{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 11px 0px;
          }


    }
    select{ 
        background-color: $blue;
        width: 250px;
         border-radius: 5px;
          margin:10px;
          display: block; 
          color: white;
          outline: none;
          font-size: 16px;
          height: 2.3rem;
          cursor: pointer;
          border: none;
          @media (max-width:768px) {
            width: 150px;
          }
          // &:focus{
          //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 11px 0px;
          // }
    }
    .error{
        font-size: 12px;
        color: red;
        text-align: left;
        margin: 0;
        margin-left: 20px;
    }
    .btn{
        display: block;
        padding:10px 20px;
        width: 200px;
        text-align: center;
        text-transform: uppercase;
        background-color: $blue;
        box-shadow: rgba(77, 77, 85, 0.414) 0px 7px 29px 0px;
        color: white;
        font-size: 16px;
        cursor: pointer;
        margin: 20px auto;
        border: 0;
        border-radius: 15px; 
        
        &:hover{
            color: $blue;
            background-color: white;
        }
    }
    .sucess{
        color: $blue;
        text-align: center;
    }
    
}
.thetable{
   margin-top: 40px;
   margin-bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  &.scroll{
    animation:fadeUp 0.5s linear;
  }
    @media (max-width:800px) {
      width: 320px;
          
     }

    
//     &.fix-width {
//         @media (max-width:1100px) {
//           width: 850px;
          
//       }
//       @media (max-width:850px) {
//           width: 320px;
//}
//}
          
    .table{
  width: 100%;
    border-collapse: separate;
    // box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  border-spacing: 0 10px;
    text-align: center;
    border-radius: 5px;

     @media (max-width:800px) {
        thead{
          display: none;
        }
        tbody,tr,td{
          display: block;
          width: 100%;

        }
        tr{
          margin-bottom: 15px;
        }
        td{
          // border-bottom: 1px solid #b1b1b1;
          text-align: right !important;
          padding-left: 50% !important;
          position: relative;
          &::before{
            content: attr(data-label);
            position: absolute;
            width: 50%;
            left: 0;
             text-align: left;
            padding-left: 15px;
            font-size: 15px;
            font-weight: bold;
            // background: $blue;
            color: $blue;

            padding: 10px;
            border-radius:  5px 0 0 5px;
          }
        }
          
      }
    th,td{
        padding:10px;
        text-align: center;
          
    }
    td:first-child,
th:first-child {
  border-radius: 10px 0 0 10px;
}
td:last-child,
th:last-child {
  border-radius: 0 10px 10px 0;
}
   thead{
    border-radius: 5px;
    color: white;
    background-color: $blue;
        text-transform: uppercase;    
        height: 40px;   
   }
   tbody{
    tr
    {
      border-radius: 5px;
     // &:nth-child(even){
        // border-radius: 10px;
            //background-color: rgb(244, 242, 242);
            background: white;
    //   }  
   }
   } 
   .btn{
        width: 50px;
        height: 50px;
        border-radius: 50%; 
        text-align: center;
        text-transform: uppercase;
        background-color: $blue;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        color: white;
        font-size: 16px;
        border: 0;      
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            color: $blue;
            background-color: white;
        }
        &.delete{
            background-color: rgb(206, 23, 23);
        }
    }
}
}
}
}
</style>