
const tableInfo = {
  tableHeader: ['student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    {
      'Student Name': 'John',
      age: 19,
      Phone: '455-983-0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      'Student Name': 'Alex',
      age: 21,
      Phone: '455-983-0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      'Student Name': 'Josh',
      age: 22,
      Phone: '455-345-0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      'Student Name': 'Matt',
      age: 23,
      Phone: '321-345-0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
};

// creat a div id name is 'app'
const app = document.getElementById('app');

//create h1
const h1 = document.createElement('h1');
h1.innerText='Home Work 3';
app.append(h1);

//creat table.
const table = document.createElement('table');
table.setAttribute('id', 'table')
app.append(table)
//thead
const thead =document.createElement('thead');
table.append(thead);
const tr = document.createElement('tr');
thead.append(tr);
for (let i of tableInfo.tableHeader) {
  const th = document.createElement('th');
  th.innerText = i;
  tr.append(th);
};
//tbody
const tbody = document.createElement('tbody');
table.append(tbody);
for (let i of tableInfo.tableContent) {
  const tr = document.createElement('tr');
  tbody.append(tr);
  for (let j in i) {
    const td = document.createElement('td');
    td.innerText = i[j];
    tr.append(td);
  }
}

//creat list
const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];
const listDiv = document.createElement('div');
app.append(listDiv);
const ol = document.createElement('ol');
const ul = document.createElement('ul');
listDiv.append(ol);
listDiv.append(ul);
for (let i of list){
  const uLi = document.createElement('li');
  const oLi = document.createElement('li');
  uLi.innerText = i;
  oLi.innerText = i;
  ol.append(oLi);
  ul.append(uLi);
}

//creat select option
const dropDownList = [
  {value: 'newark', content: 'Newark'},
  {value: 'santaClara', content: 'Santa Clara'},
  {value: 'unionCity', content: 'Union City'},
  {value: 'albany', content: 'Albany'},
  {value: 'dalyCity', content: 'Daly City'},
  {value: 'sanJose', content: 'San Jose'},
];
const optDiv = document.createElement('div')
app.append(optDiv);
const select = document.createElement('select')
select.setAttribute('name', 'city')
select.setAttribute('id', 'city')
optDiv.append(select);
for ( let i of dropDownList) {
  const option = document.createElement('option');
  option.setAttribute('value', i.value);
  option.innerText = i.content;
  select.append(option);
}
