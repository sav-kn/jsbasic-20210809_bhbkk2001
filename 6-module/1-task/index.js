/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render(rows);
    this.addEventListneres();
  }

  render(rows){
    let table = document.createElement('table');
    document.body.append(table);
    
    let thead = document.createElement('thead'),
        thName = document.createElement('th'),
        thAge = document.createElement('th'),
        thSalary = document.createElement('th'),
        thCity = document.createElement('th'),
        thButton = document.createElement('th');

        thName.innerHTML = 'Name';
        thAge.innerHTML = 'Age';
        thSalary.innerHTML = 'Salary';
        thCity.innerHTML = 'City';

        table.append(thead);
        thead.append(thName);
        thead.append(thAge);
        thead.append(thSalary);
        thead.append(thCity);
        thead.append(thButton);




  for( let i = 0 ; i < rows.length; i++){
    let tr = document.createElement('tr');
    table.append(tr);

    let tdName = document.createElement('td'),
        tdAge = document.createElement('td'),
        tdSalary = document.createElement('td'),
        tdCity = document.createElement('td'),
        tdButton = document.createElement('td'),
        button = document.createElement('button');


        tdName.innerHTML = rows[i].name;
        tdAge.innerHTML = rows[i].age;
        tdSalary.innerHTML = rows[i].salary;
        tdCity.innerHTML = rows[i].city;
        button.innerHTML = '[X]';

        
        tr.append(tdName);
        tr.append(tdAge);
        tr.append(tdSalary);
        tr.append(tdCity);
        tr.append(tdButton);
        tdButton.append(button);

        button.onclick = () =>{
          tdButton.parentNode.remove();
        }

  }

  }
}