import env from "react-dotenv";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



const initialState = {
    signuploading: false,
   
    signuperror: "",
   signupsuccess: false, // for monitoring the registration process.
   signinloading: false,
   userinfo:"",
    signinerror: "",
   signinsuccess: false, // for monitoring the registration process.
  }
  export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await axios.get(`${env.REACT_APP_URL}/user/getuser`)

    return await response.data
  })
  
 

const fetch2=async(api,body,token="")=>{
    console.log("body",body)
   const res=await fetch(api,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(body)
    })
   return await res.json();
}
 
export  const signUpuser=createAsyncThunk(
    "signupuser",
    async(body)=>{
     const result=  await fetch2(`${process.env.REACT_APP_URL}/user/signup`,body);
     return result;
    }
)

export const signInuser=createAsyncThunk(
    "signinuser",
    async(body)=>{
        const result=await fetch2(`${process.env.REACT_APP_URL}/user/signin`,body);
        console.log(result)
        return result;
    }
)

const authSliceReducer=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        clearState(state) {
           
            state.signupsuccess = false
         
        },
        siginclearSate(state){
          state.signinsuccess=false  
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(signUpuser.fulfilled,(state,action)=>{
            
            
           
            
     state.signuploading = false
      state.signupsuccess = true 
      if(action.payload.err){
        state.signuperror=action.payload.err
      }
      else{
        state.signuperror=action.payload.mess

      }

              
        }).addCase(signUpuser.pending,(state,action)=>{
            state.signuploading = true
            state.signuperror = null
          
        }).addCase(signUpuser.rejected,(state,action)=>{
            state.signuploading = false
            state.signuperror = action.payload.err
        }).addCase(signInuser.fulfilled,(state,action)=>{
            state.signinloading = false
            state.signinsuccess = true 
            if(action.payload.err){
              console.log(action.payload)
              state.signinerror=action.payload.err
            }
            else{
              console.log(action.payload)

              state.signinerror=action.payload.mess
              state.userinfo=action.payload.userinfo
      
            }
      
        })
    }
    
})

export  const {clearState,siginclearSate} =authSliceReducer.actions;

export default authSliceReducer.reducer;