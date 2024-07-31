// src/Component/reusables/Notification.tsx
import React from 'react';

interface NotificationProps {
    message: string;
    type: 'success' | 'error';
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    return (
        <div className={`notification ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-4 rounded`}>
            {message}
        </div>
    );
};

export default Notification;
