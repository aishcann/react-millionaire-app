import { useState, useEffect} from 'react'

const Trivia = ({data, setTimeOut, questionNumber, setQuestionNumber}) => {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
    };

    return (
        <div className='trivia'>
            <div className="question">{question?.question}</div>            
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={handleClick}>{a.text}</div>
                ))}
            </div>
        </div>
    )
}

export default Trivia
