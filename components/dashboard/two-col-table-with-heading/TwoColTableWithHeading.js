import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./TwoColTableWithHeading.module.css";

function TwoColTableWithHeading({ data, tableType, pageName, toggleModal }) {
  // console.log("Data", data.data);
  return (
    <>
      <table className="fwr w-[100%] text-[#212529] text-[13px] leading-[1.5] tracking-[0.5px]">
        <thead>
          <tr className={`border-b-[2px] border-[#dee2e6]`}>
            {data.headings.map((value, index) => {
              return (
                <td
                  key={value + 1}
                  className={`fwr p-[.75rem] text-center font-[600] capitalize ${
                    index == data.headings.length - 1 &&
                    pageName !== "dashboardHomePage"
                      ? "text-right"
                      : ""
                  }`}
                >
                  {value}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.length == 0 ? (
            <tr>
              <td colSpan={5}>
                <div className="w-[100%] flex justify-center items-center h-[140px]">
                  <div className="w-[100%]">
                    <i className="las la-frown text-[60px] block text-center text-[#909294] mt-[22px]"></i>
                    <h5 className="fwr text-[#212529] text-[20px] text-center pt-[5px]">
                      Nothing found
                    </h5>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <>
              {" "}
              {data.data.map((value, index) => {
                return (
                  <tr
                    key={value + 1}
                    className={`border-t-[1px] border-[#dee2e6]`}
                  >
                    {value.value.map((valu, inde) => {
                      return (
                        <td
                          key={valu + 1}
                          className={`align-top p-[.75rem] ${
                            inde == 1 && pageName !== "dashboardHomePage"
                              ? "w-[30%]"
                              : ""
                          }`}
                        >
                          {valu}
                        </td>
                      );
                    })}
                    {tableType && tableType == true ? (
                      <td className="p-[.75rem] flex gap-x-[5px] justify-end">
                        <div>
                          <Link href="/dashboard/products/edit">
                            <button className="44 w-[34.1px] h-[34.1px] rounded-full taPoint3 bg-[#25bcf126] hover:bg-[#25bcf1] flex justify-center items-center group">
                              <i className="las la-edit text-[#25bcf1] taPoint3 group-hover:text-[#fff]"></i>
                            </button>
                          </Link>
                        </div>
                        <button
                          onClick={() => toggleModal()}
                          className="55 w-[34.1px] h-[34.1px] rounded-full taPoint3 bg-[#ef486a26] hover:bg-[#ef486a] flex justify-center items-center group"
                        >
                          <i className="las la-trash text-[#ef486a] taPoint3 group-hover:text-[#fff]"></i>
                        </button>
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TwoColTableWithHeading;
