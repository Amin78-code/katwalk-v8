function TableForTextPages({ data }) {
  return (
    <>
      {data.type == "table" ? (
        <>
          {data.tableHead ? (
            <>
              <table className="my-[15px] w-[100%]">
                <thead>
                  {data.tableHead.map((val, ind) => {
                    return (
                      <td
                        key={ind}
                        className="work-regular text-[13px] border-[#fbf1e8] border-t-[1px] border-b-[1px] text-center py-[16px] px-[10px]"
                      >
                        {val}
                      </td>
                    );
                  })}
                </thead>
                <thead>
                  {data.tableBody ? (
                    <>
                      {data.tableBody.map((v, i) => {
                        return (
                          <tr key={i} className="">
                            {v.rowData.map((datae_a, index_a) => {
                              return (
                                <td
                                  key={index_a}
                                  className="work-regular text-[13px] border-[#fbf1e8] border-t-[1px] border-b-[1px] text-center py-[16px] px-[10px]"
                                >
                                  {datae_a}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </thead>
              </table>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default TableForTextPages;
