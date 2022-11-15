import React, { useState }  from 'react';
import StepBar from './StepBar'
import { Col, Container, Row, Card } from 'react-bootstrap';
import SingUp from './SingUp';
import PersonnelInfo from './PersonnelInfo';

const RegistrationForm = () => {
  const [index, setIndex] = useState(1);
  const [page, setPage] = useState(0);
  const FormTitles = ["Sing up", "Personal info","All infos"];
    
  //debut logique de step bar
  const prevButton = ()=>{
    if(index > 1){
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = ()=>{
    if(index < 3){
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  //fin logique de step bar

  //logique d'affichage des pages
  const [formData, setFormData] = useState({
    email: "",
    pwd: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    age: "",
  })

  const PageDisplay =()=> {
    if(page === 0){
        return <SingUp formData={formData} setFormData={setFormData}/>
    }else if(page === 1){
        return <PersonnelInfo formData={formData} setFormData={setFormData}/>
    }else{
        return (
          <>
            <div>{formData.email}
              <input class="bg-success form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled/>
            </div>
            <div>{formData.firstName}
              <input class="bg-success form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled/>
            </div>
            <div>{formData.lastName}
              <input class="bg-success form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled/>
            </div>
            <div>{formData.age}
              <input class="bg-success form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled/>
            </div>
            <div >
              <input className="text-success form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..."/>
              <label className="form-check-label" for="flexCheckChecked">Term and condition</label>
            </div>
          </>
        )
    }
  }
  //logique d'affichage des pages

  //page precedente
  const handlePrev =()=>{
    setPage((currPage) => currPage -1)
  }

  //page suivante
  const handleNext =()=> {
    if(page === FormTitles.length -1){

    }else{
      setPage((currPage) => currPage + 1)
    }
  }
  
  return (
    <>   
      <Container className="h-100 mt-5">
          
        <Card className='border-none'>
          <Row className='h-100 m-3'>
              <Col className='align-self-center'>
                  <StepBar step={index} />
              </Col>
          </Row>
            <Card.Header>
                <h1>{FormTitles[page]}</h1>
            </Card.Header>
            <Card.Body>
                {PageDisplay()}
            </Card.Body>
            <Card.Footer  className='d-flex justify-content-between'>
                <button 
                disabled={page === 0} onClick={()=>{prevButton(); handlePrev()}} className=' btn btn-primary' >
                    Previous
                </button>
                <div 
                onClick={()=>{nextButton(); handleNext()}}>
                    {page === FormTitles.length - 1 ? <button desabled className="btn btn-success">Save Account</button> : <button className="btn btn-warning">Next</button> }
                </div>
            </Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default RegistrationForm;
