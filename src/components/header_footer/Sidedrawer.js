import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';

const Sidedrawer=(props)=>  {
 
    return (
    <Drawer anchor="right"
     open={props.open} 
     onClose={()=>props.onClose(true)}
     >
    <List component="nav">
    <ListItem button onClick={()=>console.log('event featured')}>
        event start
    </ListItem>
    <ListItem button onClick={()=>console.log(' chsnge featured')}>
        button start
    </ListItem>
    <ListItem button onClick={()=>console.log('change featured')}>
        change start
    </ListItem>
    
    </List>




    </Drawer>
    )
  
}
export default Sidedrawer