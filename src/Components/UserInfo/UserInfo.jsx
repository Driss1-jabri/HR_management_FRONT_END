import React from 'react';
import profile from '../../assets/images/profile.jpg'
import {infosP, infosPr} from '../../constants'

const UserInfo = () => {
  return (
    <div className='w-11/12 m-auto'>
      <div className="bg-sky-200	rounded-2xl flex items-center justify-between pl-4 p-4 mt-4">
        <div className='flex items-center'>
          <div><img src={profile} className='w-40 h-40 rounded-full' round></img></div>
          <div className='ml-4 mb-0 inline'>
            <h1 className='m-0 text-4xl font-semibold	'>Ahmed Ahmed</h1>
            <div className='flex items-center mt-0'>
              <div className='flex items-center mt-0 mr-2'>
                <i className="pi pi-user-plus mr-2"></i>
                <h4 className='mr-2'>Phd</h4>
              </div>
              <div className='flex items-center mt-0 mr-2'>
                <i className="pi pi-book mr-2"></i>
                <h4>Maths-Info</h4>
              </div>
              <div className='flex items-center mt-0 mr-2 '>
                <i className="pi pi-graduation-cap mr-2 "></i>
                <h4>Bases de données</h4>
              </div>
            </div>
          </div>
        </div>
        <a className='bg-cyan-300 rounded-2xl p-2 mr-2'>Modifier le Profile</a>
      </div>
      <div className='mt-5 bg-sky-200	 rounded-3xl flex items-center justify-between p-4 pl-5'>
        <div className='sec1'>
          <h1 className="mb-4 border-b border-solid border-zinc-700 pb-2 font-semibold">Informations personnelles</h1>
          <div className='flex flex-col'>
            {infosP.map((item, index) =>(
              <div className='flex items-center mb-2'>
              <h3 className='mr-2 w-80 font-medium '>{item.name} :</h3>
              <p>{item.Val}</p>
            </div>
            ))}
            
          </div>
        </div>
      </div>
      <div className='mt-5 bg-sky-200	 rounded-3xl flex items-center justify-between p-4 pl-5'>
        <div className='sec1'>
          <h1 className="mb-4 border-b border-solid border-zinc-700 pb-2 font-semibold">Informations Professionnelles</h1>
          <div className='flex flex-col'>
            {infosPr.map((item, index) =>(
              <div className='flex items-center mb-2'>
              <h3 className='mr-2 w-80 font-medium '>{item.name} :</h3>
              <p>{item.Val}</p>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default UserInfo;
