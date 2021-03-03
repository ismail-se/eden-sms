import styles from "./Login.module.css"
import logo from "../../images/logo.png"
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useState } from "react"
import { useHistory } from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({        
        username: '',
        password: '',
        showPassword: false,
      });

    const history = useHistory();

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleSignin = (e) => {
          e.preventDefault();
          console.log(values.username, values.password);
          history.push("/dashboard");

      }

    return ( 
        <div className={styles.login}>
            <div className={styles.left}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.right}>
                <h1>Welcome</h1>
                <form className={styles.form} method="POST" onSubmit={handleSignin}>
                    {/* Username */}
                <TextField className={styles.input} id="outlined-basic" label="Username" value={values.username} onChange={handleChange('username')} variant="outlined" />
                {/* Password */}
                <FormControl variant="outlined" className={styles.input}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                {/* Submit */}
                <Button type="submit" className={styles.submit} variant="contained" color="primary">
                    Sign in
                </Button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;