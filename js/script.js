function updateStatus() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let completed = 0;
  
  checkboxes.forEach(box => {
    if (box.checked) completed++;
  });

  document.getElementById("status").textContent = `Habits Completed: ${completed}/${checkboxes.length}`;
}


window.onload = function () {
  updateStatus();
};
