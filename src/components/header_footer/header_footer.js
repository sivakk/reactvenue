import React, { Component } from 'react'
 import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Sidedrawer from './Sidedrawer'


export default class Header_footer extends Component {
  state={drawerOpen:false,headerShow:false};
  componentDidMount(){
    window.addEventListener('scroll',this.handleScrooll);
  }
  handleScrooll=()=>{

    if(window.scrollY > 0){
      this.setState({
        headerShow:true
      })
    }
    else{
      this.setState({
        headerShow:true
      })
    }

  }
  toggleDrawer=(value)=>{
    this.setState({
      drawerOpen:value
    })
  }
  render() {
    return (
      <div>
        <AppBar
        position="fixed"
        style={{backgroundColor:this.headerShow ?'#2f2f2f':'transparent',
        boxShadow:'none',
        padding:'10px 0px'
    
    }}
        
        >
        <Toolbar>
            <div className="header_logo">
            <div className="font_righteous header_logo_venue">The logo</div>
            <div className="header_logo_title">Musical Event</div>
            </div>

            <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={()=>this.toggleDrawer(true)}
            
            >
            <MenuIcon/>
        </IconButton>
        <Sidedrawer open={this.state.drawerOpen} onClose={(value)=>this.toggleDrawer(value)}/>
        </Toolbar>


       
        </AppBar>
      </div>
    )
  }
}
