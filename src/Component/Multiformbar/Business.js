// import Textfield from '../Formfield/Textfield';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { connect } from 'react-redux';
import styles from '../../assets/css/Registration.module.css';
import styles2 from '../../assets/css/style.module.css' 
import styles3 from '../../assets/css/Activate.module.css'
import './MultiStepProgressBar.css'
// import Inputfield from '../Formfield/Inputfield';
// import Selectfield from '../Formfield/Selectfield';
import { useEffect, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
import DragandDrop from "../Drag-and-Drop/DragandDrop";
// import { postbusiness, postkyc } from '../../Redux/Activate/BusinessAction';
// import LottieAnimation from '../../Lotties';
// import loader from '../../Assets/loading.json'
// import Errormodal from '../Modal/Errormodal';
// import LoadingModal from '../Modal/LoadingModal';
const Business = ({next, business, error, loading,kyc,kycload, kycerror}) => {
    const [nameState, setNameState] = useState({});
    const [formState, setFormState] = useState(null)
    const [postState, setPostState] = useState({});
    const[filename, setFilename] = useState('')
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [mermat, setMermat] = useState("");
    const [bvn, setbvn] = useState("");
    const [dob, setdob] = useState('');
    const [show, setShow] = useState(false)
    const [showkyc, setshowkyc]= useState(false)
    // const [mermat, setmermat] = useState('');
    const [rcNumber, setrcNumber]= useState("");
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    // const options = [{name:'name'},{name:'games'}]

    // const handlebvn = (e) => {
    //     const value = e.target.value;
    //     setbvn(value);
    //     setNameState({ ...nameState, ...{ bvn } });
    //     setPostState({ ...postState, ...{ bvn } });
    // };
    // const handledob = (e) => {
    //     const value = e.target.value;
    //     setdob(value);
    //     setNameState({ ...nameState, ...{ dob } });
    //     setPostState({ ...postState, ...{ dob } });
    // };
    useEffect(() => {
        if (dob !== "" && bvn.length === 11) {
            kyc(postState, 
                ()=>{ 
                setShow(true);
                }, ()=>{ 
                    setshowkyc(true);
                    }
            )
            // postData(nameState);
            // setaccountName(name.data.accountName)
        }
        
    }, [bvn, dob, postState]);
    const handlercnumber = (e) => {
        const value = e.target.value;
        setrcNumber(value);
        setNameState({ ...nameState, ...{ rcNumber } });
    };
    const handlemermat = (e) => {
        const value = e.target.value;
        setMermat(value);
        setNameState({ ...nameState, ...{ mermat } });
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const togglemodal2 = ()=>{
        setshowkyc(!showkyc)
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('mermat',filename2);
    //     formData.append('bvn', bvn);
    //     formData.append('dob',dob);
    //     formData.append('rcNumber', rcNumber);
    //     try{
            
    //         await business(formData, ()=>{ 
    //         next();
    //         // setPending(true);
    //         }, ()=>{ 
    //             setErrorHandler(error)
    //             setshowerror(true)
    //             // setPending(false);
    //         });
    //     }catch(error){
    //         // setPending(false)
    //     }
    // };
    return ( 
        <form method='post'>
            <p className="businessHead">Enter verification details for at least one of the directors</p>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>BVN</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter BNV"
                        // onBlur={handlebvn}
                        // onChange={handlebvn}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>DOB</label>
                    <input 
                        className={styles2.fieldinput}
                        type="date"
                        // placeholder="Enter Rc Number"
                        // onBlur={handledob}
                        // onChange={handledob}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Rc Number</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Rc Number"
                        // onBlur={handlercnumber}
                        // onChange={handlercnumber}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Mermat</p>
               <DragandDrop/>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Board Resolution</p>
               <DragandDrop/>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            {/* {show && (
                <div>
                    {loading ? (
                        <button className={styles3.activateButton} disabled>
                            <LottieAnimation data={loader}/>
                        </button>
                    ) : (
                        <button className={styles3.activateButton}><span>Save</span></button>
                    )}
                </div>
            )} */}
            <div className="signup-button">
            <button onClick={()=>{next();}} className="btn btn-primary shadow-2 mb-4 text-center submit-button"><span>Save</span></button>        
            </div>
            
 
            {/* {kycload && (<LoadingModal/>)}
            {showkyc&& (<Errormodal error={kycerror} togglemodal={togglemodal2}/>)}
            {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)} */}
        </form>
    );
}

export default Business;
// const mapStoreToProps = (state) => {
//     return {
//         error: state.business.error,
//         loading: state.business.loading,
//         kycload: state.kyc.loading,
//         kycerror: state.kyc.error
//     };
// };
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//         business: (nameState, history, setErrorHandler) => {
//             dispatch(postbusiness(nameState, history, setErrorHandler));
//         },
//         kyc: (nameState, history, errors) => {
//             dispatch(postkyc(nameState, history, errors));
//         }
//     };
// };

// export default connect(mapStoreToProps, mapDispatchToProps)(Business);