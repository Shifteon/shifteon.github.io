const links = [
    {
      label: "Week1 notes",
      url: "wdd330/week1/index.html"
    }
  ]
let list = document.querySelector("ol");

for (link of links) {
    let item = document.createElement("li");
    item.innerHTML = `<a href="${link["url"]}">${link["label"]}</a>`;
    list.appendChild(item);
}