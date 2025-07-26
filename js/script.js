function updateStatus() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let completed = 0;

  checkboxes.forEach(box => {
    if (box.checked) completed++;
  });

  document.getElementById("status").textContent =
    `Habits Completed: ${completed}/${checkboxes.length}`;
}

// Add event listeners to each checkbox
window.onload = function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(box => {
    box.addEventListener("change", updateStatus);
  });

  // Run initially in case some are already checked
  updateStatus();
};
