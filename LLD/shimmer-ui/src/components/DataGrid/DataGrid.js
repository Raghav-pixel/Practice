import React, { useState, useEffect } from 'react'
import './DataGrid.css';

// Sample data for the table
const data = [
    { id: 1, name: 'Alice', age: 25, gender: 'Female' },
    { id: 2, name: 'Bob', age: 30, gender: 'Male' },
    { id: 3, name: 'Charlie', age: 35, gender: 'Male' },
    { id: 4, name: 'Diana', age: 28, gender: 'Female' },
    { id: 5, name: 'Edward', age: 40, gender: 'Male' },
];

const DataGrid = () => {
    const [query, setQuery] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const formattedData = data.filter((item) => 
        item.name.toLocaleLowerCase().includes(query) ||
        item.age.toString().includes(query) ||
        item.gender.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    .sort((a, b) => {
        if(sortField === '') return 0;
        let valueA = a[sortField];
        let valueB = b[sortField];
        if(valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
        if(valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
        return 0;
    })

    const handleSort = (sortType) => {
        setSortOrder((prev) => prev === 'asc' ? 'desc' : 'asc');
        setSortField(sortType);
    }

  return (
    <div className='table-ctr'>
        <input 
            type='text' 
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search...'
        />
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort('id')}>ID</th>
                    <th onClick={() => handleSort('name')}>
                        Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th onClick={() => handleSort('age')}>AGE</th>
                    <th onClick={() => handleSort('gender')}>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    formattedData.map((dataObj, idx) => (
                        <tr key={dataObj.id}>
                            <td>{dataObj.id}</td>
                            <td>{dataObj.name}</td>
                            <td>{dataObj.age}</td>
                            <td>{dataObj.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DataGrid