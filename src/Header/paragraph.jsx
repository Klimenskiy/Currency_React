import React from 'react';

const Paragraph = (props) => {
    return <p dangerouslySetInnerHTML={{ __html: props.paragraph }} />;
}

export default Paragraph;
