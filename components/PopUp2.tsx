import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function PopUp2({ setPopUpOpened2, popUpOpened2 }: { setPopUpOpened2: any, popUpOpened2: any }) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={popUpOpened2} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setPopUpOpened2(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-mtitle font-bold leading-6 text-gray-900 text-left">
                        Transaction
                      </Dialog.Title>
                      <div className="mt-3 flex flex-col gap-5 items-start justify-start">
                        <p className="text-sm text-gray-500 text-left">
                          Sell over 100 crypto currencies with USDs.
                        </p>
                        <div className="flex flex-col gap-1 justify-start items-start">
                          <span className='text-text font-bold'>Choose currency</span>
                          <select className='bg-gray-100 w-[350px] h-auto px-[16px] py-[12px] rounded-[15px]' /* value={selectedCurrency} onChange={e => setSelectedCurrency(e.target.value)}*/>
                            <option value="BTCUSD">BTCUSD</option>
                            <option value="ETHUSD">ETHUSD</option>
                            <option value="SOLUSD">SOLUSD</option>
                            <option value="DOGEUSD">DOGEUSD</option>
                          </select>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <span className='text-text font-bold'>Choose the amount you want to sell</span>
                          <input 
                            type="number"
                            // value={investedCapital}
                            // onChange={e => setInvestedCapital(e.target.value)}
                            min="0"
                            max="10000" 
                            className='outline-none border-b-[1.5px] w-[300px] text-headline'></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      onClick={() => setPopUpOpened2(false)}
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-purple-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => setPopUpOpened2(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}