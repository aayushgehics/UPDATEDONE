import React ,{useState} from 'react'
import axios from 'axios';
import './components.css'
import './grid.css'
import 'antd/dist/antd.css';
import {Button,Form,Input,Checkbox} from 'antd'
const api=axios.create({
    baseURL:'https://reqres.in/',
})

const Components = () => {
    const[cummy,setDummy]=useState({
        email:'',
        password:""
    })

    onchange=(e)=>{
        cummy[e.target.name]=e.target.value;
        setDummy(cummy);
    }
    onsubmit=(e)=>{
        e.preventDefault();
        const delta={ "email": cummy.email,
        "password": cummy.password}
        api.post('/api/register',delta).catch(error=>{
            if (error.response) {
                alert(error.response.data.error);
                
              } 
        }
        )
        api.post('/api/login/',delta).then(res=>{
            alert(`User Saved Status ${res.status}`)
        })
    }
    return (
        <div className="login">
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <div className="row" style={{background:'rgb(244, 244, 244)'}}>
            <header className="text_box" >
                <nav>
                    <b className="title">ATools<b style={{color:'orangered'}}>.</b></b>
                    <Button type="primary"  onClick={onsubmit} style={{backgroundColor:'blue',color:'white',font:'inherit',border:'none',cursor:'pointer',marginRight:'25px',width:'13.5%'}}>Start Trial</Button>
                    <Button className='btn' type="primary"  onClick={()=>{alert("This is a dummy call")}} style={{backgroundColor:'orangered',color:'white',font:'inherit',border:'none',cursor:'pointer',marginRight:"15px",width:'13.5%'}}>Login</Button>                
                </nav>
            </header>
            </div>
            <div className="tp" >
        <div className="col span-1-of-3" style={{marginTop:'10%'}}>
            <div className="row">
                <b className='login_title'>Welcome Back!</b>
            </div>
            <div className='row'>    
                <i className='subtitle'>This is for a change!!</i>
            </div>
            <div className='row'>
                <Form style={{width:'50vh'}} className="demo1">
                      <Input name="email" placeholder="Email address*"  style={{marginTop:'10px',height:'6.5vh'}}></Input>
                   <Input.Password className="pass" name="password" placeholder="Password*" style={{marginTop:'10px',height:'6.5vh'}}
                   /> <br/>
                  <Button onClick={onsubmit} style={{backgroundColor:'orangered',color:'white'}}>Login</Button>
                </Form>
                <div className="row pp" style={{marginTop:'10px'}}>
                <Checkbox className="col span-1-of-2 jj" style={{color:'grey'}}>Remember me</Checkbox>
                <Button type="text" className="col span-1-of-2" style={{color:'grey'}} onClick={()=>{alert("This is a dummy call")}}>Forgot password?</Button>
                </div>
            </div>
        </div>
        </div>
        <div className="dummy">
        <b >Submitted by Aayush Gehi</b>
        </div>
        </div>
    )
}

export default Components
