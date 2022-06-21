function ListForContentPages({ data }) {
  return (
  <>
    {data ? (
        <>
          {data.title ? (
            <h3 className="work-regular text-[20px] pt-[20px] mt-[16px]">
              {data.title}
            </h3>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    <ul className="list-disc ml-[15px] mt-[15px]">
    {data.text ? (
      <>
        {data.text.map((val, ind) => {
          return (
            <li
              key={val}
              className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px]"
            >
              {val}
            </li>
          );
        })}
      </>
    ) : (
      ""
    )}
  </ul>
  </>
  );
}

export default ListForContentPages;
