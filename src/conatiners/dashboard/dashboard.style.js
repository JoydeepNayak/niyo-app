const styles = () => {
    return {
        root: {
            maxWidth: 345,
        },
        paddingForCard: {
            padding: '22px'
        },
        typography: {
            color: '#fff'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer'
        },
        avatar: {
            backgroundColor: 'red',
        },
        search: {
            position: 'relative',
            borderRadius: '2px',
            backgroundColor: '#0000008f',
            border: '2px solid #0080006b',
            '&:hover': {
                backgroundColor: '#000000',
                cursor: 'pointer',
                border: '2px solid #0080008f'
            },
            marginLeft: 0,
            width: '100%',

        },
        searchIcon: {
            padding: '1px',
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputInput: {
            // vertical padding + font size from searchIcon
            width: '100%',
        },
        inputRoot: {
            color: 'inherit',
        },
        header: {
            position: 'fixed',
            top: 0,
            display: 'flex',
        }
    }
};
export default styles;
