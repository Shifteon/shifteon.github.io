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
  },
  {
    label: "Week 4",
    url: "week4/index.html"
  },
  {
    label: "Week 5",
    url: "week5/index.html"
  },
  {
    label: "Todo",
    url: "todo/index.html"
  },
  {
    label: "Week 7",
    url: "week7/index.html"
  },
  {
    label: "Week 8",
    url: "week8/index.html"
  },
  {
    label: "Week 9",
    url: "week9/index.html"
  }
];
let list = document.querySelector("ol");

for (let link of links) {
  let item = document.createElement("li");
  item.innerHTML = `<a href="${link["url"]}">${link["label"]}</a>`;
  list.appendChild(item);
}