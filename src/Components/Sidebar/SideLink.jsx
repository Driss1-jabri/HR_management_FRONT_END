import React from 'react';
import { Ripple } from 'primereact/Ripple';

export function SideLink({ title }) {
    return (<li>
        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
            <i className="pi pi-home mr-2"></i>
            <span className="font-medium">{title}</span>
            <Ripple />
        </a>
    </li>);
}
