import React from "react";

const publications = [
  {
    name: "Lorem occaecat mollit magna officia in sint et cillum ipsum laboris laborum quis. Consectetur aliqua cillum occaecat eu laborum. Enim ea ut aute cillum",
    link: "https://stackoverflow.com/questions/4126182/how-can-i-override-a-parent-elements-padding-from-a-child",
  },
  {
    name: "Lorem occaecat mollit magna officia in sint et cillum ipsum laboris laborum quis. Consectetur aliqua cillum occaecat eu laborum. Enim ea ut aute cillum",
    link: "https://stackoverflow.com/questions/4126182/how-can-i-override-a-parent-elements-padding-from-a-child",
  },
  {
    name: "Lorem occaecat mollit magna officia in sint et cillum ipsum laboris laborum quis. Consectetur aliqua cillum occaecat eu laborum. Enim ea ut aute cillum",
    link: "https://stackoverflow.com/questions/4126182/how-can-i-override-a-parent-elements-padding-from-a-child",
  },
];

function Publication() {
  return (
    <div className="publication-main container" id="publication">
      <div className="publication-title">
        <div className="publication-title-my heading-first">My</div>
        <div className="publication-title-publications heading-second">
          Publications
        </div>
      </div>
      <div className="publication-content">
        {publications.map((paper) => (
          <>
            <p className="publication-content-name">{paper.name}</p>
            <button className="publication-content-button">
              <a href={paper.link} target="_blank">
                Go To
              </a>
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default Publication;
