'use client';
import Toast, { type ToastType } from "@/components/Toast";
import useToast from "@/components/Toast/useToast";
import { createContext, useContext } from "react";

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
    hideToast: () => void;
    toast: {
        message: string;
        type: ToastType;
        isVisible: boolean;
    };
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const toastData = useToast();

    return (
        <ToastContext.Provider value={toastData}>
            {children}
            <Toast
                message={toastData.toast.message}
                type={toastData.toast.type}
                isVisible={toastData.toast.isVisible}
                onClose={toastData.hideToast}
            />
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToastContext must be used within a ToastProvider');
    }
    return context;
};