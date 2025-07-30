import React, { useCallback } from 'react';

// CSS class constants using custom Tailwind colors
const CSS_CLASSES = {
    CONTAINER: 'sticky top-0 bg-gray-50 py-4 z-10 flex items-center justify-between mb-8',
    STEP_COMPLETED: 'w-8 h-8 rounded-full flex items-center justify-center bg-secondary-600 ' +
        'text-white text-sm cursor-pointer hover:bg-secondary-600 transition-colors',
    STEP_INCOMPLETE: 'w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 ' +
        'text-gray-600 text-sm cursor-pointer hover:bg-gray-300 transition-colors',
    LINE_COMPLETED: 'flex-1 h-1 bg-secondary-600',
    LINE_INCOMPLETE: 'flex-1 h-1 bg-gray-200',
    COMPLETION_TEXT: 'text-center text-gray-600 mb-4'
};

const ProgressBar = ({
    steps,
    completedSteps = [],
    onStepClick,
    showCompletionText = false,
    className = ''
}) => {
    const getStepClass = useCallback((stepId) => {
        return completedSteps.includes(stepId)
            ? CSS_CLASSES.STEP_COMPLETED
            : CSS_CLASSES.STEP_INCOMPLETE;
    }, [completedSteps]);

    const getLineClass = useCallback((stepId) => {
        return completedSteps.includes(stepId)
            ? CSS_CLASSES.LINE_COMPLETED
            : CSS_CLASSES.LINE_INCOMPLETE;
    }, [completedSteps]);

    const handleStepClick = useCallback((stepId) => {
        onStepClick?.(stepId);
    }, [onStepClick]);

    const completionPercentage = Math.round((completedSteps.length / steps.length) * 100);

    return (
        <div className={className}>
            {/* Progress Bar */}
            <div className={CSS_CLASSES.CONTAINER}>
                {steps.map((step, idx) => (
                    <React.Fragment key={step.id}>
                        <button
                            onClick={() => handleStepClick(step.id)}
                            className={getStepClass(step.id)}
                            title={step.title || `Step ${idx + 1}`}
                        >
                            {idx + 1}
                        </button>
                        {idx < steps.length - 1 && (
                            <div className={getLineClass(step.id)} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Completion Status */}
            {showCompletionText && (
                <div className={CSS_CLASSES.COMPLETION_TEXT}>
                    {completionPercentage}% Complete ({completedSteps.length} of {steps.length} completed)
                </div>
            )}
        </div>
    );
};

export default ProgressBar;