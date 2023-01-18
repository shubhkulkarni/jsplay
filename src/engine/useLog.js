
export const useLog = function() {
    
    const logBackup = console.log;
    const logMessages = [];

    console.log = function () {
        logMessages.push.apply(logMessages, arguments);
        logBackup.apply(console, arguments);
    };
    
    return logMessages
}