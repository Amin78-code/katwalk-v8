import React, { useRef, useState } from 'react'

export default function Options({ value, index, setOption }) {
    const typeSelect = useRef("");
    const [selectedType, setSelectedType] = useState("Choose Type");
    const [selectedSizeAndFit, setSelectedSizeAndFit] =
        useState("Choose Size & Fit");
    const [selectedFabricType, setSelectedFabricType] =
        useState("nothing selected");
    const [selectedFabricWeight, setSelectedFabricWeight] = useState(
        "Choose Fabric Weight"
    );
    const [selectedCareInstructions, setSelectedCareInstructions] =
        useState("nothing selected");
    const [selectedShippingAndReturns, setSelectedShippingAndReturns] = useState(
        "Choose Shipping & Returns"
    );

    const [options, setOptions] = useState([])

    function optionsHandler(e, values) {
        let _productOptions = values;
        let __productOptions = [];
        for (let i = 0; i < _productOptions.length; i++) {
            __productOptions.push(values[i].toLowerCase())
        }
        const matched = __productOptions.filter((item) => item.startsWith(e.target.value.toLowerCase()));

        setOptions(matched);
    }

    return (
        <div
            ref={typeSelect}
            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
            id={"options" + index}
        >
            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                <div className="py-[4px] px-[8px]">
                    {/* kam */}
                    <input
                        onChange={(e) => optionsHandler(e, value.options, value)}
                        className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                </div>
                <ul>
                    {
                        (options.length > 0 ? options : value.options).map((valu) => {
                            return (
                                <li
                                    key={valu + 1}
                                    onClick={() => setOption(valu, index)}
                                    className={`
            
            ${index == 0
                                            ? valu == selectedType
                                                ? styles.active_option
                                                : ""
                                            : ""
                                        }
            ${index == 1
                                            ? valu == selectedSizeAndFit
                                                ? styles.active_option
                                                : ""
                                            : ""
                                        }
              ${index == 2
                                            ? valu == selectedFabricType
                                                ? styles.active_option
                                                : ""
                                            : ""
                                        }
                ${index == 3
                                            ? valu == selectedFabricWeight
                                                ? styles.active_option
                                                : ""
                                            : ""
                                        }
                  ${index == 4
                                            ? valu ==
                                                selectedCareInstructions
                                                ? styles.active_option
                                                : ""
                                            : ""
                                        }
                    ${index == 5
                                            ? valu ==
                                                selectedShippingAndReturns
                                                ? styles.active_option
                                                : ""
                                            : ""
                                        }
            block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                                >
                                    {valu}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>

    )
}
