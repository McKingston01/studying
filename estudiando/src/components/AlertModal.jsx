const AlertModal = ({ alerts, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-customFormGreen text-white p-6 rounded-lg shadow-lg">
                <ul className="mb-4">
                    {alerts.map((alert, index) => (
                        <li key={index} className="mb-2">{alert}</li>
                    ))}
                </ul>
                <div className="flex justify-center">
                    <button 
                        className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
                        onClick={onClose}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;