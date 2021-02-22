//overall wrapper function for generating html
function generateHTML(data) {

  //generates header of page with team manager's name
  function renderTeamName(manager) {
    return `${manager.name}`
  }

  //generates manager card
  function renderManager(manager) {
    return `<div class="card text-white bg-primary mx-auto mb-4 mt-4" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-title"><i class="fas fa-crown"></i>${manager.role}</h6>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Phone: <a href="tel:${manager.phone}" class="card-link">${manager.phone}</a></li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
    </ul>
  </div>`

  }

  //generates engineer or intern card depending on role value
  function renderOther(other) {
    let str = '';
    other.forEach(function (employee) {
      str += employee.getRole() === 'Engineer' ? `<div class="col s4">
      <div class="card text-white bg-primary mx-auto mb-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <h6 class="card-title"><i class="fas fa-laptop-code"></i>${employee.role}</h6>
        </div>
        <ul class="list-group list-group-flush text-dark">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${employee.gitHub}"
              class="card-link">github.com/${employee.gitHub}</a>
          </li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></li>
        </ul>
      </div>
    </div>` : `<div class="col s4">
    <div class="card text-white bg-primary mx-auto mb-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <h6 class="card-title"><i class="fas fa-graduation-cap"></i>${employee.role}</h6>
      </div>
      <ul class="list-group list-group-flush text-dark">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></li>
        <li class="list-group-item">School: ${employee.school}</li>
      </ul>
    </div>
  </div>`
    })
    return str
  }

  //base html; card functions called within
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/e0e3e72492.js" crossorigin="anonymous"></script>
            
      <title>My Dev Team</title>
    </head>
    <body class="bg-info">
      <div class="row bg-primary">
          <h1 class = "text-center mb-4 mt-4 text-dark">${renderTeamName(data[0])}'s Developer Team</h1>
      </div>
      <div>
          ${renderManager(data[0])}
      </div>
      <div class="row">
        ${renderOther(data.splice(1))}
      </div>    
    </body>
    </html>`
}

module.exports = generateHTML

