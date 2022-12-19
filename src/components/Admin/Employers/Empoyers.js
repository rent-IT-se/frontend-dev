import React, { useEffect } from 'react'
import styles from "./employers.module.scss"
import img from "../../../img/index"
import { Create } from '@mui/icons-material';
import { DataGrid} from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSupports } from '../../../redux/slices/admin';

const columns  = [
  { field: "name",headerName: "Фио", hide: false , flex:2,
    renderCell: (params) => {
      return (
          <div className="rowitem">
            <p>{params.row.first_name+" "+params.row.last_name}</p>
          </div>
          );
    },
  },
  { field: "email",headerName: "Email" , flex:1,
    renderCell: (params) => {
      return (
          <div className="rowitem">
            <p>{params.row.email}</p>
          </div>
          );
    },
  },
  { field: "number",headerName: "Номер" , flex:1,
    renderCell: (params) => {
      return (
          <div className="rowitem">
            <p>{params.row.phone}</p>
          </div>
          );
    },
  },

 
  { field: "col6", headerName: "", width: 50,renderCell: (params) => {
    
    return (
      <>
      <IconButton>
        <Create/>
      </IconButton>
      </>
    );
  } },
  { field: "col7", headerName: "", width: 50,renderCell: (params) => {
    
    return (
      <>
      <IconButton>
        <DeleteOutlineIcon/>
      </IconButton>
      </>
    );
  } },
];


function Empoyers() {
  const dispach=useDispatch()
  useEffect(() => {
    dispach(getSupports());
  }, []);

  const support = useSelector((state) => state.admin.supports);
  const supports = support ? support : [];
  console.log(supports)


  return (
    <div className={styles.wrapper}>
        <div className={styles.head}>
          <div className={styles.empty}></div>
          <h1 className={styles.Titl}>Сотрудники</h1>
          <button className={styles.addBtn} type="button">Добавить сотрудника </button>
        </div>
        <DataGrid
        rows={supports}
        columns={columns}
        showCellRightBorder
        showColumnRightBorder
        sx={{height:"300px"}}
      />
    </div>
  )
}

export default Empoyers