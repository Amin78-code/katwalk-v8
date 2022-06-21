function HeadingAndText({ data }) {
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

      {data.text ? (
        <>
          {data.text.map((val, ind) => {
            return (
              <p
                key={ind}
                className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]"
              >
                {val}
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default HeadingAndText;
