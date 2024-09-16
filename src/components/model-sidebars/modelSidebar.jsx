import React from 'react'
import SampleSidebarModal from './sample-sidebar-modal/SampleSidebarModal' 

function ModelsSidebar({ model, show, setShow, setPopup }) {
    return (
        <div onClick={(e)=>{e.stopPropagation()}} className={`shadow-2xl flex justify-end h-[80.5vh] h-full fixed right-0 bg-[#363D50] overflow-y-scroll scrollbar-hide ${show ? " max-w-[340px] md:max-w-[591px] slide-in" : "max-ml-[-340px] xl:max-ml-[-591px] slide-out hidden"}`}>
            {model === 'request' && <SampleSidebarModal show={show} setShow={setShow} model={true} />}        
        </div>
    )
}

export default ModelsSidebar