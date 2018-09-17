const state = {
  employeeList: [{
      name: 'Lily Tomlin',

      officeNum: '8233',

      phoneNum: '(407)-682-8888',
    },
    {
      name: 'Rhea Butcher',

      officeNum: '219',

      phoneNum: '(404)-555-5555',
    },
    {
      name: 'Karen Walker',

      officeNum: '923',

      phoneNum: '(321)555-5555',
    },
    {
      name: 'Cristina Yang',

      officeNum: '324',

      phoneNum: '(912)555-5555',
    },
  ]
};

const showInput = function () {
  $('input').removeClass('hide');

}

const hideAllRoutes = function () {
  $('.route').addClass('hidden');
}

const showRoute = function (route) {
  hideAllRoutes();
  $(route).removeClass('hidden');
}

const verify = function () {
  const verifyUser = $('#display-verify').val();
  const foundEmployee = state.employeeList.find(employee => employee.name === verifyUser);
  if (foundEmployee != null) {
    $('#verify-content').html(`<div class="user-info">Employee Found</div>`)
  } else {
    $('#verify-content').html(`<div class="user-info">Employee Not Found</div>`)

  }
}


const lookup = function () {
  const lookupUser = $('#display-lookup').val();
  const foundEmployee = state.employeeList.find(employee => employee.name === lookupUser);
  if (foundEmployee != null) {
    $('#lookup-content').html(`<div class="user=info">Name: ${foundEmployee.name}<br/>Office Number: ${foundEmployee.officeNum}<br/>Phone Number: ${foundEmployee.phoneNum}</div>`);
  } else {
    $('#lookup-content').html(`<div class="user-info">Employee Not Found</div>`)

  }
}
const contains = function () {
  const nameContains = $('#display-contains').val();
  const foundEmployees = state.employeeList.filter(employee => employee.name.indexOf(nameContains) != -1);
  $('#contains-content').empty();
  if (foundEmployees.length > 0) {
    foundEmployees.forEach(foundEmployee =>
      $('#contains-content').append(`<div class="user=info">Name: ${foundEmployee.name}<br/>Office Number: ${foundEmployee.officeNum}<br/>Phone Number: ${foundEmployee.phoneNum}</div>`));
  } else {
    $('#contains-content').html(`<div class="user-info">Employee Not Found</div>`)

  }
}

const update = function () {
  const content = $('content');
  content.empty();
  const updateUser = $('#update-name').val();
  const foundEmployee = state.employeeList.find(employee => employee.name == updateUser);
  if (foundEmployee != null) {
    foundEmployee.name = updateUser;
    foundEmployee.officeNum = $('#update-number').val();
    foundEmployee.phoneNum = $('#update-phone').val();
    $('#update-content').html(`<div class="user=info">Name: ${foundEmployee.name}<br/>Office Number: ${foundEmployee.officeNum}<br/>Phone Number: ${foundEmployee.phoneNum}</div>`);
  } else {
    $('#update-content').html(`<div class="user-info">Employee Not Found</div>`)

  }
}
const add = function () {
  const addEmployee = {};
  addEmployee.name = $('#add-name').val();
  addEmployee.officeNum = $('#add-number').val();
  addEmployee.phoneNum = $('#add-phone').val();
  state.employeeList.push(addEmployee);
  $('#add-content').append(`<div class="user=info">Name: ${addEmployee.name}<br/>Office Number: ${addEmployee.officeNum}<br/>Phone Number: ${addEmployee.phoneNum}</div>`);

}

const del = function () {
  const query = $('#display-delete').val();
  state.employeeList.forEach((user, index) => {
    if (user.name == query) {
      const deletedEmployees = state.employeeList.splice(index, 1);
      $('#delete-content').html(`<div class="user-info">Employee Deleted</div>`)
      return deletedEmployees;
    }
  });
}
$('#delete-content').html(`<div class="user-info">Employee Not Found</div>`)

const renderSearchForm = function (routeName, onSubmit) {
  const content = $('#content');
  content.empty();
  content.append(`<div id="minimalist">The Minimalists Directory</div>`);
  content.append(`<input type="text" id="display-${routeName}" />`);
  content.append(`<button id="${routeName}"><i class="fas fa-search"></i></button>`);
  content.append(`<div id="${routeName}-content"></div>`);
  $(`#${routeName}`).on('click', onSubmit);

}

const renderEditForm = function (routeName, onSubmit) {
  const content = $('#content');
  content.empty();
  content.append(`<div id="minimalist">The Minimalists Directory</div>`);
  content.append(`<div><label for="${routeName}-name"> Name:</label><input type="text" id="${routeName}-name" /></div>`);
  content.append(`<div><label for="${routeName}-number">Office Number:</label><input type="text" id="${routeName}-number" /></div>`);
  content.append(`<div><label for="${routeName}-phone">Phone Number:</label><input type="text" id="${routeName}-phone" /></div>`);
  content.append(`<button id="${routeName}"><i class="fas fa-plus"></i></button>`);
  content.append(`<div id="${routeName}-content"></div>`);
  $(`#${routeName}`).on('click', onSubmit);
}

const renderPrintRoute = function () {
  const content = $("#content");
  content.empty();
  state.employeeList.forEach(user => {
    content.append(`<div class="user-info">Name: ${user.name}<br/> Office Number: ${user.officeNum}<br/>Phone Number: ${user.phoneNum}</div>`);
  });
}
const renderSimplicityRoute = function () {
  const content = $('#content');
  content.empty();
  content.append(`<div class="center"><div id="welcome">WELCOME TO <span class="selected">SIMPLICITY</span></div><div id="minimalist">The Minimalists Directory</div></div>`);
}

$('#print-route').on('click', renderPrintRoute);
$('#verify-route').on('click', () => renderSearchForm('verify', verify));
$('#lookup-route').on('click', () => renderSearchForm('lookup', lookup));
$('#contains-route').on('click', () => renderSearchForm('contains', contains));
$('#update-route').on('click', () => renderEditForm('update', update));
$('#add-route').on('click', () => renderEditForm('add', add));
$('#delete-route').on('click', () => renderSearchForm('delete', del));
$('#simplicity-route').on('click', renderSimplicityRoute);
renderSimplicityRoute();