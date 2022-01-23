const links = [{
    label: "Week 1",
    url: "week1/index.html"
  },
  {
    label: "Week 2",
    url: "week2/index.html"
  },
  {
    label: "Week 3",
    url: "week3/index.html"
  }
];
let list = document.querySelector("ol");

for (link of links) {
  let item = document.createElement("li");
  item.innerHTML = `<a href="${link["url"]}">${link["label"]}</a>`;
  list.appendChild(item);
}