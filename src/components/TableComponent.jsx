import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
const TableComponent = ({ rows, headers, haveLinks }) => {
  // haveLinks - symbols are links only on landing page
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/******************* head *******************/}

        <thead>
          <tr>
            {headers.map((header) => (
              <th key={nanoid()}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/******************* body rows *******************/}

          {rows.map((rowData) => {
            return (
              <tr key={nanoid()} className='hover'>
                {rowData.map((data) => {
                  {
                    /*if data is not number then it is currency symbol, then it is LINK on Landing page*/
                  }
                  if (!isNaN(data) || data.includes('%')) {
                    return <td key={nanoid()}>{data}</td>
                  } else {
                    return (
                      <td key={nanoid()}>
                        {haveLinks ? (
                          <Link
                            to={`/details/${data}`}
                            className='text-primary uppercase'
                          >
                            {data}
                          </Link>
                        ) : (
                          <span className='text-primary uppercase'>{data}</span>
                        )}
                      </td>
                    )
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
