import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ChooseImageModal.module.css";
import Overlay from "../overlay/Overlay";
import ImgCard from "../img-card/ImgCard";
import img1 from "../../../../assets/images/uploaded/IMG 3136.jpg";
import img2 from "../../../../assets/images/uploaded/IMG_2376.jpg";
import img3 from "../../../../assets/images/uploaded/IMG_2377.jpg";
import img4 from "../../../../assets/images/uploaded/IMG_2378.jpg";
import UploadNewImgCard from "../upload-new-img-card/UploadNewImgCard";
import ImgLazyLoad from "../../img-lazy-load/ImgLazyLoad";


function ChooseImageModal({ data }) {

  const [uploadedPictures, setUploadedPictures] = useState([
    {
      img: img1,
      name: "",
      sizeInKB: "199",
      fileType: "",
    },
    {
      img: img2,
      name: "",
      sizeInKB: "248",
      fileType: "",
    },
    {
      img: img3,
      name: "",
      sizeInKB: "80",
      fileType: "",
    },
    {
      img: img4,
      name: "",
      sizeInKB: "83",
      fileType: "",
    },
  ]);
  //  useEffect(() => {
  //   for (let i = 0; i < uploadedPictures.length; i++) {

  //     let imgPath = null;
  //     let _imgPath = null;
  //     if (uploadedPictures[i].img.src == undefined) {
  //       console.log(">> yes");
  //     } else {
  //       console.log(">> else");
  //       imgPath = uploadedPictures[i].img?.src.split("/");
  //       _imgPath = imgPath[imgPath.length - 1];
  //   console.log(">> _imgPath",_imgPath)

  //   let _uploadedPictures = uploadedPictures;
  //   _uploadedPictures.push({
  //     img: img1,
  //     name: imgPath,
  //     sizeInKB: "199",
  //     fileType: "",
  //   })
  //   // setUploadedPictures(_uploadedPictures);
  //       // for (let k = 0; k < selectedImgs.length; k++) {
  //       //   if (selectedImgs[k] == _imgPath) {
  //       //     console.log("yess");
  //       //   }
  //       // }
  //     }


  //   }


    



  // }, []);

  const [selectedImgs, setSelectedImgs] = useState([]);
  const [uploadFailed, setUploadFailed] = useState(true);
  const [uploadNewImg, setUploadNewImg] = useState([
    { img: img1 },
    { img: img2 },
  ]);
  const [selectedPicutre, setSelectedPicture] = useState(null);
  // const [error, setError] = useState("");
  const imgTypes = ["image/png", "image/jpeg"];

  const [uploadedImg, setUploadedImg] = useState([]);
  const [imgSize, setImgSize] = useState(null);
  const [imgName, setImgName] = useState(null);
  const [fileType, setFileType] = useState(null);

  const tab1 = useRef(null);
  const tab2 = useRef(null);

  const tab1btn = useRef(null);
  const tab2btn = useRef(null);

  function tabToggle(tabName) {
    if (tabName == "tab1") {
      tab2.current.classList.remove("dblock");
      tab1.current.classList.add("dblock");

      tab2btn.current.classList.remove(styles.active);
      tab1btn.current.classList.add(styles.active);
    }
    if (tabName == "tab2") {
      tab1.current.classList.remove("dblock");
      tab2.current.classList.add("dblock");

      tab1btn.current.classList.remove(styles.active);
      tab2btn.current.classList.add(styles.active);
    }
  }

  const hideModal = () => {
    document.getElementById("upload_overlay").classList.remove("dblock");
  };

  const selecImg = (data, id) => {
    console.log("selecImg",data," - ", id)
    let _uploadedPictures = uploadedPictures;
    let _selectedImgs = selectedImgs;

    for (let i = 0; i < _uploadedPictures.length; i++) {
      if (_uploadedPictures[i].img == data.img) {
        let imgPath = _uploadedPictures[i].img.src.split("/");
        let _imgPath = imgPath[imgPath.length - 1];

        let alreadyExist = false;
        for (let j = 0; j < _selectedImgs.length; j++) {
          if (_selectedImgs[j] == _imgPath) {
            alreadyExist = true;
            _selectedImgs.splice(j, 1);
            setSelectedImgs([]);
            setSelectedImgs(_selectedImgs);
          }
        }
        if (alreadyExist !== true) {
          _selectedImgs.push(_imgPath);
        }
      }
    }
    setSelectedImgs([]);
    setSelectedImgs(_selectedImgs);
  };

  // const changeHandle =(e)=> {
  //   let selectedImg = e.target.files[0];
  //   console.log("selectedImg",selectedImg);

  //   if(selectedImg && imgTypes.includes(selectedImg.type)) {
  //     setSelectedPicture(selectedImg)
  //   } else {
  //     setSelectedPicture("")
  //     // setError("Please select any image.")
  //   }

  //   console.log("selectedpicture", selectedPicutre)
  // }

  const types = ["image/png", "image/jpeg", "video/mp4"];

  const changeHandle = (e) => {
    let files = e.target.files;

    let uploadedFiles = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i] && types.includes(files[i].type)) {
        let fileName = files[i].name;
        let fileSize = files[i].size;

        if (fileSize <= 1000000) {
          fileSize = (fileSize / 1000).toFixed(2) + "kb";
        }
        if (fileSize == 1000000 || fileSize <= 1000000000) {
          fileSize = (fileSize / 1000000).toFixed(2) + "mb";
        }
        if (fileSize == 1000000000 || fileSize <= 1000000000000) {
          fileSize = (fileSize / 1000000000).toFixed(2) + "gb";
        }

        const reader = new FileReader();
        let imgUploadedNow = null;

        reader.onload = () => {
          if (reader.readyState === 2) {
            uploadedFiles.push({
              img: reader.result,
              name: files[i].name,
              sizeInKB: fileSize,
              fileType: files[i].type,
            });

            setUploadedImg([...uploadedFiles]);

            let _uploadedPictures = uploadedPictures;
            _uploadedPictures.unshift({
              img: reader.result,
              name: files[i].name,
              sizeInKB: fileSize,
              fileType: files[i].type,
            });

            setUploadedPictures(_uploadedPictures);

            // setUploadedImg(reader.result);
            // imgUploadedNow = reader.result;

            // setImgSize(fileSize);
            // setImgName(fileName);
            // setFileType(file.type);

            // let _uploadedPictures = uploadedPictures;
            // _uploadedPictures.unshift({
            //   img: imgUploadedNow,
            //   name: fileName,
            //   sizeInKB: fileSize,
            //   fileType: file.type,
            // });

            // setUploadedPictures(_uploadedPictures);
          }
        };
        reader.readAsDataURL(e.target.files[i]);

        setUploadFailed(false);
      } else {
        setUploadFailed(true);
      }
    }
  };

  const addMoreImages = () => {
    setUploadedImg([]);
  };

  return (
    <>
      <Overlay>
        <div
          className={`${styles.modal} mt-[30px] w-[100%] max-w-[1050px]  bg-[#f8f9fa] rounded-[0.3rem] relative`}
        >
          <span
            className="text-[20px] absolute right-[25px] top-[20px] cursor-pointer"
            onClick={() => hideModal()}
          >
            <i className="las la-times"></i>
          </span>
          <ul className="flex flex-wrap text-sm font-medium gap-x-[20px] text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 px-[40px] pt-[25px]">
            <li className="mr-2" onClick={() => tabToggle("tab1")}>
              <a
                ref={tab1btn}
                className={`fwr inline-block p-[13px] text-[12px] bg-[#f8f9fa] rounded-t-lg uppercase mb-[-1px] cursor-pointer ${styles.active}`}
              >
                select file
              </a>
            </li>
            <li className="mr-2" onClick={() => tabToggle("tab2")}>
              <a
                ref={tab2btn}
                className={`fwr inline-block p-[13px] text-[12px] bg-[#f8f9fa] rounded-t-lg uppercase mb-[-1px] cursor-pointer`}
              >
                upload new
              </a>
            </li>
          </ul>

          <div className="fwr bg-[#fff] w-[100%] h-[100%] py-[18px] px-[25px]">
            <div className="h-[100%] dnone dblock" ref={tab1}>
              <div className="border-b-[1px] border-[#dee2e6] flex pb-[16px]">
                <select className="fwl admin-input w-[171px] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]">
                  <option>Sort by newest</option>
                  <option>Sort by oldest</option>
                  <option>Sort by smallest</option>
                  <option>Sort by largest</option>
                </select>

                <div className="flex items-center mx-[20px]">
                  <input
                    className="radio-btn-orange relative form-check-input appearance-none rounded-full w-[12px] h-[12px] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="select_only"
                    id="select_only"
                  />
                  <label
                    className="fwr text-[13px] form-check-label inline-block capitalize flex"
                    htmlFor="select_only"
                  >
                    Selected Only
                  </label>
                </div>

                <input
                  type="text"
                  className="fwl admin-input w-[256px] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  placeholder="Search for files"
                />
              </div>
              <div
                className={`${styles.images_main_div} max-h-[65%]        sm:max-h-[100%] overflow-auto flex flex-wrap pt-[20px] gap-x-[20px]`}
              >
                {uploadedPictures.map((value, index) => {
                  return (
                    <ImgCard
                      key={index + 1}
                      data={value}
                      index={index}
                      selectedImgs={selectedImgs}
                      selecImg={selecImg}
                    />
                  );
                })}
              </div>
            </div>
            <div className="h-[100%] dnone" ref={tab2}>
              {/* <div
                className={`w-[100%] h-[100%] border-[1px] border-[#00000020] rounded-[.25rem] bg-[#f8f9fa] border-[#dee2e6] border-[1px] p-[.5rem]`}
              >
                <div className="w-[100%] h-[100%] border-[#dfdfdf] border-[1px] border-dashed p-[1rem] flex justify-center items-center flex-col">
                  <h1 className="text-[#525252] text-[27px]">
                    Drop files here, paste or&nbsp;
                   <span  className="cursor-pointer">
                   <span className="text-[#2275d7e6] cursor-pointer hover:underline relative">
                      Browse
                      <input
                        type="file"
                        id="img"
                        name="img"
                        accept="image/*"
                        className="absolute cursor-pointer w-[100%] h-[100%] left-0 top-0 opacity-0"
                      />
                    </span>
                   </span>
                  </h1>
                </div>
              </div> */}
              <div className="w-[100%] h-[100%] relative overflow-hidden z-[1]">
                {uploadedImg?.length == 0 ? (
                  <div
                    className={`w-[100%] h-[100%] border-[1px] border-[#00000020 ] rounded-[.25rem] bg-[#f8f9fa] border-[#dee2e6] border-[1px] p-[.5rem] translate-y-[-50 px]`}
                  >
                    <div
                      className={`w-[100%] ${styles.inner_browse_div} border-[#dfdfdf] border-[1px] border-dashed p-[1rem] flex justify-center items-center flex-col`}
                    >
                      <h1 className="text-[#525252] text-[27px]">
                        Drop files here, paste or&nbsp;
                        <span className="cursor-pointer">
                          <span className="text-[#2275d7e6] cursor-pointer hover:underline relative">
                            Browse
                            <input
                              type="file"
                              id="img"
                              name="img"
                              // accept="image/*"
                              multiple
                              className="absolute cursor-pointer w-[100%] h-[100%] left-0 top-0 opacity-0"
                              onChange={changeHandle}
                            />
                          </span>
                        </span>
                      </h1>

                      {/* <div className="W-[40px] h-[40px] border-[2px]  border-[#000]">
            {
              uploadedImg == null ? 
              <Image src={img4} alt="image" />
              :
              <>
              no
              <Image src={uploadedImg} alt={"image"} classes={""} layout='fill' width="30" height="30" />
              </>
            }
                 </div> */}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`w-[100%] h-[100%] border-[1px] border-[#00000020] rounded-[.25rem] bg-[#f8f9fa] border-[#dee2e6] border-[1px] flex flex-col `}
                  >
                    <div className="w-[100%] min-h-[50px] h-[50px] border-[#dfdfdf] border-b-[1px] flex justify-between items-center px-[10px]">
                      <div className="w-[20px]       sm:w-[130px]"></div>
                      <p className="fwr text-[14px] text-[#333] ">
                        Upload complete
                      </p>
                      <button
                        onClick={() => addMoreImages()}
                        className="w-[20px]      sm:w-[90px] fwr leading-[1] text-[#2275d7] text-[14px] flex items-center"
                      >
                        <i className="las la-plus text-[#2275d7] text-[16px] mr-[3px]"></i>
                        Add more
                      </button>
                    </div>
                    <div className="w-[100%] flex-[4] flex-col      sm:flex-row border-[#dfdfdf ] border-b-[1px ] p-[15px] flex flex-nowrap         sm:flex-wrap gap-x-[28px] overflow-auto">
                      {/* {uploadNewImg.map((value) => {
                       return <UploadNewImgCard key={value} data={value} />;
                     })} */}

                      {uploadedImg?.length == 0 ? (
                        ""
                      ) : (
                        <>
                          {uploadedImg.map((value, index) => {
                            return (
                              <>
                                {value.fileType == "video/mp4" ? (
                                  <div className="w-[166px] mb-[10px]" key={value.name}>
                                    <div className="w-[100%] h-[140px] rounded-[3px] overflow-hidden bg-[#19af67] flex justify-center items-center">
                                      <i className="las la-video text-[30px] px-[15px] py-[20px] rounded-[3px] bg-[#fff]"></i>
                                    </div>

                                    <h6 className="text-[12px] leading-[1.3] pt-[9px] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
                                      {value.name !== null ? value.name : ""}
                                    </h6>

                                    <p className="text-[11px] leading-[1.3] text-[#757575]">
                                      <span>
                                        {value.sizeInKB !== null
                                          ? value.sizeInKB
                                          : ""}
                                      </span>
                                    </p>
                                  </div>
                                ) : (
                                  <div className="w-[166px] mb-[10px]" key={value.name}>
                                    <div className="w-[100%] h-[140px] rounded-[3px] overflow-hidden">
                                      <span className="image_container">
                                        <Image
                                          src={value.img}
                                          alt={"image"}
                                          width="30"
                                          height="30"
                                        />
                                      </span>
                                    </div>

                                    <h6 className="text-[12px] leading-[1.3] pt-[9px] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
                                      {value.name !== null ? value.name : ""}
                                    </h6>

                                    <p className="text-[11px] leading-[1.3] text-[#757575]">
                                      <span>
                                        {value.sizeInKB !== null
                                          ? value.sizeInKB
                                          : ""}
                                      </span>
                                    </p>
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </>
                      )}
                    </div>

                    {uploadFailed && uploadFailed == true ? (
                      <div className="w-[100%] h-[45px] bg-[#fff]">
                        <div className="w-[100%] h-[2px] ">
                          <div
                            className={`w-[100%] h-[2px] bg-[#e32437] `}
                          ></div>
                        </div>
                        <div className="w-[100%] h-[100%] p-[15px] flex justify-start items-center">
                          <p className="capitalize text-[12px] text-[#333] flex">
                            <i className="las la-times text-[16px] text-[#e32437] mr-[5px]"></i>
                            upload failed
                            <i className="las la-question text-[16px] text-[#e32437] cursor-help ml-[5px]"></i>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-[100%] h-[45px] bg-[#fff]">
                        <div className="w-[100%] h-[2px] ">
                          <div
                            className={`w-[100%] h-[2px] bg-[#1bb240]`}
                          ></div>
                        </div>
                        <div className="w-[100%] h-[100%] p-[15px] flex justify-start items-center">
                          <p className="capitalize text-[12px] text-[#333] flex">
                            <i className="las la-check text-[16px] text-[#1bb240] mr-[5px]"></i>
                            complete
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[89px] bg-[#f8f9fa] border-t-[1px] border-[#ebedf2] py-[10px] px-[25px] flex justify-between items-center">
            <div className="flex">
              <div className="flex flex-col items-end mr-[1rem]">
                <p className="fwr text-[13px] text-[#1b1b28]">
                  <span>0</span> File selected
                </p>
                <button className="ffr uppercase w-[61px] h-[40px] leading-[40px] text-[#e62e04] text-[0.8125rem] tracking-[.2em] border-b-[1px] border-[#e62e04]">
                  clear
                </button>
              </div>

              <button className="h-[40px] light-brown-btn ffr text-[0.875rem] text-[#fff] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px]">
                prev
              </button>

              <button className="h-[40px] light-brown-btn ffr text-[0.875rem] text-[#fff] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] ml-[10px]">
                next
              </button>
            </div>
            <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
              add files
            </button>
          </div>
        </div>
      </Overlay>
    </>
  );
}

export default ChooseImageModal;
