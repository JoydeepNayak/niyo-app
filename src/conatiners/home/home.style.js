const styles = () => {
  return {
    accountLink: {
      '&:hover': {
        color: '#0086d1'
      },
      color: '#0066c0',
      cursor: 'pointer'
    },
    appBar: {
      position: 'fixed',
      width: '100%'
    },
    content: {
      flexGrow: 1,
      marginTop: '12px',


      padding: '3px',

      width: 'calc(100% - 72px)',
      position: 'relative',
      minHeight: 'calc(100vh - 115px - 12px)',
      boxSizing: 'border-box',
    },

    contentOpen: {
      width: '100%',
      marginTop: '11px'
    },
    drawerPaper: {
      '& .MuiListItemIcon-root-68': {
        color: 'white'
      },
      '& span': {
        color: 'white'
      },
      backgroundColor: '#1f5a9e !important',
      color: 'white',
      marginTop: '57px',
      maxHeight: '92vh',
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',

      whiteSpace: 'nowrap',
      width: 225,
      zIndex: '1'
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      width: '46px'
    },
    footerContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-115px',
      zIndex: -1,
    },
    hide: {
      display: 'none'
    },

  
    loaderLine: {
      flexGrow: 1,
      position: 'fixed',
      top: '60px',
      width: '100%',
      zIndex: 4
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    portalName: {
      left: '100px'
    },
    root: {
      color: 'grey',
      display: 'flex',
      flexGrow: 1,
      fontSize: '13px',
      position: 'relative',
      zIndex: 1
    },
    space: {
      marginTop: '25px'
    },
    toolbar: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 8px',
    }
  };
};
export default styles;
