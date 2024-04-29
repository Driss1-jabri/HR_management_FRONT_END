import useSidebar from './useSidebar'
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { StyleClass } from 'primereact/StyleClass';
import logof from '../../assets/images/fsts.png';
import profile from '../../assets/images/profile.jpg'
import { SideLink } from './SideLink';


const MySidebar = () => {
    const {btnRef1, btnRef2, btnRef3, btnRef4} = useSidebar();
  return (
    <div>
        <Sidebar
                modal={false}
                visible={true}
                content={({ closeIconRef, hide }) => (
                    
                        <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1  select-none" >
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2 m-auto">
                                        
                                        <img src={logof} />
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <ul className="list-none p-0 m-0 overflow-hidden i">
                                                <SideLink   title="Accueille"  />
                                                <SideLink   title="pièces jointes"  />
                                                <SideLink   title="Demandes"  />
                                                <SideLink   title="Messages"  />
                                                
                                            </ul>
                                        </li>
                                    </ul>    
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar style={{ width: '50px' }}  image={profile} shape="circle" />
                                        <span className="font-bold">Ahmed Ahmed</span>
                                    </a>
                                </div>
                            </div>
                        </div>                   
                )}
            ></Sidebar>
    </div>
  )
}
  export default MySidebar