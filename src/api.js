export const login = async () =>
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                firstName: "marwa", 
                lastName: "abdelbasit"
            })
        }, 3000)
    })