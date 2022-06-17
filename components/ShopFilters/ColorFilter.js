import React, { useState } from "react";

function ColorFilter({
  data,
  color_dropdown,
  choosingFilterOption,
  currectSelected,
  filterName,
}) {
  const [activeInGroup1, setActiveInGroup1] = useState(null);
  const [activeInGroup2, setActiveInGroup2] = useState(null);

  const addColor = (clickColor, groupOfColor, groupNum) => {
    // console.log("clickColor", clickColor);
    // console.log("groupOfColor", groupOfColor);
    // console.log("groupNum  ---", groupNum);

    // console.log("fff",groupNum == "group2")

    for (let i = 0; i < groupOfColor.length; i++) {
      if (groupOfColor[i].colorCode == clickColor.colorCode) {
        switch (groupNum) {
          case "group1":
            setActiveInGroup1([i]);
            break;
          case "group2":
            setActiveInGroup2([i]);
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <>
      <div
        className={`w-[100%] lg:w-[320px] border-[#fbf1e8] border-[1px] relative lg:absolute pt-[20px] lg:pt-0 z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
        ref={color_dropdown}
      >
        <div className="w-[100%] px-[20px] py-[20px]">
          <div className="mt-[10px]">
            {data.group1 ? (
              <>
                {data.group1.map((value, index) => {
                  return (
                    <div
                      key={value.colorCode}
                      className={`${value.colorCode} w-[100%] relative h-[48px] p-[10px]`}
                      onClick={() => addColor(value, data.group1, "group1")}
                    >
                      <p className="fwl text-[#fff] text-[11px] capitalize">
                        {value.name}
                      </p>

                      {activeInGroup1 == index ? (
                        <i
                          className="las la-times text-[#fff] text-[11px] absolute top-[10px] right-[10px]  "
                          // onClick={() => openSidebar()}
                        ></i>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}

            {data.group2 ? <div className="w-[100%] mt-[40px]"></div> : ""}

            {data.group2 ? (
              <>
                {data.group2.map((value, index) => {
                  return (
                    <div
                      key={value.colorCode}
                      className={`${value.colorCode} w-[100%] bbb h-[48px] p-[10px]`}
                      onClick={() => addColor(value, data.group2, "group2")}
                    >
                      <p className="fwl text-[#fff] text-[11px] capitalize">
                        {value.name}
                      </p>
                      {activeInGroup2 == index ? (
                        <i
                          className="las la-times text-[#fff] text-[11px] absolute top-[10px] right-[10px]  "
                          // onClick={() => openSidebar()}
                        ></i>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorFilter;
