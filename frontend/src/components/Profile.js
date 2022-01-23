import {useState,useEffect,useContext} from 'react';
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Logincontext from "../contexts/Logincontext"

const Profile = () => {
    const [user,setUser] = useState({})
    const {setLoggedIn} = useContext(Logincontext);
    const history = useNavigate()

    console.log(user)
    useEffect(()=>{
        fetch('/api/v1/user',{
            method:"GET",
            headers:{"authorization":localStorage.getItem('pubtoken')}
        })
        .then(response=>response.json())
        .then(json=>{
            if(json.status === 'success')
                setUser(json.data)
            else{
                alert('Session Expired...')
            }
        })
    },[])

    const logout = ()=>{
        alert('Logged out')
        setLoggedIn(false);
        localStorage.clear();
        history('/login')
    }

  return( 
    <div>
        <Button onClick={()=>logout()}>Logout</Button>
    </div>
)};

export default Profile;
