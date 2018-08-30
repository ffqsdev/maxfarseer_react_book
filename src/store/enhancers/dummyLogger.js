export const dymmyLogger = store => next => action => {
    console.log(`action type: ${action.type}, payload: ${action.payload}`)
    return next(action)
}
