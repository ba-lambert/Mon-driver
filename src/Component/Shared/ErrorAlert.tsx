import React, {useEffect, useState} from "react";

interface ErrorAlertProps {
    error: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [error]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed top-20 z-50 bg-red-500 text-white px-6 py-3 rounded-md shadow-md">
            {error}
        </div>
    );
};
export default ErrorAlert