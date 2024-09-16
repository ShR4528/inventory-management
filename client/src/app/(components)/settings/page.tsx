'use client'

import React, { useState } from 'react'
import Header from '../Header';

type UserSettings = {
    label: string;
    value:string | boolean;
    type: "text" | "toggle";
}


const mockSettings: UserSettings[] = [
    { label: "Username", value: "john_doe", type: "text" },
    { label: "Email", value: "john.doe@example.com", type: "text" },
    { label: "Notification", value: true, type: "toggle" },
    { label: "Dark Mode", value: false, type: "toggle" },
    { label: "Language", value: "English", type: "text" },
    
]

const Settings = () => {
    const [userSettings, setUserSettings] = useState<UserSettings[]>(mockSettings);

    const handleToggleChange = (index: number) =>{
        const settingsCopy = [...userSettings];
        settingsCopy[index].value = !settingsCopy[index].value as boolean;
        setUserSettings(settingsCopy);
    }
  return (
    <div className='w-full'>
        <Header name="User Settings" />
        <div className='overflow-auto mt-5 shadow-md'>
            <table className='min-w-full bg-white rounded-lg'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Settings</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Value</th>
                    </tr>
                </thead>
            </table>
        </div>

    </div>
  )
}

export default Settings