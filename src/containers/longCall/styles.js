import { rgbToHex } from "@material-ui/core";

export const styles = theme => ({
    displayFlex: {
        display: 'flex',
        marginBottom: '8px',
        width: '100%'
    },
    searchForm: {
        padding: '5px 15x',
        display: 'flex',
    },
    selectLabel: {
        position: 'relative',
        marginRight: '15px',
        top: '5px',
        fontSize: '12px',
        fontWeight: 400
    },
    inputCard: {
        padding: '12px'
    },
    inputTitle: {
        fontWeigth: 900,
        color: 'rgb(40,40,40)',
        paddingBottom: '10px',
        width: '100%'
    },
    selectOptions: {
        width: '100px',
        paddingLeft: '3px',
        fontSize: '12px'
    },
    selectOptionButton: {
        position: 'relative',
        top: '2px'
    }
})