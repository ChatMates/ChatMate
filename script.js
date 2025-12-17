const form = document.getElementById("download-form");
const input = document.getElementById("video-url");
const list = document.getElementById("video-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = input.value.trim();
  if (!url) return;

  // Very simple URL check
  if (!/^https?:\/\//i.test(url)) {
    alert("Please enter a URL starting with http:// or https://");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = url;

  const link = document.createElement("a");
  link.href = url;
  link.textContent = "Download";
  link.target = "_blank";
  // This hints the browser to download instead of just open (not all sites respect it)
  link.setAttribute("download", "");

  li.appendChild(span);
  li.appendChild(link);
  list.appendChild(li);

  input.value = "";
});
