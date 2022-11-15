
const SingUp = ({formData, setFormData}) => {
    return (
        <div className='sing-up-container'>
            <input 
                type="text" 
                placeholder="E-mail" 
                value={formData.email}  
                onChange={(event)=>setFormData(
                    {...formData, email: event.target.value}
                )}/>
            <input 
                type="password" 
                placeholder="Password"
                value={formData.pwd}  
                onChange={(event)=>setFormData(
                    {...formData, pwd: event.target.value}
                )}/>
            <input 
                type="text" 
                placeholder="Password confirm"
                value={formData.passwordConfirm}  
                onChange={(event)=>setFormData(
                    {...formData, passwordConfirm: event.target.value}
                )}/>
        </div>
    );
}

export default SingUp;

