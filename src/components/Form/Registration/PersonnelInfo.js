
const PersonnelInfo = ({formData, setFormData}) => {
    return (
        <div className='Personnel-info-container'>
            <input 
                type="text" 
                placeholder="Last Name"
                value={formData.lastName}  
                onChange={(event)=>setFormData(
                    {...formData, lastName: event.target.value}
                )}/>
            <input 
                type="text" 
                placeholder="First Name"
                value={formData.firstName}  
                onChange={(event)=>setFormData(
                    {...formData, firstName: event.target.value}
                )}/>
            <input 
                type="number" 
                placeholder="Age"
                value={formData.age}  
                onChange={(event)=>setFormData(
                    {...formData, age: event.target.value}
                )}/>
        </div>
    );
}

export default PersonnelInfo;

