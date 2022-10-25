import React from 'react';

const textInfor=[
    {text : "we provide"},
    {text : "visual coding"},
    {text : "solution"},
    {text : "for you webs"}
];

function Info ({text}){
    return <div>{text}</div>;
};

function MainCont() {
  return (
    <section className='main__cont'>
        <div className='main__inner'>
            {textInfor.map((txt) => (
                <Info text={txt.text} key={txt.text} />
            ))}
        </div>
    </section>
  )
};

export default MainCont