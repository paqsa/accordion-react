import "./question.css"


export default function Question(props) {
    return(
        <div className='question-div'>
          <p className='question' onClick={() => {
            if(props.active === props.questionNumber) {
              props.setActive(0)
            } else {
              props.setActive(props.questionNumber)
            }
          }}>question {props.questionNumber}</p>

          {props.active === props.questionNumber ? <p>answer {props.questionNumber}</p> : null}
        </div>
    )
}