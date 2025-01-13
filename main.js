const form = document.querySelector("#fileinfo");

form.addEventListener("submit", async event => {
    const formData = new FormData(form);

    formData.append("CustomField", "This is some extra data");

    const response = await fetch("stash.php", {
        method: "POST",
        body: formData
    });
    event.preventDefault();
});
