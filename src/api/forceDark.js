export const forceDark = () => { 
    const iframe = document.querySelector("iframe");
    const childDoc = iframe.contentDocument;
    const childBody = childDoc.querySelector("body");

    iframe.addEventListener("load", () => {
        childBody.style.backgroundColor = "red";
    });
    childBody.setAttribute('data-color-mode', 'dark');
    childBody.setAttribute('data-dark-theme', 'dark');
}