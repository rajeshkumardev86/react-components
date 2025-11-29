import React from "react";

export default function Accordian({ data, isMultiple }) {
  const [activeId, setActiveId] = React.useState(null);
  const [multipleIds, setMultipleIds] = React.useState([]);

  const handleClick = (currentId) => {
    if (!isMultiple) {
      setActiveId(activeId === currentId ? null : currentId);
      return;
    }

    let updatedIds = [...multipleIds];
    let currentIndex = updatedIds.indexOf(currentId);

    if (currentIndex === -1) updatedIds.push(currentId);
    else updatedIds.splice(currentIndex, 1);

    setMultipleIds(updatedIds);
  };
  return (
    <div className="w-md-1/2 mx-auto p-4">
      {data?.length > 0 ? (
        data?.map((item) => (
          <div className="bg-blue-300 mb-2 p-4">
            <div
              className="flex justify-between gap-2"
              onClick={() => handleClick(item?.id)}
            >
              <h3 className="text-lg">{item?.title}</h3>
              <span>
                {activeId === item?.id ||
                (isMultiple && multipleIds.indexOf(item?.id) !== -1)
                  ? "-"
                  : "+"}
              </span>
            </div>
            <div className="text-md text-slate-600 dark:text-700 mt-2">
              {(activeId === item?.id ||
                (isMultiple && multipleIds.indexOf(item?.id) !== -1)) && (
                <p>{item?.content}</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}
