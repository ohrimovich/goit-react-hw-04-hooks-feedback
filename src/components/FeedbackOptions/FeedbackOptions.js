import { nanoid } from 'nanoid';
import s from "./FeedbackOptions.module.scss";
import PropTypes from "prop-types";

function FeedbackOptions({options, onLeavefeedback}) {
    return (<div className={s.container}> {
        options.map(option => <button type='button' className={s.button} key={nanoid()} onClick={() => onLeavefeedback(option)}>{option}</button>)
    }
    </div>
        )
} 
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeavefeedback: PropTypes.func
   }
export default FeedbackOptions;
   
