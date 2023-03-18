export default async function generateJoke() {
    const config = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    const resp = await fetch("https://icanhazdadjoke.com", config);
    const { joke } = await resp.json();
    return joke;
}
