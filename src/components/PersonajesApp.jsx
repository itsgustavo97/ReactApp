import { useEffect, useState } from "react";
import axios from "axios";
import ModalDetail from "./ModalDetail";

const PersonajesApp = () =>{
    const [personajes, setPersonajes] = useState([]);

    const rickmortyPath = "https://rickandmortyapi.com/api/";

    const getAll = (res) =>{
        axios.get(`${rickmortyPath}character`)
        .then((response) => response.data)
        .then(data => res(data))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getAll((Data) =>{
            setPersonajes(Data.results);
        });
    });

    const [modalItem, setModalItem] = useState();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = (item) => {
        setIsOpenModal(true);
        passProp(item);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    const passProp = (personaje) =>{
        setModalItem(personaje);
    }
    
    return (
        <>
        <div className="bg-sky-900 h-32 p-2 grid grid-cols-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/938px-Rick_and_Morty.svg.png" className="h-28"/>
            <h3 className="text-5xl font-semibold text-green-400 my-6">Rick and Morty on React</h3>
        </div>
        <div className="bg-stone-400 p-6">
            <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 gap-x-8 gap-y-4">
            {
                personajes.map(({id, name, image, origin, gender }, index) => (
                    <div className="max-w-lg bg-slate-100 dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2" key={id}>
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src={ image } alt="Modern building architecture"/>
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{ origin.name }</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-sky-500 dark:text-sky-400 hover:underline">{ name }</a>
                                <p className="mt-2 text-slate-500">{ gender }</p>
                                <input type="button" className="bg-stone-400 py-1 px-4 rounded-full" value="Detalles"
                                onClick={() => openModal(id)}/>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <ModalDetail 
                isOpen={isOpenModal}
                closeModal={closeModal}
                character={modalItem}
            />
        </div>
        </>
    )
}


export default PersonajesApp;