export const useLogger = () => {
    return (error: Error, message: string | null = null) => {
        if (message) {
            console.error(message, error);
        } else {
            console.error(error);
        }
    }
}