
 import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useForm } from "react-hook-form";

function CartForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    const CssTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: 'white',
            },
            '& label': {
                color: 'white'
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'greenyellow',
                },
                '&:hover fieldset': {
                    borderColor: 'greenyellow',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'green',
                },
            },

        },
    })(TextField);

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            margin: 50,
            textAlign: 'center',
            alignItems: 'center',
        },
        margin: {
            margin: '10px',
            width: '500px'
        },
        input: {
            color: "white",
        },
        btn: {
            color: 'white',
            borderColor: 'yellow',
        }
    }));

    const classes = useStyles();

   

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate>

                    <Typography variant="h4" component="h4" className={classes.root}>
                        Пожалуйста. введите Ваши данные:
                    </Typography>

                    <CssTextField
                        {...register("name")}
                        className={classes.margin}
                        InputProps={{
                            className: classes.input
                        }}
                        label="Ваше имя"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                    <CssTextField
                        {...register("address")}
                        className={classes.margin}
                        InputProps={{
                            className: classes.input
                        }}
                        label="Адрес доставки"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                    <CssTextField
                        {...register("phone")}
                        className={classes.margin}
                        InputProps={{
                            className: classes.input
                        }}
                        label="Контактный телефон"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                    
                       
                        <Button type="submit" className={classes.btn} variant="outlined" color="secondary">
                            Отправить
                        </Button>
                      
                    
                </form>
    )
}
 
    
export default CartForm;