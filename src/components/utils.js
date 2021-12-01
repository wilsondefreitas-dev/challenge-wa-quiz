
export const renderAsHTML = (str) => {

    const element = document.createElement("textarea");
    element.innerHTML = str;
    return element.value

}