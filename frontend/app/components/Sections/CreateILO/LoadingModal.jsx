const LoadingModal = ({ isOpen, status, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1F211C] p-8 rounded-xl shadow-lg max-w-md w-full">
        {status === "loading" && (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#644881] mb-4"></div>
            <p className="text-white">Launching your token...</p>
          </div>
        )}
        {status === "success" && (
          <div className="text-center">
            <div className="text-green-500 text-xl mb-4">✓</div>
            <p className="text-white">{message}</p>
          </div>
        )}
        {status === "error" && (
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">×</div>
            <p className="text-white">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default LoadingModal;