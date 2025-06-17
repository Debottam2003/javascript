let bookmarks = ["https://github.com/Debottam2003"];

const area = document.querySelector(".area");

function displayAll() {
    if (bookmarks.length > 0) {
        for (let i in bookmarks) {
            const bm = document.createElement('div');

            const url = document.createElement('a');
            url.textContent = bookmarks[i];
            url.href = bookmarks[i];
            url.setAttribute('target', 'blank');

            const delete_btn = document.createElement("button");
            delete_btn.innerHTML = "Remove";
            delete_btn.id = i;
            delete_btn.classList.add("delete-btn");

            bm.appendChild(url);
            bm.appendChild(delete_btn);

            bm.id = "bookmark";

            area.appendChild(bm);

            const del_btns = document.querySelectorAll(".delete-btn");
            del_btns.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    let i = Number(e.target.id);
                    deleteOne(i);
                });
            });
        }
    }
}

displayAll();

function addOne(new_data) {
    bookmarks.push(new_data);
    area.innerHTML = "";
    displayAll();
}

function deleteOne(i) {
    bookmarks = bookmarks.filter((ele, index) => {
        return index !== i
    });
    area.innerHTML = "";
    displayAll();
}

// function clearAll() {
//     bookmarks = [];
//     area.innerHTML = "";
// }

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    addOne(url);
    form.reset();
});

