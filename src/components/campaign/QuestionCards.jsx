import React, { useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import Button from '../ui/Button';

// CSS class constants using custom Tailwind colors
const CSS_CLASSES = {
    QUESTION_CARD: 'bg-white rounded-xl p-8 shadow-sm border transition-all duration-300',
    QUESTION_CARD_ANSWERED: 'border-secondary-600',
    QUESTION_CARD_UNANSWERED: 'border-gray-200',
    QUESTION_TITLE: 'text-xl font-semibold mb-6 text-gray-900',
    QUESTION_NUMBER: 'text-sm font-medium text-gray-500 mb-2',
    OPTIONS_CONTAINER: 'space-y-3',
    OPTION_BUTTON_SELECTED: 'w-full text-left border border-secondary-600 bg-secondary-50 ' +
        'text-secondary-800 hover:bg-secondary-100',
    OPTION_BUTTON_DEFAULT: 'w-full text-left border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
};

// Animation variants
const ANIMATION_VARIANTS = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

const QuestionCard = ({
    question,
    index,
    totalQuestions,
    selectedAnswer,
    onAnswerSelect,
    questionRef
}) => {
    const getQuestionCardClass = useCallback(() => {
        const baseClass = CSS_CLASSES.QUESTION_CARD;
        const statusClass = selectedAnswer
            ? CSS_CLASSES.QUESTION_CARD_ANSWERED
            : CSS_CLASSES.QUESTION_CARD_UNANSWERED;
        return `${baseClass} ${statusClass}`;
    }, [selectedAnswer]);

    const getOptionButtonClass = useCallback((optionValue) => {
        return selectedAnswer === optionValue
            ? CSS_CLASSES.OPTION_BUTTON_SELECTED
            : CSS_CLASSES.OPTION_BUTTON_DEFAULT;
    }, [selectedAnswer]);

    const handleOptionClick = useCallback((optionValue) => {
        onAnswerSelect(question.id, optionValue);
    }, [onAnswerSelect, question.id]);

    return (
        <motion.div
            ref={questionRef}
            variants={ANIMATION_VARIANTS}
            className={getQuestionCardClass()}
        >
            <div className={CSS_CLASSES.QUESTION_NUMBER}>
                Question {index + 1} of {totalQuestions}
            </div>
            <h2 className={CSS_CLASSES.QUESTION_TITLE}>
                {question.text}
            </h2>

            <div className={CSS_CLASSES.OPTIONS_CONTAINER}>
                {question.options.map((option) => (
                    <Button
                        key={option.value}
                        variant={selectedAnswer === option.value ? 'primary' : 'outline'}
                        size="md"
                        onClick={() => handleOptionClick(option.value)}
                        className={getOptionButtonClass(option.value)}
                    >
                        {option.label}
                    </Button>
                ))}
            </div>
        </motion.div>
    );
};

export default QuestionCard;
