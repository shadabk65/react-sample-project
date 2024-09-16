import { useState } from 'react'
import { selectUser } from '../../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import useConfig from '../../../hooks/useConfig';
import BasicModal from '../../../components/models/model'
import { motion, AnimatePresence } from "framer-motion";
import ModelsSidebar from '../../../components/model-sidebars/ModelSidebar'

const Home = () =>{
	const [state, setState] = useState(0)
	const [popup, setPopup] = useState(false)
	const [show, setShow] = useState(false);
	const user = useSelector(selectUser)
	const data = useConfig();

	const handleButtonClick = () =>{
		setShow(true);
		// setPopup(true)
		// setState(1)
	}

	const closeSidebar = () => {
    if (show===true) {
      setShow(false);
    }
  };
	
	return(
		<>
		  <h1> Home </h1>
		  <button onClick={handleButtonClick}> click me </button>

		  {popup && (
        <BasicModal
          state={state}
          popup={popup}
          setPopup={setPopup}
          setState={setState}
        />
      )}

		  <div className="relative">
	      <AnimatePresence>
	          {show === true && (
	            <motion.div
	              className="w-full h-full absolute z-50 backdrop-blur-sm"
	              initial={{ opacity: 0, x: 500 }}
	              transition={{ duration: 0.3 }}
	              animate={{ opacity: 1, x: 0 }}
	              exit={{ opacity: 0, x: 500 }}
	              onClick={closeSidebar}
	            >
	              <ModelsSidebar
	                model={"request"}
	                show={show}
	                setShow={setShow}
	                setPopup={setPopup}
	              />
	            </motion.div>
	          )}
	        </AnimatePresence>
	      </div>
		</>
	)
}

export default Home