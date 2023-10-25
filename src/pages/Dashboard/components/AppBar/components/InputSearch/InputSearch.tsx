
import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import './style/index.css';
import { IconButton, TextField } from '@mui/material';

interface IInputSearchProps {

}
const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    padding: '0px 4px',
    width: '320px'
  }
});

const CustomMenuIcon = styled(MenuIcon)({
  color: 'var(--white-text)',
  backgroundColor: 'var(--primary-text)',
  borderRadius: '4px',
  padding: '7px 6px',
  '& hover': {
    borderRadius: 'none'
  }

})

const CustomSearchIcon = styled(SearchIcon)({
  color: 'var(--grey-text)'
})


const InputSearch: React.FC<IInputSearchProps> = (props) => {

  const handleSearchChange = () => { }
  
  return (
      <div className="search-container">
        <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <CustomMenuIcon />
      </IconButton>
      <form>
        <CustomTextField
          variant="outlined"
          size='small'       
          placeholder="Escribe algo para buscarlo…"
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: <CustomSearchIcon />,
          }}
        />
        </form>
      </div>
    );
}

export default InputSearch;
