import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { useRef } from 'react';
import { app } from '../firebase';

export default function Profile() {
  const{currentUser}=useSelector((state)=>state.user);
  const fileRef=useRef(null);
  const[file,setFile]=useState(undefined);
  const[filePerc,setFilePerc]=useState(0);
  const[fileUploadError,setFileUploadError]=useState(false);
  const[formData,setFormData]=useState({});
  
  console.log(formData)
  // firebase Storage
  //  allow read; 
  //     allow write:if
  //     request.resource.size<2*1024*1024 &&
  //     request.resource.contentType.matches('imgae/.*')
  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  },[file])
  const handleFileUpload=(file)=>{
    const storage=getStorage(app)
    const fileName=new Date().getTime() + file.name;
    const storageRef=ref(storage,fileName);
    const uploadTask=uploadBytesResumable(storageRef,file)

    uploadTask.on('state_changed',(snapshot)=>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      setFilePerc(Math.round(progress))
      
    },
    (error)=>{
      setFileUploadError(true);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then
      ((downloadURL)=>{
        setFormData({...formData,avatar:downloadURL})
      })
    })
  }
  return (
   <div className='max-w-lg p-3 mx-auto'>
    <h1 className='text-center font-semibold text-3xl my-7'>
      Profile
    </h1>
    <form className='flex flex-col gap-4'>
      <input onChange={(e)=>setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/*'/>
      <img onClick={()=>fileRef.current.click()} src={formData.avatar|| currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center cursor-pointer mt-2 '/> 
      <p className='text-sm self-center'>
        {fileUploadError?
       ( <span className='text-red-700'>
          Error Image Upload (image must be less than 2 mb)
        </span>):
        filePerc>0 && filePerc<100?(
          <span className='text-slate-700'>
            {`Uploading ${filePerc}%`}
          </span>):
          filePerc===100?(
            <span className='text-green-700'>Image Successfully Uploaded !</span>):("")
          
        
      }
      </p>
      <input placeholder='username' id='username' type='text' className='border p-3 rounded-lg'/>
        <input placeholder='email' id='email' type='text' className='border p-3 rounded-lg'/>
         <input placeholder='password' id='password' type='text' className='border p-3 rounded-lg'/>
         <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
    </form>
    <div className='flex justify-between mt-5'>
      <span className='text-red-700'>Delete Account</span>
      <span className='text-red-700'>Sign out</span>
    </div>
   </div>
  )
}

 