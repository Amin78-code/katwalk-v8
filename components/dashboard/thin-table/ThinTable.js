import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ThinTable.module.css";

function ThinTable({ data }) {
  // const [isDisableBust, setIsDisableBust] = useState(false);

  // const bustSelect = useRef("");

  return (
    <>
      <table className="w-[100%] text-[#212529] border-[#dee2e6] border-[1px] fwr text-[13px] mb-[16px]">
        <thead>
          <tr>
            <td className="text-center p-[.75rem] border-[1px] border-[#dee2e6]">
              Variant
            </td>
            <td className="text-center p-[.75rem] border-[1px] border-[#dee2e6]">
              Quality
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index + 1}>
                <td className="p-[.75rem] border-[1px] border-[#dee2e6]">
                  {value.variantName}
                </td>
                <td className="p-[.75rem] border-[1px] border-[#dee2e6]">
                  <input
                    type="number"
                    className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                    value={value.value}
                    step="1"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ThinTable;
