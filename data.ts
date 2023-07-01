export async function getUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const userData = await response.json()
    return userData ?? []
}

