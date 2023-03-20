import { useEffect, useState } from "react";
import axios from "axios";

const ModalDetail = ({ isOpen, closeModal, character }) => {
    const [personaje, setPersonaje] = useState();
    const rickmortyPath = "https://rickandmortyapi.com/api/";

    const getPersonaje = (res) =>{
        character != undefined && axios.get(`${rickmortyPath}character/${character}`)
        .then((response) => response.data)
        .then(data => res(data))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
        getPersonaje((Data) =>{
            setPersonaje(Data);
        });
    });

    return (
        <>
        <div
            className={`modal fixed top-0 left-0 h-full w-full overflow-y-auto overflow-x-hidden ${isOpen && 'modal-open'}`}
            id="staticModal">
            <div
                className="relative w-full min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div
                className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                    <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                        <h5
                        className="text-xl font-medium leading-normal text-neutral-800"
                        id="exampleModalLabel">
                            { character != undefined && personaje?.name }
                        </h5>
                        <button
                        type="button"
                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        onClick={closeModal}
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="relative p-4">
                        {/* Modal body */}
                        <p>{ character != undefined && personaje?.name }</p>
                        <p>{ character != undefined && personaje?.species }</p>
                        <p>{ character != undefined && personaje?.status }</p>
                        <p>{ character != undefined && personaje?.gender }</p>
                        <p>{ character != undefined && personaje?.origin.name }</p>
                        
                    </div>
                    <div
                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                        <button
                        type="button"
                        className="inline-block rounded bg-slate-200 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        onClick={closeModal}
                        >
                        Close
                        </button>
                        <button
                        type="button"
                        className="ml-1 inline-block rounded bg-slate-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        >
                        Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ModalDetail;