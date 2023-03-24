import "./Modal.css";
const Modal = ({open,children}) => {
	return <>
	{open && <div className=" main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
		style={{background: "rgba(0,0,0,.7)"}}
		>
		<div
			className="border-2 border-neutral-600 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
			<div className="modal-content py-4 text-left px-6 dark:bg-neutral-800 dark:text-white">
				{children}
			</div>
		</div>
	</div>}

	</>
}


export default Modal;