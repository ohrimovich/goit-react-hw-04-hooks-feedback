import PropTypes from "prop-types";

function Title({text}) {
    return (
        <h1>{text}</h1>
    )
}

Title.protoTypes = {
    text: PropTypes.string.isRequired
}

export default Title;