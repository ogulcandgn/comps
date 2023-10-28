function Modal() {
  return (
    <div>
      {/* inset-0 : bütün sayfayı kaplar */}
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      {/* burası modal */}
      <div className="absolute inset-80 p-10 bg-white">This a modal!</div>
    </div>
  );
}

export default Modal;
