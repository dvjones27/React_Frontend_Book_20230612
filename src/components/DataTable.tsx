import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hideable: true },
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'author', headerName: 'Author', flex: 1},
  { field: 'isbn', headerName: 'ISBN', flex: 1},
  { field: 'cover', headerName: 'Cover', flex: 1},
  { field: 'copyright', headerName: 'Copyright', flex: 1},
  { field: 'pages', headerName: 'Pages', flex: 1},
  { field: 'description', headerName: 'Description', flex: 3},
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { bookData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 100000)
  }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row p-3 justify-items-center bg-slate-300 m-3 rounded hover:bg-slate-700 hover:text-white">
            <div>
                <button
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                  <i className="fa-regular fa-book-medical fa-lg"></i>
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-500 hover:text-white" >
              Update
            </Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-500 hover:text-white" >
            <i className="fa-sharp fa-regular fa-trash"></i>
            </Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 'auto', width: '95%' }}
          >
            <h2 className="p-3 bg-slate-300 my-2 items-center rounded">My Books</h2>
            <DataGrid 
            
            autoHeight {...bookData}
            rows={bookData} 
            columns={columns}  
            checkboxSelection={true}
            getRowId={(row) => row.id + row.isbn} 
            
            onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
              
            }}
            />
        </div>
    </>
  )
}

export default DataTable