export const putData = (array) => {
    localStorage.setItem("contacts", JSON.stringify(array));
}