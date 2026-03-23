import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Auto hide after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-20 right-4 left-4 md:left-auto md:w-auto z-50 animate-fade-in-down">
            <div className="bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center justify-between border border-emerald-400/30 backdrop-blur-sm bg-opacity-95">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                        <CheckCircle size={20} className="text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Success</h4>
                        <p className="text-sm font-medium opacity-90">{message}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 text-white/50 hover:text-white transition-colors"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
