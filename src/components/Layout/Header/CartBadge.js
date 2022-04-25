import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Cart/Cart';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 20,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    color: 'white',
    background: 'red'
  },
}));

export default function CustomizedBadges(props) {
  
  const {totalItems} = useContext(CartContext)

  return (
    <button className='btn active btn-light mr-5 ' aria-label="cart">
      <StyledBadge badgeContent={totalItems} >
        <ShoppingCartIcon />
      </StyledBadge>
    </button>
  );
}
