import React from 'react'

const ConfirmationModal = ({confirmationModal}) => {
  return (
    <div  className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-opacity-10 backdrop-blur-sm">
        <div  className="w-11/12 max-w-[350px] rounded-lg border border-slate-400 bg-slate-700 p-6">
            <p className="text-2xl font-semibold text-slate-200">{confirmationModal.text1}</p>
            <p className="mt-3 mb-5 leading-6 text-slate-300">{confirmationModal.text2}</p>
            <div className="flex items-center justify-between gap-x-4">
              <button className="cursor-pointer rounded-md bg-red-400 py-[8px] px-[20px] font-semibold text-white" onClick={confirmationModal?.btn1Handler}>{confirmationModal?.btn1Text}</button>
              <button className="cursor-pointer rounded-md bg-slate-800 py-[8px] px-[20px] font-semibold text-white"  onClick={confirmationModal?.btn2Handler}>
                 {confirmationModal?.btn2Text}
              </button>
            </div>
        </div>   
    </div>
  )
}

export default ConfirmationModal