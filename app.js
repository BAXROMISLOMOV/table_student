function updateGroupFilter() {
  const groups = new Set();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const group = row.cells[3]?.textContent || '';
    if (group) groups.add(group.trim());
  });

  const filterDropdown = document.getElementById('filter-group');
  filterDropdown.innerHTML = '<option value="all">All</option>'; // Reset options

  groups.forEach(group => {
    const option = document.createElement('option');
    option.value = group.toLowerCase();
    option.textContent = group;
    filterDropdown.appendChild(option);
  });
}
document.getElementById('search-student').addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase().trim();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const firstname = row.cells[1]?.textContent.toLowerCase() || '';
    const lastname = row.cells[2]?.textContent.toLowerCase() || '';

    if (firstname.includes(searchValue) || lastname.includes(searchValue)) {
      row.style.display = ''; 
    } else {
      row.style.display = 'none'; 
    }
  });
});



function updateGroupFilter() {
  const groups = new Set();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const group = row.cells[3]?.textContent || '';
    if (group) groups.add(group.trim());
  });

  const filterDropdown = document.getElementById('filter-group');
  filterDropdown.innerHTML = '<option value="all">All</option>'; 

  groups.forEach(group => {
    const option = document.createElement('option');
    option.value = group.toLowerCase();
    option.textContent = group;
    filterDropdown.appendChild(option);
  });
}

document.getElementById('search-student').addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase().trim();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const firstname = row.cells[1]?.textContent.toLowerCase() || '';
    const lastname = row.cells[2]?.textContent.toLowerCase() || '';

    if (firstname.includes(searchValue) || lastname.includes(searchValue)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

document.getElementById('add-student').addEventListener('click', () => {
  const tableBody = document.querySelector('.student-table tbody');
  const tableRows = tableBody.querySelectorAll('tr');

  if (tableRows.length >= 10) {
    alert('You cannot add more than 10 students.');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td></td>
    <td><input type="text" class="firstname" placeholder="Firstname"></td>
    <td><input type="text" class="lastname" placeholder="Lastname"></td>
    <td>
      <select class="student-group">
        <option value="group n15">Group N15</option>
        <option value="group n14">Group N14</option>
        <option value="group n13">Group N13</option>
      </select>
    </td>
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
    updateGroupFilter();
  } else if (e.target.classList.contains('delete-row')) {
    e.target.closest('tr').remove();
    updateRowNumbers();
    updateGroupFilter();
  }
});

function updateRowNumbers() {
  const rows = document.querySelectorAll('.student-table tbody tr');
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

document.getElementById('filter-group').addEventListener('change', (e) => {
  const selectedGroup = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const group = row.cells[3]?.textContent.toLowerCase() || '';
    if (selectedGroup === 'all' || group === selectedGroup) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

document.getElementById('filter-group').addEventListener('change', () => {
  applyFilters();
});

document.getElementById('search-student').addEventListener('input', () => {
  applyFilters();
});

function applyFilters() {
  const selectedGroup = document.getElementById('filter-group').value.toLowerCase();
  const searchValue = document.getElementById('search-student').value.toLowerCase().trim();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const firstname = row.cells[1]?.textContent.toLowerCase() || '';
    const lastname = row.cells[2]?.textContent.toLowerCase() || '';
    const group = row.cells[3]?.textContent.toLowerCase() || '';

    const matchesGroup = selectedGroup === 'all' || group === selectedGroup;
    const matchesSearch = firstname.includes(searchValue) || lastname.includes(searchValue);

    if (matchesGroup && matchesSearch) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}



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
    updateGroupFilter(); 
  } else if (e.target.classList.contains('delete-row')) {
    e.target.closest('tr').remove();
    updateRowNumbers();
    updateGroupFilter(); 
  }
});


function updateRowNumbers() {
  const rows = document.querySelectorAll('.student-table tbody tr');
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

document.getElementById('filter-group').addEventListener('change', (e) => {
  const selectedGroup = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('.student-table tbody tr');

  rows.forEach(row => {
    const group = row.cells[3]?.textContent.toLowerCase() || '';
    if (selectedGroup === 'all' || group === selectedGroup) {
      row.style.display = '';
    } else {
      row.style.display = 'none'; 
    }
  });
});
