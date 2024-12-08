
 fetch('./objExport.json')
 .then(response => response.json())
 .then(data => {
     const tableBody = document.querySelector('#data-table tbody');

     // Populate table rows
     data.forEach(item => {
         const row = document.createElement('tr');

         row.innerHTML = `
             <td>${item.name}</td>
             <td>${item.age}</td>
             <td>${item.location}</td>
             <td>${item.hobby.join(', ')}</td>
             <td>${item.course.course_name}</td>
             <td>${item.course.course_duration}</td>
             <td>${item.course.loc}</td>
             <td>${item.course.elegible_for.join(', ')}</td>
         `;

         tableBody.appendChild(row);
     });
 })
 .catch(error => console.error('Error fetching JSON data:', error));