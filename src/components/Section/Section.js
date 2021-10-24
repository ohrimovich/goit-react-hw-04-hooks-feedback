import React from "react";
import Title from "../Title/Title";
import PropTypes from "prop-types";

function Section({ text, children }) {
    return (
    <section>
            <Title text={ text}/>
        {children}
    </section>
 )
}

Section.propTypes = {
    text: PropTypes.string.isRequired
}
export default Section;