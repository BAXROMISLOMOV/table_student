document.getElementById('add-student').addEventListener('click', () => {
  const tableBody = document.querySelector('.student-table tbody');
  const tableRows = tableBody.querySelectorAll('tr');

  if (tableRows.length >= 10) {
    alert('You cannot add more than 10 students.');
    return;
  }

  // Create a new row with inputs for user input
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td></td>
    <td><input type="text" class="firstname" placeholder="Firstname"></td>
    <td><input type="text" class="lastname" placeholder="Lastname"></td>
    <td><input type="text" class="student-group" placeholder="Group"></td>
    <td>
      <select class="work-status">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </td>
    <td>
      <button class="save-row">Save</button>
      <button class="delete-row">Delete</button>
    </td>
  `;
  tableBody.appendChild(newRow);
  updateRowNumbers();
});

// Event delegation for Save and Delete buttons
document.querySelector('.student-table').addEventListener('click', (e) => {
  if (e.target.classList.contains('save-row')) {
    const row = e.target.closest('tr');
    const firstname = row.querySelector('.firstname').value.trim();
    const lastname = row.querySelector('.lastname').value.trim();
    const group = row.querySelector('.student-group').value.trim();
    const workStatus = row.querySelector('.work-status').value;

    if (!firstname || !lastname || !group) {
      alert('All fields must be filled out.');
      return;
    }

    // Replace input fields with plain text
    row.innerHTML = `
      <td></td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${group}</td>
      <td>${workStatus}</td>
      <td>
        <button class="delete-row">Delete</button>
      </td>
    `;
    updateRowNumbers();
  } else if (e.target.classList.contains('delete-row')) {
    e.target.closest('tr').remove();
    updateRowNumbers();
  }
});

function updateRowNumbers() {
  const rows = document.querySelectorAll('.student-table tbody tr');
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}
