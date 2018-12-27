
export const emailValidation = (email) => {
    return (!!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
}