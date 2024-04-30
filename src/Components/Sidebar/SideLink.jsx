import React from 'react';
import { Ripple } from 'primereact/Ripple';

export function SideLink({ icon, title  }) {
    return (
    <li>
        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
            <i className={icon}></i>
            <span className="font-medium">{title}</span>
            <Ripple />
        </a>
    </li>);
}
